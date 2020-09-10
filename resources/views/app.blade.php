@extends('master')

@section('content')
    <div id="notesapp"></div>
@endsection

@push('scripts')
<script src="{{ mix('js/notesapp.js') }}"></script>
@endpush