$('document').ready(function(){
    $("#grid div").click(function(){
        $(this).css('visibility', 'hidden');
    });
    $("#restore").click(function(){
        $("#grid div").css('visibility', 'visible');
    })
})