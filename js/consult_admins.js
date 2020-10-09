

function consult_admins(){
    proveedores.IDa( (err, IDa_res) => {
        if (IDa_res) {
            console.log("IDa:"+IDa);
            admins_look_up(IDa_res);
        }
        if (err) {
            console.log('oh no, error de consulta IDa');
        }
    }); 
}

function admins_look_up(n){
    for (var i=0; i <= n; i++){
        proveedores.admins(i, (err, data_admin_res) => {
            if (data_admin_res) {
                console.log("data_admin_res:"+data_admin_res);
                admins_print(data_admin_res);
            }
            if (err) {
                console.log('oh no, error de Data_admin_data');
            }
        }); 
    }
}

function admins_print(data_admin_res){
    var tabla_admins = $('#tabla_admins').DataTable();
    tabla_admins.row.add([
        data_admin_res[0],
        data_admin_res[1],
        data_admin_res[2],
        data_admin_res[3]
    ]).draw(false);

}