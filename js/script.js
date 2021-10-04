function calcularMedia(){
  var primeiraNota = parseInt(document.getElementById("nota1").value);
  // console.log(primeiraNota);
  var segundaNota = parseInt(document.getElementById("nota2").value);
  // console.log(segundaNota);
  
  var media = (primeiraNota+segundaNota)/2;
  
  var resultado = document.getElementById("resultado");
  
  resultado.innerHTML = "Sua média é: "+media;
  
  console.log(media);
}

