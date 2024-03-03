

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
  const url = 'http://localhost:3000/prioridad'
// dataUp.forEach(Element=>{
//     const tareasp = document.getElementById("lista")
//     tareasp.innerHTML+=
//     g

// });
url.alta.forEach(element => {
    const url = 'http://localhost:3000/prioridad';
    
    const tareasp = document.getElementById("lista");
    const addCodeTask =document.getElementById("lista")
    addCodeTask.innerHTML+= `
    <section class="titleTask">${Element.nombre}</section>
    <section class="dateTaskI">${element.}</section>
    <section class="dateTaskF">1</section>
    <section >
         <button class="chekY" id="chekY"><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
         <button class="chekN" id="chekN" ><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
         
    </section>
    
    `;
    data.alta

});








// Función para abrir la ventana de diálogo
function openDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

// Función para cerrar la ventana de diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}