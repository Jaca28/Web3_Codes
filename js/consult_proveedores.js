
$(document).ready( function () {
    $('#tabla_proveedores').DataTable();
} );
function consult_proveedores(){
    proveedores.IDp( (err, IDp_res) => {
        if (IDp_res) {
            console.log("IDp:"+IDp_res);
            proveedores_look_up(IDp_res);
        }
        if (err) {
            console.log('oh no, error de consulta IDp');
        }
    }); 
}

function proveedores_look_up(n){
    for (var i=0; i <= n; i++){
        proveedores.proveedores(i, (err, data_proveedor_res) => {
            if (data_proveedor_res) {
                console.log("data_proveedor_res:"+data_proveedor_res);
                proveedor_print(data_proveedor_res);
            }
            if (err) {
                console.log('oh no, error de Data_proveedor_data');
            }
        }); 
    }
}

function proveedor_print(data_proveedor_res){
    var tabla_proveedores = $('#tabla_proveedores').DataTable();
    tabla_proveedores.row.add([
        data_proveedor_res[0],
        data_proveedor_res[1],
        data_proveedor_res[2],
        data_proveedor_res[3]
    ]).draw(false);

}