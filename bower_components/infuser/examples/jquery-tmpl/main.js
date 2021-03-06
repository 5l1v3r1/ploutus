var toggled = false,
    model = {
        title: "Dessert Options",
        desserts: [
            "Cheesecake",
            "Cannoli",
            "Milkshake",
            "Brownie",
            "Apple Pie"
        ]
    };

$(function(){
    $('#btnTemplate').click(function(){
        infuser.defaults.templateUrl= "./templates",
        infuser.get("Example", function(template){
            var tgt = $("#target");
            tgt.hide().children().remove();
            var div = $("<div />");
            $.tmpl(template, model).appendTo(div);
            tgt.append(div).fadeIn();
            if(!toggled) {
                $("#msg").text("The next click will use the locally cached template");
            }
        });
    });
});
