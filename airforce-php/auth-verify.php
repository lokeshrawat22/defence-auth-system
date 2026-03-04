<?php
session_start();
require 'config.php';

if (!isset($_COOKIE['token'])) {
    header("Location: login-redirect.php");
    exit();
}

$token = $_COOKIE['token'];

$options = [
    "http" => [
        "method" => "GET",
        "header" => "Authorization: Bearer $token\r\n"
    ]
];

$context = stream_context_create($options);

$response = @file_get_contents(
    "$AUTH_SERVER/auth/profile",
    false,
    $context
);

if ($response === FALSE) {
    header("Location: login-redirect.php");
    exit();
}

$data = json_decode($response, true);

if ($data && isset($data['user']['organisation']) && $data['user']['organisation'] === "airforce") {

    $_SESSION['user'] = $data['user'];

} else {

    header("Location: login-redirect.php");
    exit();
}
