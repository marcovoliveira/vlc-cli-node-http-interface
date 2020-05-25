const Telnet = require('telnet-client')

async function run(command) {
    let connection = new Telnet()
       let params = {
        host: '192.168.1.84',
        port: 4212,
        negotiationMandatory: falseCon
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