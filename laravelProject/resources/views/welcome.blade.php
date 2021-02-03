<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet" />
        <link href="{{ asset('css/themes/lite-blue.min.css?v=12123') }}" rel="stylesheet">
    <link href="{{ asset('css/plugins/perfect-scrollbar.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugins/sweetalert2.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/themes/custom.theme.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ URL::asset('css/plugins/toastr.min.css') }}">
       
    </head>
    <body>
            <div id="root"></div>
            <div class="overlay hide" id="loader">
        <span class="spinner-glow center-custom spinner-glow-info mr-5"></span>
    </div>
    <script src="{{ asset('js/plugins/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/plugins/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('js/plugins/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('js/scripts/script.min.js') }}"></script>
    <script src="{{ asset('js/scripts/sidebar.large.script.min.js') }}"></script>
    <script src="{{ asset('js/scripts/jquery-validation/jquery.validate.min.js') }}"></script>

    <script src="{{ asset('js/plugins/sweetalert2.min.js') }}"></script>
    <!-- <script src="{{ asset('js/scripts/sweetalert.script.min.js') }}"></script> -->
    <script src="{{ URL::asset('js/plugins/toastr.min.js') }}"></script>
    <script src="{{ asset('js/common.script.js') }}"></script>
        <script src="/js/app.js" ></script>
    </body>
    
</html>
