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
mealClick.addEventListener("click",() => {
    appMeal.textContent = mealName;
    img.src = mealPic;
    img.classList.add("img-fluid");
    document.getElementById("display-food").appendChild(img);
    })
    
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
    img.classList.add("img-fluid");
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
console.log(data);
mealName = data.meals[0].strMeal;
mealPic = data.meals[0].strMealThumb;   
})
.catch(function(error){
    console.log(error);
})


// drink logic

var randomDrinkApi = "www.thecocktaildb.com/api/json/v1/1/random.php"
var searchableDrinkApi = "www.thecocktaildb.com/api/json/v1/1/search.php" //must add query strings to use

