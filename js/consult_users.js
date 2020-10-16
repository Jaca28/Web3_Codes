
$(document).ready( function () {
    $('#tabla_users').DataTable();
} );
function consult_users(){
    proveedores.IDu( (err, IDu_res) => {
        if (IDu_res) {
            console.log("IDu:"+IDu_res);
            users_look_up(IDu_res);
        }
        if (err) {
            console.log('oh no, error de consulta IDu');
        }
    }); 
}

function users_look_up(n){
    for (var i=0; i <= n; i++){
        proveedores.usuarios(i, (err, data_user_res) => {
            if (data_user_res) {
                console.log("data_user_res:"+data_user_res);
                users_print(data_user_res);
            }
            if (err) {
                console.log('oh no, error de Data_user_data');
            }
        }); 
    }
}

function users_print(data_user_res){
    var tabla_users = $('#tabla_users').DataTable();
    tabla_users.row.add([
        data_user_res[0],
        data_user_res[1],
        data_user_res[2],
        data_user_res[3]
    ]).draw(false);

}