var nombre = document.getElementById("nombre");
var id = document.getElementById("id");
var email = document.getElementById("email");
var address = document.getElementById("address");

var id = document.getElementById("id");
$("#buttonR").click(function() {
    proveedores.new_admin(nombre.value, id.value, email.value, address.value, (err, res) => {
        if (res) {
            console.log("Registro de Administrador Exitoso");
        }
        if (err) {
            console.log('oh no');
        }
    });
});