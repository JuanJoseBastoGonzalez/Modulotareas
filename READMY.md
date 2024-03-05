se utiliza json-server para el almacenamiento y tratamiento de datos.

### http://localhost:3000/prioridad

# json

```json
{
  "prioridad": {
    "alta": [
      {
        "nombre": "jhhfj",
        "dateStart": "",
        "dateFinish": "",
        "prioridad": "Alta"
      },
      {
        "nombre": "gfdg",
        "dateStart": "",
        "dateFinish": "",
        "prioridad": "Alta"
      }
    ],
    "baja": [
      {
        "nombre": "",
        "dateStart": "",
        "dateFinish": "",
        "prioridad": "Baja"
      }
    ]
  },
  "estado": {
    "terminadas": [],
    "Noterminadas": []
  }
}
```

se utiliza esta estructura de json

### comandos utilizados para el uso del json-sever 

```powershell
npm install -g json-server
json-server --watch db.json
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## mensajes de error programdos

```js
 throw new Error('Error al obtener los datos del servidor');
 throw new Error('Error al enviar los datos actualizados al servidor');
 throw new Error('No se pudo obtener los datos del servidor.');
 console.error('Ha ocurrido un error al obtener los datos:', error);
```

