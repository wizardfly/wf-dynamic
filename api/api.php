<?php
// $json_data = json_encode($posts);
// file_put_contents('myfile.json', $json_data);

////////////////

$name = 'adonis';
$id = 'adm';
$url = 'test';

$array = array('name' => $name,'id' => $id,'url' => $url);
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($array, JSON_PRETTY_PRINT));   // here it will print the array pretty
fclose($fp);
?>