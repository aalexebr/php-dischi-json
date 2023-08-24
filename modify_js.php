<?php
    $jsonFileString = file_get_contents('./database/data.json');

    $albums = json_decode($jsonFileString, true);
    var_dump($albums) ;

    $newObject = [
        'album' => 'crina',
        'author' => 'boidache',
        'release_date' => '1994',
        'img' => 'x'
    ];

    var_dump($newObject) ;

    $albums[] = $newObject;
    var_dump($albums) ;
    $albumsJson = json_encode($albums);
    file_put_contents('./database/data.json', $albumsJson);

