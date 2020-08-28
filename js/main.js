
    function search()
    {
    
        var input = $('#search').val();
        $.get('http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=oECEbvJh3Q3KBv6UiSycVPH7HgVlEG5B&limit=5', function(response) {
            for(var i =0; i < response.data.length; i++)
            {
            $('#img').append("<img src="+ response.data[i].images.downsized_large.url + ">");
            
            }


            

            
    })
    }

