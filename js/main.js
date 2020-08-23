$(document).ready(()=>{

    $("#button").click(()=>{
        let userInput=$("#Search").val()
        alert(userInput)

    $.ajax({
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=$(keyword)api_key=oECEbvJh3Q3KBv6UiSycVPH7HgVlEG5B&limit=20");
        xhr.done(function(data) { console.log("success got data", data); });

    })
    })
})