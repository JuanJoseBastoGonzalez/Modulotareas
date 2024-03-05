
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



document.getElementById("pulsar").addEventListener("click", function() {
  const link = "http://localhost:3000/prioridad";
  const add = document.getElementById("lista");
  
  fetch(link)
      .then(response => {
          if (!response.ok) {
              throw new Error('No se pudo obtener los datos del servidor.');
          }
          return response.json();
      })
      .then(data => {
          const altaData = data.alta;
          altaData.forEach((item, index) => {
              const uniqueId = `boton_${index}`; // Crear un identificador único
              add.innerHTML += `
                  <div class="listar">
                      <section class="titleTask">${item.nombre}</section>
                      <section class="dateTaskI">${item.dateStart}</section>
                      <section class="dateTaskF">${item.dateFinish}</section>
                      <section class="dateTaskF">${item.prioridad}</section>
                      <section>
                          <button class="chekY" id="${uniqueId}"  ><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
                          <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
                      </section>
                  </div>`;
              
              // Agregar evento de clic a cada botón
              document.getElementById(uniqueId).addEventListener('click', function() {
                  // Obtener la información asociada al botón clicado
                  const info = `Nombre: ${item.nombre}, Fecha de inicio: ${item.dateStart}, Fecha de fin: ${item.dateFinish}, Prioridad: ${item.prioridad}`;
                  // Mostrar la información en un alert
                  alert(info);
              });
          });
      })
      .catch(error => {
          console.error('Ha ocurrido un error al obtener los datos:', error);
      });
});
