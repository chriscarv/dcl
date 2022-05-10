var foodurl = "https://www.themealdb.com/api/json/v1/1/random.php";
var searchFood = "https://www.themealdb.com/api/json/v1/1/search.php?s="
var mealClick = document.getElementById("food");
var appMeal = document.getElementById("display-food");
var img = document.createElement("img");
var resetBtn = document.getElementById("reload");
var saveBtn = document.getElementById("save-btn");
var appSave = document.getElementById("show-save");
var foodArray = [];
var mealName;
var mealPic;

// generate a random meal
// mealClick.addEventListener("click",() => {
//     appMeal.textContent = mealName;
//     img.src = mealPic;
//     img.classList.add("img-fluid mt-3");
//     document.getElementById("display-food").appendChild(img);
//     })
    
// generate a new random meal
resetBtn.addEventListener("click",()=>{
    fetch(foodurl).then(function(response){
        return response.json();
    }).then(function(data){
    console.log(data);
    mealName = data.meals[0].strMeal;
    mealPic = data.meals[0].strMealThumb;   
    appMeal.textContent = mealName;
    img.src = mealPic;
    img.classList.add("img-fluid"); //image will resize dynamically
    img.classList.add("mb-2"); //adds a bit of space below image
    img.classList.add("rounded-3"); //rounds image corners
    img.classList.add("shadow-lg"); //adds shadow and light 3D effect
    document.getElementById("display-food").appendChild(img);
    })
    .catch(function(error){
        console.log(error);
    })
    })

// save to local storage
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
   // console.log(displayData[0].saveName);
   
   var liEl = document.createElement("li");
   for(var i =0; i < displayData.length; i++){
   liEl.innerHTML=displayData[i].saveName;
   }
    appSave.appendChild(liEl);
}
// fetch mealdb api for a random meal
fetch(foodurl).then(function(response){
    return response.json();
}).then(function(data){
// console.log(data);
mealName = data.meals[0].strMeal;
mealPic = data.meals[0].strMealThumb;   
})
.catch(function(error){
    console.log(error);
})


//----------------------- drink logic -----------------------//

//global Variables API links/HTML Buttons & Elements
var randomDrinkApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var searchableDrinkApi = "www.thecocktaildb.com/api/json/v1/1/search.php" //must add query strings to use
var drinkBtn = document.getElementById("drink");
var resetDrinkBtn = document.getElementById("reload-drink");
var saveDrinkBtn = document.getElementById("save-drink-btn");
var displayDrink = document.getElementById("display-drink");
var savedDrinks = document.getElementById("show-drink-save");
var drinkName = "";
var drinkPicUrl = "";
var drinkImg = document.createElement("img");
var drinkList = [];

//this randomly selects a new drink
var generateNewDrink = function(){
fetch(randomDrinkApi).then(function(response){
    return response.json();
}).then(function(data){
console.log(data);
drinkName = data.drinks[0].strDrink;
    console.log(drinkName)
drinkPicUrl = data.drinks[0].strDrinkThumb; 
    console.log(drinkPicUrl)
displayDrink.textContent = drinkName;
drinkImg.src = drinkPicUrl;
drinkImg.classList.add("img-fluid"); //image will resize dynamically
drinkImg.classList.add("mb-2"); //adds a bit of space below image
drinkImg.classList.add("rounded-3"); //rounds image corners
drinkImg.classList.add("shadow-lg"); //adds shadow and light 3D effect


document.getElementById("display-drink").appendChild(drinkImg);
})
.catch(function(error){
    console.log(error);
})
}
//this saves currrent drink to an array and triggers the log and show save drink functions
function saveDrink (){
    var savedDrink = {
        saveName: drinkName,
        savePic: drinkPicUrl
    };
    drinkList.push(savedDrink);
    console.log(drinkList)
    logDrink();
    showDrinkSave();
}

//chucks the current saved drink to to local storage
function logDrink(){
    localStorage.setItem("drinks",JSON.stringify(drinkList));
}
//adds the current drink to the saved drink section 
function showDrinkSave(){
   
    var displayData = localStorage.getItem("drinks");
    displayData = JSON.parse(displayData);
   // console.log(displayData[0].saveName);
   
   var liEl = document.createElement("li");
   for(var i =0; i < displayData.length; i++){
   liEl.innerHTML=displayData[i].saveName;
   }
    savedDrinks.appendChild(liEl);
}

// These are the buttons
// drinkBtn.addEventListener("click",generateNewDrink);
resetDrinkBtn.addEventListener("click",generateNewDrink);
saveDrinkBtn.addEventListener("click",saveDrink);

