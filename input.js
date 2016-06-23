function inputFunction(){
    var databaseURL = 'http://localhost/ajax/input.php';
    var toBeInput = document.getElementById('maintextarea').value;
    $.post( databaseURL, { list:  toBeInput } );
};