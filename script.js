
document.getElementById('priorityUp').addEventListener('click', function() {
  const url = 'http://localhost:3000/prioridad';
  var nombreT = document.getElementById("task").value;
  var fechaInicio = document.getElementById("date1").value;
  var fechaFin = document.getElementById("date2").value;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos del servidor');
      }
      return response.json();
    })
    .then(data => {
      data.alta.push({ 
        nombre: nombreT,
        dateStart: fechaInicio,
        dateFinish: fechaFin,
        prioridad:"Alta"
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


document.getElementById('priorityDown').addEventListener('click', function() {
    const url = 'http://localhost:3000/prioridad';
    var nombreT = document.getElementById("task").value;
    var fechaInicio = document.getElementById("date1").value;
    var fechaFin = document.getElementById("date2").value;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        return response.json();
      })
      .then(data => {
        
        data.baja.push({ 
          nombre: nombreT,
          dateStart: fechaInicio,
          dateFinish: fechaFin,
          prioridad:"Baja"
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
  document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    document.getElementById("pulsar").addEventListener("click", function() {
      const link = "./data.json";
      const add=document.getElementById(`lista`);
      fetch(link)
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo obtener los datos del servidor.');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);            	
          add.innerHTML+=



          ` <section class="titleTask">1</section>
    <section class="dateTaskI">1</section>
    <section class="dateTaskF">1</section>
    <section >
          <button class="chekY" id="chekY"><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
          <button class="chekN" id="chekN" ><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
          
    </section>`




          // Aquí imprimes todo el objeto JSON recuperado del servidor
        })
        .catch(error => {
          console.error('Ha ocurrido un error al obtener los datos:', error);
        });
    });
  });
  
  
  




// Realizamos una solicitud GET al servidor JSON utilizando fetch
// // Realizamos una solicitud GET al servidor JSON utilizando fetch
// fetch('http://localhost:3000/prioridad') // Reemplaza 'tuRuta' por la ruta correcta en la que está sirviendo JSON-Server tus datos
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('No se pudo obtener los datos del servidor.');
//     }
//     return response.json();
//   }) // Convertimos la respuesta a formato JSON
//   .then(data => {
//     // Verificamos si data y data.prioridad existen
//     if (data && data.prioridad) {
//       // Si existen, accedemos a los elementos de prioridad "alta" y los mostramos por consola
//       const elementosAlta = data.prioridad.alta;
//       console.log("Elementos de prioridad alta:");
//       elementosAlta.forEach(elemento => {
//         console.log("Nombre:", elemento.nombre);
//         console.log("Fecha de inicio:", elemento.dateStart);
//         console.log("Fecha de finalización:", elemento.dateFinish);
//         console.log("Prioridad:", elemento.prioridad);
//         console.log("-----------------------");
//       });
//     } else {
//       console.log("No se encontraron datos de prioridad alta.");
//     }
//   })
//   .catch(error => {
//     console.error('Ha ocurrido un error al obtener los datos:', error);
//   });



      // Mostrar u ocultar la lista dependiendo de si hay tareas o no
     

    











// Función para abrir la ventana de diálogo
function openDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

// Función para cerrar la ventana de diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}