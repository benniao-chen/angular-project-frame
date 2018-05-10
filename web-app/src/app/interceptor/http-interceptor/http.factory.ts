import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./http.interceptor";
import { HttpHandleService } from "./http-handle.service";


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, httpHandleService: HttpHandleService): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, httpHandleService);
}