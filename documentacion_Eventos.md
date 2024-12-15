# API Eventos


## Añadir Eventos


URL: /events
MÉTODO:POST


```js

    {
        "nombre":"Torneo Futbol",
        "descripcion":"Torneo de Futbol 5v5",
        "fecha":"2025-01-02",
        "ubicacion":"Madrid",
        "tipoDeporte":"Futbol"
    }


```

Estos son los acmpos necesario para añadir un evento, si no están todos los campos salta el error que te avisa que falta algun campo. El campo organizador se añade automaticamente guardando el nombre del usuario en una variable y añadiendola.


## Get by Id

URL: /events/:id
MÉTODO:GET

Se añade el id del evento en la ruta y devuelve la información del mismo.


## Update by Id

URL: /events/:id
MÉTODO:PUT

Se añade el id del evento en la ruta y en el body toda la información nueva del evento.


## Delete by Id

URL: /events/:id
MÉTODO:DELETE

Se añade el id del evento en la ruta y se elimina el evento. Como mejora pensaba permitir solo que pudiera añadir y eliminar los usuarios con rol de administrador.

## Busqueda por type

URL: /events?type=Futbol
MÉTODO:GET

Se añade el término que se quiere buscar mediante la query type=Futbol por ejemplo y te devuelve el evento si existe sino te saldra el error de no encontrado.

## Consultas Avanzadas

No he podido encontrar el error que me da al tratar con datos tipos Date, estas rutas no dan error pero no devuelven una respuesta.

## Get by Id

URL: /events/upcoming
URL: /events/date?from=2025-01-01&to=2025-02-02
