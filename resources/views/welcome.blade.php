<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
        <title>E-learning System</title>
        <link rel="manifest" href="../js/manifest.json">
        <!-- <link rel="shortcut icon" href="../../public/images/logo.png"> -->
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/images/logo.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/images/logo.png">
        <link rel="stylesheet" href="./css/app.css" />
    </head>
    <body class="container">
        <div id="app"></div>
        <script src="./js/app.js"></script>
        <script>
            if ('serviceWorker' in navigator){
                navigator.serviceWorker.register("./js/service-worker.js")
            }
        </script>
        <script
      src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"
      crossorigin="anonymous"
    ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
</html>
