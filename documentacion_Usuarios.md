# API Usuarios


## Tabla Usuarios

```js

[
    {
        id:1,
        nombre:"Miguel",
        password:"1234dkfdjf",
        rol:"u"

    }
]



```


## Registro

URL: /users/register
MÉTODO:POST

Para registrarse nos vamos a la ruta comentada mediante el siguiente body:


```js

    {
        nombre:"Miguel",
        password:"1234dkfdjf",
        rol:"a"
    }


```
Los campos de nombre y password son obligatorios sin embargo el de rol puede añadirse siendo dos valores "a" para si es usuario administrador y "u" para un usuario normal, si no se añade este campo se asigna automáticamente como "u".


## Login

URL: /users/login
MÉTODO:POST


```js

    {
        nombre:"Miguel",
        password:"1234dkfdjf"
    }


```


El login se tiene que dar el nombre y password del usuario y se comprueba en la base de datos si existe el usuario.



## Profile

URL: /users/profile
MÉTODO:GET


En esta ruta esta protegida por lo cual solo se puede acceder mediante el login y da la información del usuario conectado.