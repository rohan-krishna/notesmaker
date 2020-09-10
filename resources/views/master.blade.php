<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Notesmaker - Built using React, Redux and Saga</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <script>
        let base_url = '{{ url("/") }}';
    </script>
</head>
<body>
    @yield('content')

    @stack('scripts')
</body>
</html>