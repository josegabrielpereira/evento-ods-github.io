<?php
// Lê o número de visitas do arquivo de texto
$count = intval(file_get_contents('visitas.txt'));

// Incrementa o número de visitas
$count++;

// Escreve o novo número de visitas no arquivo de texto
file_put_contents('visitas.txt', $count);

// Retorna o número de visitas
echo $count;
?>
