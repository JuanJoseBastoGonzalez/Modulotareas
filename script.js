var dataUp = [];
var dataDown =[];
var butonP = document.getElementById("priorityUp");
butonP.addEventListener("click", () => {
    var dataDic = {
        "nombre": "",
        "dateStart": "",
        "dateFinish": "",
        "prioridad":"Alta"
    };
    var nombreT = document.getElementById("task").value;
    var fechaInicio = document.getElementById("date1").value;
    var fechaFin = document.getElementById("date2").value;
    dataDic["nombre"] = nombreT;
    dataDic["dateStart"] = fechaInicio;
    dataDic["dateFinish"] = fechaFin;
    dataUp.push(dataDic);
    alert(JSON.stringify(dataDic));
    alert(JSON.stringify(data));
    console.log(data)
});
dataUp.forEach(Element=>{
    const tareasp = document.getElementById("lista")
    tareasp.innerHTML+=
    g

});









// Función para abrir la ventana de diálogo
function openDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

// Función para cerrar la ventana de diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}