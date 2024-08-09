let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

/*Crea una función que muestre en la consola el mensaje 
"El botón fue clicado" siempre que se presione el botón "Console".*/
function btnConsole(){
    console.log("El botón fue clicado");
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
preguntando el nombre de una ciudad de Brasil. Luego, 
muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/
function btnPrompt (){
    let ciudad = prompt("Digite el nombre de una ciudad de El Salvador: ");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

/*Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".*/
function btnAlerta(){
    alert ("Yo amo JS")
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function btnSuma(){
    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));
    let suma = num1 + num2;
    alert(`El resultado de ${num1} más ${num2} es: ${suma}`)
    
}

// prueba
let texto = "Este es un texto";
console.log(texto);
