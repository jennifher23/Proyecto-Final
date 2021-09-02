function saludar(nombre, apellido) {
    document.getElementById("saludo1").innerHTML = `Hola  ${nombre}  ${apellido}`;
    document.getElementById("saludo2").value = `Hola  ${nombre}  ${apellido}`;
  }
  
  function _sumar(numero1, numero2) {
    document.getElementById("resultado").value = sumar(numero1, numero2);
  }
  
  function _restar(numero1, numero2){
      document.getElementById("resultado").value = restar(numero1, numero2);
  }
  
  function _multiplicar(numero1, numero2){
      document.getElementById("resultado").value = multiplicar(numero1, numero2);
  }
  
  function _dividir(numero1, numero2){
      document.getElementById("resultado").value = dividir(numero1, numero2);
  }