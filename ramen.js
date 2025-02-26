function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }


var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Ramen%20Ratings.csv"
var brands = getColumn(url,1);
var varieties = getColumn(url,2);
var styles = getColumn(url,3);
var flavors = getColumn(url,2);
var countries = getColumn(url,4)
var ratings = getColumn(url,5)

function getFlavor(brandname) {
    var flavor = []
    for( var i = 0; i < brands.length; i++){  
        if (brands[i].toLowerCase().includes(brandname.toLowerCase())){
           flavor.push(varieties[i]);
        }
    }
if (flavor.length == 0 ){
    flavor.push("No matches")
}
    return flavor
}
console.log(getFlavor(""))

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Ramen%20Ratings.csv"
var styles = getColumn(url,3);
var flavors = getColumn(url,2);

function getStyleFlavor(style){
 var flavorForStyle = []
for( var i = 0; i < brands.length; i++){
     if(styles[i].toLowerCase().includes(style.toLowerCase())){
     flavorForStyle.push(varieties[i]) 
    }
}
 if (flavorForStyle.length == 0  ){
  flavorForStyle.push("No matches")
 }
 return flavorForStyle 
}
 console.log(getStyleFlavor(""))

var countries = getColumn(url,4)
var ratings = getColumn(url,5)

 function averageRating(country){
    var rating = 0;
    var count = 0;
    var exists = false;
    for( var i = 0; i < countries.length; i++){
        if(countries[i].toLowerCase().includes(country.toLowerCase())){
            exists = true;
        }
    }
    if(!exists){
        return "No Matches"
    }


    for( var i = 0; i < countries.length; i++){
        if (countries[i].toLowerCase().includes(country.toLowerCase())){
            if (ratings[i] != "NR")  {  
                rating += parseFloat(ratings[i]);
                count++;
            }
        }
        
     }
    return rating/count;
 }
console.log(averageRating(""))
      
