var team = {
    "members": [
        {
            "name": "🍳 Julia Johnson 🍳"
        },
        {
            "name": "🥩 David Stewart 🥩"
        },
        {
            "name": "🥓 Josh Toback 🥓"
        },
        {
            "name": "🔪 Josh Icard 🔪"
        },
        {
            "name": "👨‍🍳 Mark Turner 👨‍🍳"
        },
    ]
}

$(document).ready(function(){ 
    var teamTemplate = $("#members-template").html();

    var compiledTeamTemplate = Handlebars.compile(teamTemplate);
    $(".members-list-container").html(compiledTeamTemplate(team))

});