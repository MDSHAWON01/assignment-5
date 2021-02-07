// function searchButtonHandler(){
//     console.log('clicked');
// }
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(res=>res.json())
.then(data=> displayMeal(data));

const displayMeal = mealName=> {
    //console.log(mealName);
    for (let i = 0; i < mealName.length; i++) {
        const meal = mealName[i];
        console.log(meal.strCategory);

    }
}