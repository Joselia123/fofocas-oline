function escreveResposta(){
  var fofoca = document.getElementById("fofocas").value
 document.getElementById("fofocas").value = ''
   
  var texto = document.createElement("p")
  texto.textContent = fofoca
  document.getElementById("resposta").appendChild(texto)
}