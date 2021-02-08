const searchMeal = ()=> {
    const searchText =document.getElementById('search-field').Value;
    console.log(searchText);
    // const url =`https://www.themealdb.com/api/json/v1/1/categories.php/${searchText}`;
    // console.log(url);
}


fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=>res.json())
.then(data=> displayMeal(data.categories));

            const displayMeal = mealName=> {
            const mealDiv =document.getElementById('mealName');




     for (let i = 0; i < mealName.length; i++) {
        const meal = mealName[i];
        const mealsDiv = document.createElement('div');
        mealsDiv.className= 'meal'

        const mealInfo=`
        <h3 class='meal-name'>${meal.strCategory}</h3>
        <p>${meal.strCategoryDescription}</p>
        <button onclick="displayMealDetail('${meal.strCategory}')">Details</button>
        `
        mealsDiv.innerHTML=mealInfo;
        mealDiv.appendChild(mealsDiv);
        


    }
 }

 const displayMealDetail=name=>{
     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata/${name}`
     console.log(url);
//      fetch(url)
//      .then(res=>res.json())
//      .then(data=> mealDetail(data[0]));


//  }
//  const mealDetail=meal=>{
//      console.log(meal);
//      const mealDiv =document.getElementById('meal-detail');
 }