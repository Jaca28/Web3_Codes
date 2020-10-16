var nombre = document.getElementById("nombre");
var nit = document.getElementById("nit");
var ciudad = document.getElementById("ciudad");

$("#buttonR").click(function() {
    proveedores.anotar_proveedor(nombre.value, nit.value, ciudad.value, (err, res) => {
        if (res) {
            console.log("Registro de Provedor Exitoso");
        }
        if (err) {
            console.log('oh no');
        }
    });
});