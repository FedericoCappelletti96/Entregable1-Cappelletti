    const usuarios = [];

    function saludar(nuevoUsuario){
        alert('bienvenido '+nuevoUsuario+' al conversor de divisas EUROTR' )
    }

while(true){
    let logUsuario = prompt('Ingrese el nombre de usuario (Si no tiene ingrese "nuevo usuario")');
    if(logUsuario === 'nuevo usuario'){
        let nuevoUsuario = prompt('Ingrese el nombre del usuario que desea crear')
        usuarios.push(nuevoUsuario)
        saludar(nuevoUsuario)
        break;
            }else(
                alert('no hay ningun usuario con este nombre, porfavor ingrese un usuario ya creado o escriba "nuevo usuario"')
            )   
}
    function resultado(a,b){
        return a/b;
    }
    function conversionFinal(a,b){
        alert(a+' ARS son: '+ b)
    }
const monedas=[ 
    {divisas:'euro', precio: '1178,44'},
    {divisas:'dolar', precio: '1055,75'},
    {divisas:'dolar blue', precio: '1340'},
    {divisas:'real', precio: '183,75'},
    {divisas:'ARS', precio: '1'},
]

while(true){
    let monedaAConvertir = prompt('Ingrese a que moneda quiere convertir');
    
    let monedaEncontrada = monedas.find((moneda) => moneda.divisas === monedaAConvertir);
    if(monedaEncontrada != undefined){
        let cantidad= parseFloat(prompt('Ingrese la cantidad de pesos que quiere convertir a '+ monedaAConvertir))
        let conversion = resultado(cantidad, parseFloat(monedaEncontrada.precio));
        conversionFinal(cantidad,conversion);
        break;
    }else{
        alert('No existe ninguna divisa con ese nombre, escriba una existente');
    }
}
