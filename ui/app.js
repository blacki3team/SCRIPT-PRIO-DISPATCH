const statusColors = {
    cooldown: '#e60000',   // Red
    honhold: '#4d88ff',    // Light Blue
    inprogress: '#0073e6', // Blue
    meeting: '#004d99',    // Dark Blue
    safe: '#00b300',       // Green
    inactive: '#FF9D00',   // Orange for inactive state
};

window.addEventListener('message', function(event) {
    if (event.data.action == "openlist"){
        let List = event.data.list
        let Active = event.data.active
        $(".intro").css({
            "display" : "flex"
        });

        $(".tb-pop").html("") 
        let activeClass, color; 
        for(let l in List){

            if(l == Active){
                activeClass = "active"
            }else{
                activeClass = "inactive"
            }

            color = statusColors[l] || "#000";
            
            $(".tb-pop").append(`
                <div class="img-btns ${activeClass}" data-ptype="${l}">
                    <p style="background-color:${color}">${List[l].label}</p>
                    <img src="images/fox.png">
                </div>
            `)
        }

    }else if (event.data.action == "showstatus"){
        let Type = event.data.type || "inactive";
        let Active = event.data.active || event.data.list?.inactive || { label: "Inactive" };
        let Cooldown = event.data.cooldown
        $(".prio-text").css({
            "display" : "block"
        });
        $(".prio-text").html("")          
        let color = statusColors[Type] || "#000";
        let text = Active?.label || "Inactive";
        if (Type == "cooldown") {
            text = `${Active.label}: ${Cooldown} Mins`;
        }
        $(".prio-text").css({
            "background" : `${color}`,
            "background-image" : "none"
        });
        $(".prio-text").html(`${text}`)
    }
});


$(document).ready(function (e) {
    $('.tb-pop').on('click', '.img-btns', function(){
        var ptype = $(this).data("ptype");
        CloseUi();     
        $.post(`https://${GetParentResourceName()}/setprio`, JSON.stringify({ ptype }));
    });
})


$(document).keydown(function (e) {
    if (e.keyCode == 27) { 
        CloseUi();     
        $.post(`https://${GetParentResourceName()}/close`);
    }
});

CloseUi = function() {
    $(".intro").css({
        "display" : "none"
    });
}

