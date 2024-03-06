// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);

playername= localStorage.getItem("player_name")    
// contar el número de intentos
// intento correcto
var guess = 1;
  
function submit(){
  
// número adivinado por el usuario   
var x = document.getElementById("guessField").value;

