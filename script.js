
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


   
// document.addEventListener("DOMContentLoaded", function() {
    // document.getElementById("pulsar").addEventListener("click", function() {
    //     const link = "http://localhost:3000/prioridad";
    //     const add = document.getElementById("lista");
    //     fetch(link)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('No se pudo obtener los datos del servidor.');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             const altaData = data.alta;
    //             //const dialogId = `ventana-${element.name.replace(/\s+/g, '-').toLowerCase()}`;
    //             altaData.forEach(item => {

    //               //const dialogId = `ventana-${element.name.replace(/\s+/g, '-').toLowerCase()}`;
    //                 add.innerHTML += `
    //                 <div class="listar">
    //                     <section class="titleTask">${item.nombre}</section>
    //                     <section class="dateTaskI">${item.dateStart}</section>
    //                     <section class="dateTaskF">${item.dateFinish}</section>
    //                     <section class="dateTaskF">${item.prioridad}</section>
    //                     <section>
    //                         <button class="chekY" id="chekY"  ><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
    //                         <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
    //                     </section>
    //                     </div> `;


                  
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Ha ocurrido un error al obtener los datos:', error);
    //         });
    // });

  //   document.getElementById("pulsar").addEventListener("click", function() {
  //     const link = "http://localhost:3000/prioridad";
  //     const add = document.getElementById("lista");
      
  //     fetch(link)
  //         .then(response => {
  //             if (!response.ok) {
  //                 throw new Error('No se pudo obtener los datos del servidor.');
  //             }
  //             return response.json();
  //         })
  //         .then(data => {
  //             const altaData = data.alta;
  //             altaData.forEach((item, index) => {
  //                 const uniqueId = `boton_${index}`; // Crear un identificador único
  //                 add.innerHTML += `
  //                     <div class="listar">
  //                         <section class="titleTask">${item.nombre}</section>
  //                         <section class="dateTaskI">${item.dateStart}</section>
  //                         <section class="dateTaskF">${item.dateFinish}</section>
  //                         <section class="dateTaskF">${item.prioridad}</section>
  //                         <section>
  //                             <button class="chekY" id="${uniqueId}"  ><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
  //                             <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
  //                         </section>
  //                     </div>`;
                  
  //                 // Agregar evento de clic a cada botón
  //                 document.getElementById(uniqueId).addEventListener('click', function() {
  //                     // Obtener la información asociada al botón clicado
  //                     const info = `Nombre: ${item.nombre}, Fecha de inicio: ${item.dateStart}, Fecha de fin: ${item.dateFinish}, Prioridad: ${item.prioridad}`;
  //                     // Mostrar la información en un alert
  //                     alert(info);
  //                 });
  //             });
  //         })
  //         .catch(error => {
  //             console.error('Ha ocurrido un error al obtener los datos:', error);
  //         });
  // });
  
  



//   document.getElementById("pulsar").addEventListener("click", function() {
//     const link = "http://localhost:3000/prioridad";
//     const add = document.getElementById("lista");
    
//     fetch(link)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('No se pudo obtener los datos del servidor.');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const altaData = data.alta;
//             altaData.forEach((item, index) => {
//                 const uniqueId = `boton_${index}`; // Crear un identificador único
//                 add.innerHTML += `
//                     <div class="listar">
//                         <section class="titleTask">${item.nombre}</section>
//                         <section class="dateTaskI">${item.dateStart}</section>
//                         <section class="dateTaskF">${item.dateFinish}</section>
//                         <section class="dateTaskF">${item.prioridad}</section>
//                         <section>
//                             <button class="chekY" id="${uniqueId}"  ><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
//                             <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
//                         </section>
//                     </div>`;
                
//                 // Agregar evento de clic a cada botón
//                 document.getElementById(uniqueId).addEventListener('click', function() {
//                     // Obtener la información asociada al botón clicado
//                     const info = `Nombre: ${item.nombre}, Fecha de inicio: ${item.dateStart}, Fecha de fin: ${item.dateFinish}, Prioridad: ${item.prioridad}`;
//                     // Mostrar la información en un alert
//                     alert(info);
//                 });
//             });
//         })
//         .catch(error => {
//             console.error('Ha ocurrido un error al obtener los datos:', error);
//         });
// });




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
























// });


//   const url="http://localhost:3000/prioridad"
//   const getTask = async() => {
//     try {
//         const respuesta = await fetch(url);
//         // Si la respuesta es correcta
//         if(respuesta.status === 200){
//             const datos = await respuesta.json();
//             console.log(datos);
//             return(datos);
//         } else if(respuesta.status === 401){
//             console.log('La url no es correcta');
//         } else if(respuesta.status === 404){
//             console.log('no existe la tarea');
//         } else {
//             console.log('Se presento un error en la peticion consulte al Administrador');
//         } 
//     } catch(error){ 
//         console.log(error);
//     }

// }


  // document.addEventListener("DOMContentLoaded", function() {
  //   document.getElementById("pulsar").addEventListener("click", function() {
  //     const link = "./data.json";
  //     const add = document.getElementById(`lista`);
  //     fetch(link)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('No se pudo obtener los datos del servidor.');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         console.log(data);            	
  //         add.innerHTML += `
  //           <section class="titleTask">l</section>
  //           <section class="dateTaskI">l</section>
  //           <section class="dateTaskF">1</section>
  //           <section>
  //             <button class="chekY" id="chekY"><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
  //             <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
  //           </section>`;
  //       })
  //       .catch(error => {
  //         console.error('Ha ocurrido un error al obtener los datos:', error);
  //       });
  //   });
  // });
//   document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("pulsar").addEventListener("click", function() {
//         const link = "http://localhost:3000/prioridad";
//         const add = document.getElementById("lista");
        
//         fetch(link)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('No se pudo obtener los datos del servidor.');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);  
//                 // Filtrar solo los objetos "alta"
//                 const altaData = data.alta;
//                 altaData.forEach(item => {
//                     add.innerHTML += `
//                         <section class="titleTask">${item.nombre}</section>
//                         <section class="dateTaskI">${item.dateStart}</section>
//                         <section class="dateTaskF">${item.dateFinish}</section>
//                         <section>
//                             <button class="chekY" id="chekY"><i class="fa-regular fa-circle-check" style="color: #000000;"></i></button>
//                             <button class="chekN" id="chekN"><i class="fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
//                         </section>`;
//                 });
//             })
//             .catch(error => {
//                 console.error('Ha ocurrido un error al obtener los datos:', error);
//             });
//     });
// });

  








//       // Mostrar u ocultar la lista dependiendo de si hay tareas o no
     

    











// // Función para abrir la ventana de diálogo
// function openDialog() {
//     document.getElementById('dialog').style.display = 'flex';
// }

// // Función para cerrar la ventana de diálogo
// function closeDialog() {
//     document.getElementById('dialog').style.display = 'none';
// }
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("pulsar").addEventListener("click", function() {
//       const link = "http://localhost:3000"; // URL del servidor JSON
//       const add = document.getElementById("lista");
      
//       fetch(link)
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error('No se pudo obtener los datos del servidor.');
//               }
//               return response.json();
//           })
//           .then(data => {
//               console.log(data); // Imprime los datos devueltos por el servidor JSON
//               // Guarda los datos en un objeto
//               const datosObjeto = data;
//               console.log(datosObjeto); // Imprime el objeto con los datos guardados
//           })
//           .catch(error => {
//               console.error('Ha ocurrido un error al obtener los datos:', error);
//           });
//   });
// });

