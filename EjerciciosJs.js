alert(`Los Ejercicios se encuentran en el mismo orden que en la plataforma, \n Los ejercicios 15,16,17 y 22 no necesitan que se ingresen numeros solo los seleccionan en la lista y ejecutan`)
const Formulario = document.getElementById("Formulario");
const accion = "submit";
const Evento = (event) => {
  event.preventDefault();
  const Numeros = Formulario.elements.number.value;
  const Numeros2 = parseInt(Formulario.elements.number2.value);
  const Ejercicio = Formulario.elements.Ejercicios.value;
  /*console.log(`${Numeros}\n${Numeros2}\n${Ejercicio}`)*/

  switch (Ejercicio) {
    case "Ejercicio1":
      const PrimerDigito = parseInt(Numeros.charAt(0));
      const UltimoDigito = parseInt(Numeros.charAt(Numeros.length - 1));

      if (PrimerDigito === UltimoDigito) {
          let info1 = `El digito ${PrimerDigito} es igual al digito ${UltimoDigito}`
          document.querySelector("#pantalla").innerHTML = info1
      } else {
          let info2 = `El digito ${PrimerDigito} no es igual al digio ${UltimoDigito}`
          document.querySelector("#pantalla").innerHTML = info2
      }
      break;

    case "Ejercicio2":
      let string = Numeros.toString()
      let con = 0
      for(i = 0; i < string.length; i++){
        if (primo2(parseInt(string.charAt(i)))){
          con++
        }
      }
      function primo2(Numeros){
        if (Numeros <= 1){
          return false;
        }
        for (i = 2; i < Numeros; i++){
          if (Numeros % i === 0){
            return false;
          }
        }
        return true;
      }
      let info3 = `El numero tiene ${con} digito primo`

      document.querySelector("#pantalla").innerHTML = info3
      break;

    case "Ejercicio3":
      function obtenerDigito(Numeros) {
        if (typeof Numeros === "number" && Number.isInteger(Numeros)) {
          if (Numeros > 0) {
            let contador2 = 0;

            while (Numeros) {
              contador2 += Numeros % 2 === 0;

              Numeros = Math.floor(Numeros / 10);
            }

            return contador2;
          }
        }
      }
      let info4 = `El numero tiene esta cantidad de digitos pares ${obtenerDigito(parseInt(Numeros))}`
      document.querySelector("#pantalla").innerHTML = info4
      break;

    case "Ejercicio4":
      let Digito1 = parseInt(Numeros.charAt(0));
      let Digito2 = parseInt(Numeros.charAt(1));
      let Digito3 = parseInt(Numeros.charAt(2));

      if (Digito1 == Digito2 + Digito3) {
          let info5 = `La suma del los digitos ${Digito2} y ${Digito3} es igual a ${Digito1}`
          document.querySelector("#pantalla").innerHTML = info5
      } else if (Digito2 == Digito1 + Digito3) {
          let info5 = `La suma del los digitos ${Digito1} y ${Digito3} es igual a ${Digito2}`
          document.querySelector("#pantalla").innerHTML = info5
      } else if (Digito3 == Digito2 + Digito1) {
          let info5 = `La suma del los digitos ${Digito1} y ${Digito2} es igual a ${Digito3}`
          document.querySelector("#pantalla").innerHTML = info5
      } else {
        let info5 = (`No hay coincidencia en ningun lugar`)
        document.querySelector("#pantalla").innerHTML = info5
      }
      break;

    case "Ejercicio5":
      let digitoSuma = parseInt(Numeros.charAt(0));
      let digitoSuma2 = parseInt(Numeros.charAt(1));
      let digitoSuma3 = parseInt(Numeros.charAt(2));
      let digitoSuma4 = parseInt(Numeros.charAt(3));

        let info6 = `La suma total de todos los digitos es: ${
          digitoSuma + digitoSuma2 + digitoSuma3 + digitoSuma4
        }`
        document.querySelector("#pantalla").innerHTML = info6
      break;
    case "Ejercicio6":
      let contador = 0;

      for (x = 0; x < 4; x++) {
        let pares = parseInt(Numeros.charAt(x));
        if (pares % 2 == 0) {
          contador++;
        }
      }
        let info7 = `La cantidad de digitos para que tiene el numeros es: ${contador}`
        document.querySelector("#pantalla").innerHTML = info7
      break;

    case "Ejercicio7":
      if (Numeros >= 50 || Numeros < 0) {
        let info8 = "Numero no es valido"
        document.querySelector("#pantalla").innerHTML = info8
        return;
      }

      let primo = true;

      if (Numeros <= 1) {
        primo = false;
      } else {
        for (let i = 2; i <= Math.sqrt(Numeros); i++) {
          if (Numeros % i === 0) {
            primo = false;
            break;
          }
        }
      }

      if (primo) {
        let info8 = `El número ${Numeros} es primo.`
        document.querySelector("#pantalla").innerHTML = info8
      } else {
        let info8 = `El número ${Numeros} no es primo.`
        document.querySelector("#pantalla").innerHTML = info8
      }
      break;

    case "Ejercicio8":
      const numString = Numeros.toString();
      const numLength = numString.length;

      let capicuo = true;

      for (let i = 0; i < numLength / 2; i++) {
        if (numString[i] !== numString[numLength - i - 1]) {
          capicuo = false;
          break;
        }
      }

      if (capicuo) {
        let info9 = `El número ${Numeros} es capicúa.`
        document.querySelector("#pantalla").innerHTML = info9
      } else {
        let info9 = `El número ${Numeros} no es capicúa.`
        document.querySelector("#pantalla").innerHTML = info9
      }
      break;

    case "Ejercicio9":
      let secondDigit = parseInt(Numeros.charAt(1));
      let lastDigit = parseInt(Numeros.charAt(2));

      if (secondDigit == lastDigit) {
        let info10 = `El segundo numero es igual al penultimo`
        document.querySelector("#pantalla").innerHTML = info10
      } else {
        let info10 = `El segundo numeros no es igual al penultimo`
        document.querySelector("#pantalla").innerHTML = info10
      }
    case "Ejercicio10":
      let digit = Numeros.charAt(0);
      let digit2 = Numeros.charAt(1);

      if (digit + digit2 == 10) {
        let info11 = "El Numero es igual a 10"
        document.querySelector("#pantalla").innerHTML = info11
      } else {
        let info11 = "EL Numero no es igual a 10"
        document.querySelector("#pantalla").innerHTML = info11
      }
      break;

    case "Ejercicio11":
      let numeroEntero = parseInt(Numeros);
      if (numeroEntero % 7 === 0) {
        let info12 = `El Numero ${Numeros} es multiplo de 7`
        document.querySelector("#pantalla").innerHTML = info12
      } else {
        let info12 = `El Numero ${Numeros} no es multiplo de 7`
        document.querySelector("#pantalla").innerHTML = info12
      }
      break;

    case "Ejercicio12":
      let numeroEntero3 = parseInt(Numeros);
      let numeroEntero2 = parseInt(Numeros2);

      let comienzo, final;

      if (numeroEntero3 < numeroEntero2) {
        comienzo = numeroEntero3;
        final = numeroEntero2;
      } else {
        comienzo = numeroEntero2;
        final = numeroEntero3;
      }

      let info13 = []

      document.querySelector("#pantalla").innerHTML = info13
      for (let i = comienzo; i < final + 1; i++) {
        info13.push(i)
        document.querySelector("#pantalla").innerHTML = info13
      }
      break;

    case "Ejercicio13":
      let numeroEntero4 = parseInt(Numeros);
      let numeroEntero5 = parseInt(Numeros2);

      let comienzo2, final2;

      if (numeroEntero4 < numeroEntero5) {
        comienzo2 = numeroEntero4;
        final2 = numeroEntero5;
      } else {
        comienzo2 = numeroEntero5;
        final2 = numeroEntero4;
      }
      let info14 = []

      for (let i = comienzo2 + 1; i < final2; i++) {
        if (i % 10 === 4) {
          info14.push(i)
          document.querySelector("#pantalla").innerHTML = info14
        }
      }
      break;

    case "Ejercicio14":
      Entero6 = parseInt(Numeros.charAt(0));
      Entero7 = parseInt(Numeros.charAt(1));
      Entero8 = parseInt(Numeros.charAt(2));

      if (Entero6 < Entero7 < Entero8) {
        start = Entero6;
        intermedio = Entero7;
        final3 = Entero8;
      } else if (Entero7 < Entero6 < Entero8) {
        start = Entero7;
        intermedio = Entero6;
        final3 = Entero8;
      } else {
        start = Entero8;
        intermedio = Entero7;
        final3 = Entero6;
      }
      let info15 = []
      let info16 = []
      let info17 = []
      for (i = 0 + 1; i < start + 1; i++) {
        info15.push(i)
        document.querySelector("#pantalla").innerHTML = info15
      }
      for (x = 0 + 1; x < intermedio + 1; x++) {
        info16.push(x)
        document.querySelector("#pantalla").innerHTML = info16
      }
      for (e = 0 + 1; e < final3 + 1; e++) {
        info17.push(e)
        document.querySelector("#pantalla").innerHTML = info17
      }
      break;

    case 'Ejercicio15':
      alert(`Los numeros comprendidos del 1 al 100`);
      let info18 = []
      for (i = 0 + 1; i < 101; i++) {
        info18.push(i + " ")
      }
      document.querySelector("#pantalla").innerHTML = info18
      break;

    case 'Ejercicio16':
      alert(`Los numeros comprendidos del 20 al 200`);
      let info19 = []
      for (i = 20 + 1; i < 201; i++) {
        info19.push(i + " ")
      }
      document.querySelector("#pantalla").innerHTML = info19
      break;

    case 'Ejercicio17':
      alert(`Los numeros comprendidos del 25 al 205 terminados en 6`);
      let info20 = []
      for (i = 25 + 1; i < 206; i++) {
        if(i % 10 === 6){
          info20.push(i + " ")
          document.querySelector("#pantalla").innerHTML = info20
        }
      }
      break;
    case 'Ejercicio18':
      let Entero10 = parseInt(Numeros)
      let acumulador = 0
      alert(`Las sumas de los numeros comprendidos del entero ${Numeros}`);
      for (i = 1; i < Entero10; i++) {
        acumulador = acumulador + i
        console.log(i)
      }
      let info21 = "El total es: " + acumulador
      document.querySelector("#pantalla").innerHTML = info21
      break;
    case 'Ejercicio19':
      let Entero11 = parseInt(Numeros.charAt(0))
      let Entero12 = parseInt(Numeros.charAt(1))
      let info22 = []

      for(i = Math.min(Entero11,Entero12); i <= Math.max(Entero11,Entero12); i++){
        info22.push(i + " ")
      }
      console.log(info22)
      document.querySelector("#pantalla").innerHTML = "Los Numeros son: " + info22
      break;
    case 'Ejercicio20':
      let digitoOne = parseInt(Numeros.charAt(0))
      let digitoOne2 = parseInt(Numeros.charAt(1))
      let digitoOne3 = parseInt(Numeros.charAt(2))

      if(digitoOne === 1){
        let info23 = `El Numero ${digitoOne} contiene el numero 1`
        document.querySelector("#pantalla").innerHTML = info23
      }
      else if(digitoOne2 === 1){
        let info23 = `El Numero ${digitoOne2} contiene el numero 1`
        document.querySelector("#pantalla").innerHTML = info23
      }
      else if(digitoOne3 === 1){
        let info23 = `El Numero ${digitoOne3} contiene el numero 1`
        document.querySelector("#pantalla").innerHTML = info23
      }
      else{
        let info23 = "Ninguno de los digitos contiene el numero 1"
        document.querySelector("#pantalla").innerHTML = info23
      }
      break;
    case 'Ejercicio21':
      let Entero13 = parseInt(Numeros);
      let info24 = []
      for (i = 0 + 1; i < Numeros; i++) {
        if(i%5===0){
          info24.push(i + " ")
        }
      }
      document.querySelector("#pantalla").innerHTML = `Los multiplos comprendidos del 1 al ${Entero13} son: ` + info24
      break;
    case 'Ejercicio22':
      let info25 = []
      for (i = 2; i < 65; i++) {
        if(i%3===0){
          info25.push(i + " ")
        }
      }
      document.querySelector("#pantalla").innerHTML = "Los multiplos de 3 son: " + info25
      break;
  }  
    
};

Formulario.addEventListener(accion,Evento)