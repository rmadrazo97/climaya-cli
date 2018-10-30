const ora = require('ora')
const getWeather = require('../utils/weather')
const getForecast = require('../utils/forecast')
const getLocation = require('../utils/location')
module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.ubicacion || args.u;
    const wp = args.wp || args.whatsapp 
    const forecast = await getWeather(location);
    spinner.stop();

    var mensaje = `Reporte completo de ${location}: `;
    mensaje += ` Ultimo Reporte:${forecast[0].date_up} | Condicion:${forecast[0].condition} | Temperatura Actual:${forecast[0].temp} | Direccion Viento:${forecast[0].wind_dir} | Velocidad Viento:${forecast[0].wind_speed}| Fase Lunar:${forecast[0].moon_phase} | Amanecer:${forecast[0].sunrise} | Atardecer:${forecast[0].sunset} | Condiciones:${forecast[0].condition} | Precipitacion:${forecast[0].precip}mm `;
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
        console.log(mensaje);
    }

  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}