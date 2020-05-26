const Telnet = require('telnet-client')
require('dotenv').config()

async function run(command) {
    let connection = new Telnet()
       let params = {
        host: process.env.HOST,
        port: 4212,
        negotiationMandatory: false
      }
   
    try {
      await connection.connect(params)
    } catch(error) {
        console.log(error);
    }
    try {
         await connection.exec(command)
    } catch(error) {
        connection.end()
    }
    connection.end()
}

module.exports.run = run; 

//run('add /home/marco/Desktop/olhar.mp3');