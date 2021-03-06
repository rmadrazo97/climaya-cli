const menus = {
    main: `
      climaya [command] <options>
  
      version, v    ...... Muestra le version del paquete.
      help, h       ...... Muestra el menu de ayuda.
      tiempo        ...... Muestra el tiempo de hoy.
      pronostico    ...... Da el pronostico del clima segun dias solicitados.
      altura        ...... Muestra la altura en metros de la cuidad seleccionada.
      completo      ...... Muestra un reporte completo de la cuidad seleccionada.
      noche         ...... Muestra un resumen relevante de la noche del dia de la consulta. 
      manana        ...... Muestra un resumen relevante del dia siguiente a la consulta.
      manana-noche  ...... Muestra un resumen relevante de la noche del dia siguiente a la consulta.
      Cuidades Disponibles:
              +----+---------------------+----------------------------+
              | #  | Cuidad              | Alt                        |
              +----+---------------------+----------------------------+
              | 1  | Cuidad de Guatemala | Guatemala / Guate          |
              +----+---------------------+----------------------------+
              | 2  | Quetzaltenango      | Xela                       |
              +----+---------------------+----------------------------+
              | 3  | Coban               |                            |
              +----+---------------------+----------------------------+
              | 4  | Retalhuleu          | Reu / Mazate / Mazatenango |
              +----+---------------------+----------------------------+
              | 5  | Puerto San Jose     | San Jose                   |
              +----+---------------------+----------------------------+
              | 6  | Puerto Barrios      | Barrios                    |
              +----+---------------------+----------------------------+
              | 7  | Zacapa              |                            |
              +----+---------------------+----------------------------+
              | 8  | Huehuetenango       | Huehue                     |
              +----+---------------------+----------------------------+
              | 9  | Esquipulas          |                            |
              +----+---------------------+----------------------------+
              | 10 | Flores              | Peten / Tikal              |
              +----+---------------------+----------------------------+
              | 11 | San Salvador        | Salvador                   |
              +----+---------------------+----------------------------+
              | 12 | Tapachula           |                            |
              +----+---------------------+----------------------------+
              | 13 | Cuidad de Mexico    | Cd. Mexico / Mexico DF     |
              +----+---------------------+----------------------------+`,


    tiempo: `
      climaya tiempo --ubicacion <...> --dias <...> --whatsapp <true/false>
  
      --ubicacion, --u ..... Cuidad de busqueda
      --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    pronostico: `
      climaya pronostico --ubicacion --whatsapp <true/false>

      --ubicacion, --u ..... Cuidad de busqueda
      --dias, --d      ..... dias del pronostico. <<obligatorio?
      --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    altura: `
      climaya altura --ubicacion <...> --whatsapp <true/false>

      --ubicacion, --u ..... Cuidad de busqueda
      --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    completo: `
    climaya completo --ubicacion <...> --whatsapp <true/false>

    --ubicacion, --u ..... Cuidad de busqueda
    --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    noche: `
    climaya noche --ubicacion <...> --whatsapp <true/false>

    --ubicacion, --u ..... Cuidad de busqueda
    --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    manana: `
    climaya manana --ubicacion <...> --whatsapp <true/false>

    --ubicacion, --u ..... Cuidad de busqueda
    --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
    manana_noche: `
    climaya manana_noche --ubicacion <...> --whatsapp <true/false>

    --ubicacion, --u ..... Cuidad de busqueda
    --whatsapp, --wp ..... Enviar mensaje por whatsapp > true o false`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }