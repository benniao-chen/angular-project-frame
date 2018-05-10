import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHandleService } from './http-handle.service';

@Injectable()
export class InterceptedHttp extends Http {
    _httphandle: HttpHandleService;

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, pubsub: HttpHandleService) {
        super(backend, defaultOptions);
        this._httphandle = pubsub;
    }

    // request(url: string | Request, options ? : RequestOptionsArgs): Observable < Response > {
    //     console.log("request");
    //     return this.intercept(super.request(url, options));
    // }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options), url);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)), url);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)), url);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)), url);
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/json');
        }
        return options;
    }

    intercept(observable: Observable<Response>, url): Observable<Response> {
        this._httphandle.beforeRequest.emit("beforeRequestEvent");
        return Observable.create((observer) => {
            observable.subscribe(res => {
                observer.next(res);
            }, (err) => {
                this._httphandle.afterRequest.emit("afterRequestEvent");
                this.handleError(err.status);
                observer.error(err);
            }, () => {
                this._httphandle.afterRequest.emit("afterRequestEvent")
                observer.complete();        //注意添加这句，否则有可能一些第三方的包不能正常使用，如ng2-translate
            });
        });
    }

    handleError(status) {
        if (status === 0) {
            this._httphandle.errorToast.emit("请求响应错误，请检查网络");
        } else if (status === 404) {
            this._httphandle.errorToast.emit("请求链接不存在，请联系管理员");
        } else if (status === 500) {
            this._httphandle.errorToast.emit("服务器出错，请稍后再试");
        } else {
            this._httphandle.errorToast.emit("未知错误，请检查网络");
        }
    }
}
