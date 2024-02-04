const fs = require('fs');

//Append to a file
const str = 'George Brown College';
async function appendData(str) {
    try {
        await fs.appendFile('out_data.txt', str, ()=>{flag:'a+'})
        console.log('File appended');
    } catch (error) {
        console.log(error);
    }
}

appendData('\n1 - George Brown College!');
appendData('\n2 - George Brown College!');
appendData('\n3 - George Brown College!');

fs.appendFile('out_data.txt', str, (err) => {
    if (err) throw err;
    console.log('Fille appended');
})
//Append to file sync
fs.appendFileSync('out_data.txt', 'Peter V');

