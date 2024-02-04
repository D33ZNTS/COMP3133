console.log('* * Week02 - FS and Streams Examples');
const fs = require('fs')

//Read file(async)
fs.readFile('./data.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log('* * After readFile');

//Read file synchorniuosly
const data = fs.readFileSync('data.txt', 'utf8');
console.log(`Sync: ${data}`);
console.log('* * End readFile');


//Write file

const data_to_write = 'Hello world';
fs.writeFile('out_data.txt',data_to_write, (err) => {
    if (err) throw err;
    console.log('File written');
})
console.log('* * After writeFile')

//Write file sync

const data_to_write_sync = 'Hello word again sync';
fs.writeFileSync('out_data.txt', data_to_write_sync);
console.log('** End writeFile sync')