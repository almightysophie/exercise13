let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey"

$.getJSON(url, function(data){
    console.log(data.facet[0].type_of_material);
 })
 