// var dataUp = [];
// var dataDown =[];
// var butonP = document.getElementById("priorityUp");
// butonP.addEventListener("click", () => {
//     var dataDic = {
//         "nombre": "",
//         "dateStart": "",
//         "dateFinish": "",
//         "prioridad":"Alta"
//     };
//     var nombreT = document.getElementById("task").value;
//     var fechaInicio = document.getElementById("date1").value;
//     var fechaFin = document.getElementById("date2").value;
//     dataDic["nombre"] = nombreT;
//     dataDic["dateStart"] = fechaInicio;
//     dataDic["dateFinish"] = fechaFin;
//     dataUp.push(dataDic);
//     alert(JSON.stringify(dataDic));
//     alert(JSON.stringify(data));
//     console.log(data)
// });
// dataUp.forEach(Element=>{
//     const tareasp = document.getElementById("lista")
//     tareasp.innerHTML+=
//     g

// });

// URL del servidor JSON
const url = 'http://localhost:3000/prioridad'; // Asegúrate de que la URL sea correcta

// Realizar una solicitud GET para obtener los datos actuales del servidor
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error al obtener los datos del servidor');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Agregar el nuevo objeto al array "alta"
//     data.alta.push({ 
//       // Aquí puedes definir los campos de tu nuevo objeto
//       campo1: "valor1",
//       campo2: "valor2,
//       // ...
//     });

//     // Configuración de la solicitud PUT para enviar los datos actualizados al servidor
//     const opciones = {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };

//     // Enviar la solicitud PUT al servidor
//     return fetch(url, opciones);
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error al enviar los datos actualizados al servidor');
//     }
//     console.log('Objeto agregado exitosamente al array "alta" en el servidor');
//   })



document.getElementById('priorityDown').addEventListener('click', function() {
    const url = 'http://localhost:3000/prioridad';
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        return response.json();
      })
      .then(data => {
        data.alta.push({ 
          // Aquí puedes definir los campos de tu nuevo objeto
          campo1: "valor1",
          campo2: "valor2",
          // ...
        });
  
        const opciones = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
  
        return fetch(url, opciones);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al enviar los datos actualizados al servidor');
        }
        console.log('Objeto agregado exitosamente al array "alta" en el servidor');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  




// Función para abrir la ventana de diálogo
function openDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

// Función para cerrar la ventana de diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}