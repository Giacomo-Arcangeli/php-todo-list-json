<?php
$tasks = ["fare la spesa" , "fare la lavatrice" , "pulire la cucina" , "preparare la lavastoviglie"];

header('Content-Type: application/json');

echo json_encode($tasks);