const axios = require('axios')
const error = require('./error')
idCity = null;
location2 ='';
module.exports = async (location) => {
    location2 = location
    switch (location2) {
        case 'Guate':
            idCity = 1;
            break;
        case 'Guatemala':
            idCity = 1;
            break;
        case 'Ciudad de Guatemala':
            idCity = 1;
            break;
        case 'Xela':
            idCity = 2;
            break;
        case 'Quetzaltenango':
            idCity = 2;
            break;
        case 'Coban':
            idCity = 3;
            break;
        case 'Reu':
            idCity = 4;
            break;
        case 'Retalhuleu':
            idCity = 4;
            break;
        case 'Mazate':
            idCity = 4;
            break;
        case 'Mazatenango':
            idCity = 4;
            break;
        case 'Puerto San Jose':
            idCity = 5;
            break;
        case 'San Jose':
            idCity = 5;
            break;
        case 'Puerto Barrios':
            idCity = 6;
            break;
        case 'Barrios':
            idCity = 6;
            break;
        case 'Zacapa':
            idCity = 7;
            break;
        case 'Huehue':
            idCity = 8;
            break;
        case 'Huehuetenango':
            idCity = 8;
            break;
        case 'Esquipulas':
            idCity = 9;
            break;
        case 'Flores':
            idCity = 10;
            break;
        case 'Peten':
            idCity = 10;
            break;
        case 'Tikal':
            idCity = 10;
            break;
        case 'San Salvador':
            idCity = 11;
            break;
        case 'Salvador':
            idCity = 11;
            break;
        case 'Tapachula':
            idCity = 12;
            break;
        case 'Cuidad de Mexico':
            idCity = 17;
            break;
        case 'Cd. Mexico':
            idCity = 17;
            break;
        case 'Mexico DF':
            idCity = 17;
            break;
        default:
            error(`"${location}" No es una Cuidad valida.`);
            break;
    }
  const results = await axios({
    method: 'get',
    url: 'http://climaya.com/fp-weather/api/api.php',
    params: {
      q: 'current',
      id: idCity
    },
  })
  return results.data

}