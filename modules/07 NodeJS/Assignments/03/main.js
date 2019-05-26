const promFs = require('./modules/prom-fs');
const recipe = {
    "name": "Crock Pot Roast",
    "ingredients": [
        {
            "quantity": "1",
            "name": " beef roast",
            "type": "Meat"
        },
        {
            "quantity": "1 package",
            "name": "brown gravy mix",
            "type": "Baking"
        },
        {
            "quantity": "1 package",
            "name": "dried Italian salad dressing mix",
            "type": "Condiments"
        },
        {
            "quantity": "1 package",
            "name": "dry ranch dressing mix",
            "type": "Condiments"
        },
        {
            "quantity": "1/2 cup",
            "name": "water",
            "type": "Drinks"
        }
    ],
    "steps": [
        "Place beef roast in crock pot.",
        "Mix the dried mixes together in a bowl and sprinkle over the roast.",
        "Pour the water around the roast.",
        "Cook on low for 7-9 hours."
    ],
    "timers": [
        0,
        0,
        0,
        420
    ],
    "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
};

//init - for testing promFs 
(async () => {
    try {
        console.log("write recipe to recipe.json...");
        let data = await promFs.writeFilePromise("recipe.json", JSON.stringify(recipe));
        console.log(data);
    
        console.log("read file recipe.json...");
        data = await promFs.readFilePromise("recipe.json");
        console.log(data);
    
        console.log("append test test to recipe.json...");
        data = await promFs.appendFilePromise("recipe.json", "testttt testtttttttt");
        console.log(data);

        console.log("Delete File recipe.json...");
        data = await promFs.unlinkFilePromise("recipe.json");
        console.log(data);
        
        console.log("Read File If Exists - recipe.json...");
        data = await promFs.readFileIfExistsPromise("recipe.json");
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }  
})()