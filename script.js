$(document).ready(function(){
    $("#mainbutton").click(function () {
        var toAdd = $('#maintextarea').val();
        console.log(toAdd);
        $('.list').append('<div class="item">' + toAdd + '<img id="'+toAdd+'" class="delete" style="width: 20px;padding-left: 6px" src="close-button.png"></i></div>');
    });
    $(document).on("click", ".delete", function () {

        $(this).parent().remove();
        id=this.id;
        var databaseURL = 'http://localhost/ajax/delete.php';
        $.post( databaseURL, { del:  id } );

    });
});