#climaya-cli
##Features

- Envia reportes del Clima al Whatsapp del usuario. 
 - Actualmente solo lo envía desde el telf. registrado de Twillo. Pues el tiempo de aprovación de cuenta de desarrollador en Whatsapp toma tiempo. 
- Reportes de: 
 - tiempo actual de la cuidad seleccionada
 - pronostico a días en el futuro de la cuidad seleccionada. 
 - altura de la ciudad seleccionada

## Lista de comandos:
     version, v            ...... Muestra le version del paquete.
      help, h               ...... Muestra el menu de ayuda.
      tiempo              ...... Muestra el tiempo de hoy.
      pronostico        ...... Da el pronostico del clima segun dias solicitados.
      altura                ...... Muestra la altura en metros de la cuidad seleccionada.
      completo          ...... Muestra un reporte completo de la cuidad seleccionada.
      noche                ...... Muestra un resumen relevante de la noche del dia de la consulta. 
      manana             ...... Muestra un resumen relevante del dia siguiente a la consulta.
      manana-noche  ...... Muestra un resumen relevante de la noche del dia siguiente a la consulta.

##Lista de Argumentos:
     --ubicacion, --u    <<Especifica la cuidad de la consulta.>>
	 --whatsapp, -wp   <<Opcion para enviar por whatsapp: true o false>>
	 --dias, --d       <<Dias para el pronostico>>

##Cuidades Disponibles
| #  | Cuidad  | Alterno   |
| ------------ | ------------ | ------------ |
| 1  |  Cuidad de Guatemala | Guatemala/Guate  |
|  2 |  Quetzaltenango |  Xela |
|   3| Coban  |   |
|   4| Retalhuleu  | Reu/Mazate/Mazatenango  |
|   5| Puerto San Jose  | San Jose  |
|   6|  Puerto Barrios |  Barrios |
|   7|  Zacapa |   |
|   8|  Huehuetenango | Huehue  |
|   9| Esquipulas  |   |
|   10| Flores  | Peten/Tikal  |
|   11| San Salvador  |  Salvador |
|   12| Tapachula  |   |
|13| Ciudad de Mexico| Cd. Mexico/Mexico DF|

## Ejemplos de Uso:
------------
Instalación (global para crear como variable de entorno)
`npm install --global climaya-cli`

Tiempo: Mostrando el tiempo actual en Guatemala y mandandolo por Whatsapp
    `climaya tiempo --u "Guatemala" --wp true`
	
Pronostico: Mostrando un pronostico de Peten para dos días despues. Mandandolo por whatsapp
`climaya pronostico --u "Peten" --d 2 --wp true`

Altura: Solicitando la altura de Retalhuleu pero, sin mandarlo por Whatsapp.
`climaya altura --ubicacion "Retalhuleu" --whatsapp false`

Completo: Solicitando un reporte completo de Xela/Quetzaltenango y mandandolo por Whatsapp.
`climaya completo --ubicacion "Xela" -wp true`
 .... De igual manera para el resto de comandos. :)
### Developer

## Alejandro Madrazo

Whatsapp: +502 35230129

Gmail: jmadrazo7@gmail.com

Instagram: @ja.madrazo


### End
