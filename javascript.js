// Inicializa o contador
let counter = 0;

// Atualiza o contador a cada 1 segundo
setInterval(function() {
  // Faz uma requisição AJAX para um arquivo PHP que retorna o número de visitas
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'contador.php', true);
  xhr.onload = function() {
    if (this.status === 200) {
      // Atualiza o contador com o número retornado pelo PHP
      counter = parseInt(this.responseText);
      document.getElementById('counter').textContent = counter;
    }
  }
  xhr.send();
}, 1000);
