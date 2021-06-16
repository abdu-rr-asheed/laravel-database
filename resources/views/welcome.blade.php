<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
            src="https://kit.fontawesome.com/a6518bd95c.js"
            crossorigin="anonymous"
        ></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
        <title>E-learning 2</title>
        <link rel="stylesheet" href="./css/app.css" />
        <<link rel="icon" href="{{ URL::asset('logo.png') }}" type="image/x-icon"/>
        <!-- <link rel="shortcut icon" sizes="256x256" href="./css/logo.png"> -->
    </head>
    <body class="container">
        <div id="app"></div>
        <script src="./js/app.js"></script>
    </body>
</html>
