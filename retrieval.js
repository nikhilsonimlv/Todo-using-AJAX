function retrievalFunction(){
    var databaseURL = 'http://localhost/ajax/retrieval.php';

    $.ajax({
        url: databaseURL,
        type: "GET",
        async: false,

        dataType: "json",

        success: function(jsonData){
            var output = [];
            $.each(jsonData, function(key, value) {
                $.each(value, function(columnName, inputData) {
                    output.push(inputData);
                });
                document.getElementById('retrievalbox').value = output;
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            alert("Failure.");
            alert(errorThrown);
        }
    });
}