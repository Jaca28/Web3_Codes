pragma solidity ^0.6.0;   // version del solidity (lenguaje de programación)

contract contrato_proveedores {  //definir el nombre del contrato y su contenido
    
    //Variables globales 
    uint public IDp=0;  //cuenta de proveedores
    uint public IDa=0;  //cuenta de administradores
    uint public IDu=0;  //cuenta de usuarios
    address public owner; //variable para guardar al dueño
    
    //constructor
    //Funcion de constructor: Se ejecuta siempre en el despliegue
    constructor() public {
        owner = msg.sender;   //Guardamos la dirección de quien despliega como dueño
        address2admin[msg.sender]=true;  //le asignamos permisos de administrador mediante el mapeo
    }
    
    
    //modificadores: Permiten crear lineas de codigo que se incerten facilmente en cualquier Funcion
    //EJ: una funcion para reconocer al dueño del contrato
    modifier onlyOwner {
        require(isOwner(), "Only owner can do that!");
        _;
    }
    
    function isOwner() view private returns(bool) {
        return msg.sender == owner;    
    }
    
    //Estructuras
    //Se definen los tipos y modelos de datos, es decir las categorias de datos y sus subdatos
    
    //Se crean proveedores
    struct proveedor{
        string nombre;
        string nit;
        string ciudad;
    }
    //Se crean usuarios
    struct usuario{
        string nombre;
        string cc;
        string email;
        address user_address;
    }
    //Se crean administradores
    struct admin{
        string nombre;
        string cc;
        string email;
        address admin_address;
    }
    //Se crean reseñas
    struct review{
        uint IDp;
        uint score;
        string comentarios;
        address user_address;
    }
    
    
    //listados
    
    //Se definen listas de datos, según las categorias pre-definidas en las estructuras
    //En cada listado se acumulan datos mediantes push ejecutados en funciones
    proveedor[] public proveedores;
    usuario[] public usuarios;
    admin[] public admins;
    
    //Mapeos
    //Definen relaciones de diferentes tipos de datos
    //EJ: mapeo entre entero y bolenao, me sirve para anotar de las listas cuales IDs estan autorizados
    //EJ: mapeo entre una dirección y un entero puede ser un saldo (ver ejemplo de token basico)
    
    mapping (string => uint) public NombreProveedor2ID; //Relaciona el nombre del proveedor y su identificador en el sistema
    mapping (uint => bool) public ID2inscrito;          //Relaciona un identificador de proveedor, con su estado de inscripción
    mapping (string => bool) nit2inscrito;              //realciona un nit  de proveedor, con su estado de inscripción
    mapping (string => uint) nit2IDp;                   //realciona un nit  de proveedor, con un identificador de proveedor
    mapping (address => bool) address2admin;            //relaciona direcciones y su autorización como administradores
    mapping (address => bool) address2user;             //relaciona direcciones y su autorización como usuario
    mapping (uint => review[]) proveedor2reviews;       //Relaciona un identificador de proveedor, con su lista de reseñas acumuladas
    mapping (uint => uint) proveedor2total_reviews;     //Relaciona un identificador de proveedor, con su total de reseñas
    mapping (uint => uint) proveedor2acumulado_score;   //Relaciona un identificador de proveedor, con la suma de las califiaciones para posteriormente calcular el promedio
    
    //Funciones de Registro
    //Nos permiten ejecutar logicas de registro y consulta de datos
    
    //Funcion para registrar proveedores en el listado
    function anotar_proveedor(string memory _nombre, string memory _nit, string memory _ciudad) public{
        //Se deben verificar primero las condiciones mediante el require-> usuario inscrito y proveedor no inscrito
        require(address2user[msg.sender], "Para agregar un proveedor debe estar inscrito como usuario");
        require(nit2inscrito[_nit]==false, "El Nit ya fue inscrito");    
        //Luego de verificar las condiciones, ejecutamos la logica
        proveedores.push(proveedor(_nombre,_nit,_ciudad));  //anota en el listado un nuevo proveedor
        NombreProveedor2ID[_nombre]=IDp;                    //Relacionamos el nuevo proveedor con la posición de la lista o ID
        ID2inscrito[IDp]=true;                              //Marcamos el proveedor como inscrito
        nit2inscrito[_nit]=true;                            //Marcamos el nit como inscrito
        nit2IDp[_nit]=IDp;                                  //Relacionamos el Nit y el ID
        IDp++;                                              //Aumentamos la cuenta para registrar el proximo bajo un nuevo ID
    }
    
    //Similar a registrar proveedores, se registran adminsitradores, se les concede acceso mediante las llaves boolenas
    function new_admin (string memory _nombre, string memory _cc, string memory _email, address _admin_address) public onlyOwner{
        admins.push(admin(_nombre,_cc,_email, _admin_address));
        address2admin[_admin_address]=true;
        IDa++;
    }
    //Similar a registrar administradores, se registran usuarios, se les concede acceso mediante las llaves boolenas
    function new_user (string memory _nombre, string memory _cc, string memory _email, address _user_address) public{
        require(address2admin[msg.sender], "Solo pueden registrar usuarios los administradores");
        usuarios.push(usuario(_nombre,_cc,_email, _user_address));
        address2user[_user_address]=true;   
        IDu++;
    }
    
    
    //Función donde los usuarios autorizados almacenan reseñas de sus proveedores
    function review_prov(string memory _nit,uint _calificacion, string memory _comentarios) public{
        require(address2user[msg.sender], "usuario no inscrito");    //revisar usuario
        require(nit2inscrito[_nit], "El Nit ya fue inscrito");        
        proveedor2reviews[nit2IDp[_nit]].push(review(nit2IDp[_nit],_calificacion, _comentarios,msg.sender));
        proveedor2acumulado_score[nit2IDp[_nit]]+=_calificacion;
        proveedor2total_reviews[nit2IDp[_nit]]++;   
    }
    
    //Funciones de consulta
    
    //Estas funciones devuelven valores, se debe definir el tipo de valor (EJ:bool) y es opcional asignarle un nombre
    
    function consultar_estado_proveedor(string memory _nombre) public view returns (bool _inscrito){
        require(address2user[msg.sender], "Para consultar un proveedor debe estar inscrito como usuario"); //Verificando que el usuario si este autorizado
        return ID2inscrito[NombreProveedor2ID[_nombre]]; //Devuelve el valor almacenado en los mapeos
    }
    
    function puntaje_proveedor(string memory _nit) public view returns(uint _puntaje_prom){
        require(address2user[msg.sender]);
        _puntaje_prom = proveedor2acumulado_score[nit2IDp[_nit]] / proveedor2total_reviews[nit2IDp[_nit]];
        return _puntaje_prom;
    }
 
    
    
}
