<?php
    $data_string = file_get_contents('./database/data.json');
    // var_dump($data_string);
    $data_to_php = json_decode($data_string,true);
    // var_dump($data_to_php);
    header('Content-Type: application/json');
    echo json_encode($data_to_php);