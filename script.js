

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

document.getElementById('priorityDown').addEventListener('click', function() {
    const url = 'http://localhost:3000/prioridad';
  
    // Realizar una solicitud GET para obtener los datos actuales del servidor
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }
        return response.json();
      })
      .then(data => {
        // Iterar sobre la lista "alta" en los datos obtenidos y generar el HTML dinámicamente
        data.baja.forEach(element => {
         const  addCodeTask = document.getElementById("lista");
          addCodeTask.innerHTML += `
          <section>
            <section class="titleTask">${element.nombre}</section>
            <section class="dateTaskI">${element.dateStart}</section>
            <section class="dateTaskF">${element.dateFinish}</section>
            <section>
              <button class="chekY" id="chekY"><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
              <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
            </section>
        </section>
          `;
        });
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