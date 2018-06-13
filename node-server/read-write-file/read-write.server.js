const csv = require('csv');
const xlsx = require('node-xlsx');
const fs = require('fs');
const mkdirp = require('make-dir');

exports.listen = (app) => {
    app.get('/translateFile/:fileName', function(req, res) {

        // Parse a buffer
        const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/${req.params.fileName}`));
        mkdirp(`${__dirname}/files`).then(path => {
            for(let i = 1; i < workSheetsFromBuffer[0].data.length; i ++) {
                let item1 = workSheetsFromBuffer[1].data[i];
                let item2 = workSheetsFromBuffer[0].data[i];
                if(item1.length) {
                    let input = [["name", item1[1], item2[1]], ['order', i, i, i]];
                    if(item1[7]) {
                        input.push(["T & C", item1[7], item2[7]]);
                    }
                    csv.stringify(input,  function(err, output){
                        fs.writeFile(`${path}/${item1[1].replace(/\//g, '')}.csv`, output, (err) => {
                            if(err) throw err;
                            console.log('success');
                        });
                    })
                }
            }
        })
    })

    app.get('/excel/:fileName', function(req, res) {

        // Parse a buffer
        const workSheetsFromBuffer = fs.readFileSync(`${__dirname}/${req.params.fileName}`);
        res.send(workSheetsFromBuffer);
    })
}