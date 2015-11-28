var messages = $("#messages");
var input = $("[name=phrase]");
var i = 1;

input.keypress(function(e) {
    if(e.which == 13) {
        messages.append("<div id='item"+ i +"'> E se " + input.val() + "?</div>");
        $("#item"+i).click(function(e){
          alert("Você clicou na pergunta " + i);
        });
        i++;
    }
});
