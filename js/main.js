$(document).ready(()=>{ 


    var userInput= document.getElementById("input").value
    console.log(userInput)
    var giphyApiKey = oECEbvJh3Q3KBv6UiSycVPH7HgVlEG5B
    var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}'


    fetch(giphyApiUrl).then(function(res) {
        return res.json()
    })
    .then(function(json) {
        console.log(json.data[0].images.fixed_height.url)
        var imgPath =json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)

        })
            
        
    }).catch(function(error) {
        console.log(error.message)

    })
})


