var foodurl = "https://www.themealdb.com/api/json/v1/1/random.php";
var searchFood = "https://www.themealdb.com/api/json/v1/1/search.php?s="
var mealClick = document.getElementById("food");
var appMeal = document.getElementById("display-food");
var mealName;
var mealPic;
var img = document.createElement("img");
var resetBtn = document.getElementById("reload");
var saveBtn = document.getElementById("save-btn");
var foodArray = [];

function getMeal(){
mealClick.addEventListener("click",() => {
    appMeal.textContent = mealName;
    img.src = mealPic;
    img.classList.add("img-size");
    document.getElementById("display-food").appendChild(img);
    })
    }

resetBtn.addEventListener("click",()=>{
    fetch(foodurl).then(function(response){
        return response.json();
    }).then(function(data){
    console.log(data);
    mealName = data.meals[0].strMeal;
    mealPic = data.meals[0].strMealThumb;   
    appMeal.textContent = mealName;
    img.src = mealPic;
    img.classList.add("img-size");
    document.getElementById("display-food").appendChild(img);
    })
    .catch(function(error){
        console.log(error);
    })
    })


saveBtn.addEventListener("click",()=>{
    var saveMeal = {
        saveName: mealName,
        savePic: mealPic
    };
    foodArray.push(saveMeal);
    logMeal();
    showSave();
})  

function logMeal(){
    localStorage.setItem("meals",JSON.stringify(foodArray));
}

function showSave(){
    var displayData = localStorage.getItem("meals");
    displayData = JSON.parse(displayData);
    console.log(displayData[0].saveName);
}

fetch(foodurl).then(function(response){
    return response.json();
}).then(function(data){
console.log(data);
mealName = data.meals[0].strMeal;
mealPic = data.meals[0].strMealThumb;   
})
.catch(function(error){
    console.log(error);
})


getMeal();

//var drinkurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
/*
fetch(drinkurl)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
console.log(data.drinks[0].strDrink);
})
.catch(function(error){
    console.log(error);
})
*/