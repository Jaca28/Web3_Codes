from web3 import Web3
infura_url = "https://rinkeby.infura.io/v3/e4fff7b172524829a783d28fedda3168"
web3 = Web3(Web3.HTTPProvider(infura_url))
print(web3.isConnected())
print(web3.eth.blockNumber)
abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ID2inscrito","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IDa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IDp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IDu","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"NombreProveedor2ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"admins","outputs":[{"internalType":"string","name":"nombre","type":"string"},{"internalType":"string","name":"cc","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"address","name":"admin_address","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_nombre","type":"string"},{"internalType":"string","name":"_nit","type":"string"},{"internalType":"string","name":"_ciudad","type":"string"}],"name":"anotar_proveedor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nombre","type":"string"}],"name":"consultar_estado_proveedor","outputs":[{"internalType":"bool","name":"_inscrito","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_nombre","type":"string"},{"internalType":"string","name":"_cc","type":"string"},{"internalType":"string","name":"_email","type":"string"},{"internalType":"address","name":"_admin_address","type":"address"}],"name":"new_admin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nombre","type":"string"},{"internalType":"string","name":"_cc","type":"string"},{"internalType":"string","name":"_email","type":"string"},{"internalType":"address","name":"_user_address","type":"address"}],"name":"new_user","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proveedores","outputs":[{"internalType":"string","name":"nombre","type":"string"},{"internalType":"string","name":"nit","type":"string"},{"internalType":"string","name":"ciudad","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_nit","type":"string"}],"name":"puntaje_proveedor","outputs":[{"internalType":"uint256","name":"_puntaje_prom","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_nit","type":"string"},{"internalType":"uint256","name":"_calificacion","type":"uint256"},{"internalType":"string","name":"_comentarios","type":"string"}],"name":"review_prov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usuarios","outputs":[{"internalType":"string","name":"nombre","type":"string"},{"internalType":"string","name":"cc","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"address","name":"user_address","type":"address"}],"stateMutability":"view","type":"function"}];

address = "0x3ecD2b5D67694240945c66aeb356dDcFbf0Df654"
contract = web3.eth.contract(address=address, abi=abi)
#contract.functions.newHash(var1).transact()
account = '0xE4783a07b97c7adC3320F393a1D386CB7A4180ec';
private_key = 'e142ac12694913f478b39df66e10a7cf89dbab4a67ebd1efe94ba3f3b53c5bb3';
nonce = web3.eth.getTransactionCount(account)
data_tx = contract.functions.new_admin("test_admin_iot", "test_admin_iot", "test_admin_iot", "0xB6d82d14401244C00d6A15D66c733537BC8cc21D").buildTransaction({
   #'chainId': 0x1,
   'gas': 2000000,
   'gasPrice': web3.toWei('50', 'gwei'),
   'nonce': nonce,
   })
print(data_tx)
# Sign transaction
signed_tx = web3.eth.account.signTransaction(data_tx, private_key=private_key)
signed_tx.rawTransaction
#Broadcast transaction
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
#web3.eth.sendRawTransaction(signed_tx.rawTransaction)
print ("Hash de la transacción: " + str(web3.toHex(tx_hash)))