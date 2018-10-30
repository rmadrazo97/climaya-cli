const ora = require('ora')
const getAltitude = require('../utils/altitude')
const getLocation = require('../utils/location')
module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.ubicacion || args.u 
    const wp = args.wp || args.whatsapp
    const alt = await getAltitude(location)
    spinner.stop()
    var mensaje = `La altura de ${location} es: ${alt[0].elevation} metros`;
    if (wp) {
        //--Whatsapp---
        const accountSid = 'ACfe2c5a39fe0692a73e4bf720d35b6c4f';
        const authToken = 'aa6e8daeff8281f47dba0786ce7d18cf';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: mensaje,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+50235230129'
            })
            .then(message => console.log(mensaje))
            .done();
        //--Whatsapp---
    }else {
        console.log(mensaje)
    }

    //onsole.log(mensaje)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}