if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
ethereum.enable();
web3.eth.defaultAccount = web3.eth.coinbase;
var proveedores_contract = web3.eth.contract([{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "ID2inscrito",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "IDa",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "IDp",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "IDu",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "name": "NombreProveedor2ID",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "admins",
        "outputs": [{
                "internalType": "string",
                "name": "nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "admin_address",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_nit",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_ciudad",
                "type": "string"
            }
        ],
        "name": "anotar_proveedor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "_nombre",
            "type": "string"
        }],
        "name": "consultar_estado_proveedor",
        "outputs": [{
            "internalType": "bool",
            "name": "_inscrito",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_cc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_admin_address",
                "type": "address"
            }
        ],
        "name": "new_admin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_cc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "new_user",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "proveedores",
        "outputs": [{
                "internalType": "string",
                "name": "nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "nit",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "ciudad",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "_nit",
            "type": "string"
        }],
        "name": "puntaje_proveedor",
        "outputs": [{
            "internalType": "uint256",
            "name": "_puntaje_prom",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_nit",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_calificacion",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_comentarios",
                "type": "string"
            }
        ],
        "name": "review_prov",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "usuarios",
        "outputs": [{
                "internalType": "string",
                "name": "nombre",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "user_address",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]);

var proveedores = proveedores_contract.at('0x3ecD2b5D67694240945c66aeb356dDcFbf0Df654');
console.log(proveedores);