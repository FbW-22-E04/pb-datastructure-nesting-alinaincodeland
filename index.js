/// 1. 2D Array 

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ]; 

  let loopArr = board.length; 

  for (let i=0; i < board.length; i++) {
    console.log(board[i])
  }


//// 2. Doggo

let doggo = {
    name: "Olaf", 
    breed: "maltese",
    favFoods: ["chicken", "sunflower seeds", "cucumber"] 
}

console.log("2.3 -->", doggo.favFoods[1])

 printFavFood = function() {
    for (let j of doggo.favFoods) {
        console.log(j);
    }
 }

 printFavFood(); 



 // 3. Recipes

 let recipes = {
    ingredients: {
        butter: "salted butter",
        sugar: "dark brown sugar",
        flour: "505 flour",
    }, 
    printObjects: function(){
        return Object.values(recipes.ingredients)
    }
 }

 console.log("3.2 -->", recipes);  

recipes.ingredients["ginger"] = "fresh ginger"; 
console.log("3.3 -->", recipes);


recipes.ingredients.brown_sugar = recipes.ingredients.sugar 
delete recipes.ingredients.sugar;
console.log("3.4 -->", recipes.ingredients)


console.log("3.5 -->", recipes.printObjects ());
