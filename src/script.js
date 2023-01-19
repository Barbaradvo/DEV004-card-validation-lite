function isValid(creditCardNumber) {
  let procesado = creditCardNumber.trim()  // > "Numero"
  if (procesado.length == 0) {
    return false

  }
  let arrayNumeroTarjeta = procesado.split("")   // Array para revertir. 


  let nuevoArrayInvertido = arrayNumeroTarjeta.reverse();

  let arrayPar = nuevoArrayInvertido.filter(function (x, y) {
    if (y % 2 === 1) return x;
  });

  let arrayImpar = nuevoArrayInvertido.filter(function (x, y) {
    if (y % 2 === 0) return x;
  });
  console.log("arrayPar", arrayPar)
  console.log("arrayImpar", arrayImpar)

  let arrayplus = arrayPar.map(function (parmulti) {
    let multipar = parmulti * 2;
    console.log(multipar);

    if (multipar >= 10) {
      let diezmayor = multipar.toString().split("").map(Number);

      let arraytres = diezmayor.reduce(function (x, z) {
        return x + z;
      });

      return arraytres;
    }
    else { return multipar }
  });
  arrayImpar = arrayImpar.map(Number)

  let sumaplus = arrayplus.reduce(function (x, y) {
    return x + y
  })
  let sumaImpar = arrayImpar.reduce(function (x, z) {
    return x + z;
  })
  let resultado = sumaplus + sumaImpar;

  if (resultado % 10 == 0) {
    return true;
  } else {
    return false;
  }

  function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    let code = (evt.which) ? evt.which : evt.keyCode;
    console.log(code);
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}
}
