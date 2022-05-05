// varible holds url from themealdb api that will generate a random meal
var foodurl = "https://www.themealdb.com/api/json/v1/1/random.php";
// variable holds url from thecocktaildb api that will generate a random drinnk
var drinkurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// make request to themealdb api random query
fetch(foodurl)
.then(function(response){
    return response.json();
})
.then(function(data){
    //log data object 
console.log(data);
    //log meal name from object
console.log(data.meals[0].strMeal);
})
.catch(function(error){
    console.log(error);
})
// make request to cocktaildb api random query
fetch(drinkurl)
.then(function(response){
    return response.json();
})
.then(function(data){
    //log data object
console.log(data);
    //log drink name from object
console.log(data.drinks[0].strDrink);
})
.catch(function(error){
    console.log(error);
})