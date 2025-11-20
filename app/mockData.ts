export const mockLongData = {
    "prompt": "lamb chops",
    "result": "{\"ingredients\": [\"lamb chops\"], \"cuisine\": null, \"recipes\": [{\"title\": \"Garlic-Herb Pan-Seared Lamb Chops\", \"description\": \"Season chops with salt, pepper, garlic, and chopped herbs; sear in a hot pan and finish with a quick red-wine pan sauce.\"}, {\"title\": \"Mediterranean Grilled Lamb Chops\", \"description\": \"Marinate in lemon juice, olive oil, oregano, and garlic; grill to medium-rare and drizzle with extra-virgin olive oil.\"}, {\"title\": \"Mint-Yogurt Lamb Chops\", \"description\": \"Grill or pan-sear chops and serve with a cool mint-yogurt sauce and a cucumber salad.\"}]}"
}

export const mockRecipesWithLinks = {
    "prompt": "beef brocoli rice",
    "result": "{\n  \"ingredients\": [\"beef\", \"brocoli\", \"rice\"],\n  \"recipes\": [\n    {\n      \"title\": \"Beef and Broccoli Stir-Fry over Rice\",\n      \"description\": \"A quick stir-fry of beef and brocoli with a savory sauce, served over fluffy rice.\",\n      \"href\": \"https://www.allrecipes.com/search/results/?search=beef%20broccoli%20rice\"\n    },\n    {\n      \"title\": \"Beef and Broccoli Fried Rice\",\n      \"description\": \"Leftover rice stir-fried with beef and brocoli for a complete one-pan meal.\",\n      \"href\": \"https://www.foodnetwork.com/search/beef%20broccoli%20fried%20rice\"\n    },\n    {\n      \"title\": \"Beef, Broccoli & Rice Bowls\",\n      \"description\": \"Sautéed beef and broccoli over rice with a quick Asian-style sauce.\",\n      \"href\": \"https://www.bbcgoodfood.com/search/recipes?term=beef%20broccoli%20rice\"\n    }\n  ]\n}"
}

export const mockUnedible = { "error": "Not Edible" }

const recipeNano = {
    "prompt": "ground beef, potato, carrot",
    "result": "{\n  \"ingredients\": [\"ground beef\", \"potato\", \"carrot\"],\n  \"recipes\": [\n    {\n      \"title\": \"Beef & Potato Hash Skillet\",\n      \"description\": \"Sauté ground beef with diced potatoes and carrots in a skillet with garlic, onions, and paprika for a hearty one-pan meal.\",\n      \"url\": \"https://www.allrecipes.com/search/results/?wt=beef%20potato%20hash\"\n    },\n    {\n      \"title\": \"One-Pan Beef, Potato & Carrot Stew\",\n      \"description\": \"A comforting stovetop beef stew with potatoes and carrots simmered in beef stock until tender.\",\n      \"url\": \"https://www.bbcgoodfood.com/search/recipes?q=beef%20potato%20carrot\"\n    },\n    {\n      \"title\": \"Ground Beef and Vegetable Skillet\",\n      \"description\": \"Quick skillet meal with ground beef, potatoes, and carrots, seasoned with herbs for a weeknight dinner.\",\n      \"url\": \"https://www.foodnetwork.com/search/recipes/beef-potato-carrot-skillet\"\n    }\n  ]\n}"
}

const recipeMini = {
    "prompt": "ground beef, potato, carrot",
    "result": "{\n  \"ingredients\": [\"ground beef\", \"potato\", \"carrot\"],\n  \"recipes\": [\n    {\n      \"title\": \"One-Pan Ground Beef with Potatoes & Carrots\",\n      \"description\": \"A quick skillet meal browning ground beef with potatoes and carrots in a savory glaze.\",\n      \"url\": \"https://www.allrecipes.com/search/results/?wt=ground%20beef%20potato%20carrot\"\n    },\n    {\n      \"title\": \"Beef and Potato Stew\",\n      \"description\": \"Hearty stew with ground beef, chunky potatoes, and carrots simmered in beef broth.\",\n      \"url\": \"https://www.foodnetwork.com/search/ground-beef-potato-carrot\"\n    },\n    {\n      \"title\": \"Shepherd's Pie with Ground Beef, Potatoes & Carrots\",\n      \"description\": \"Comforting bake with seasoned ground beef, veggies, and a creamy mashed potato topping.\",\n      \"url\": \"https://www.bbcgoodfood.com/search/recipes?term=shepherd%27s%20pie%20ground%20beef%20potatoes%20carrots\"\n    }\n  ]\n}"
}

const recipeGPT = {
    "prompt": "ground beef, potato, carrot",
    "result": "{\n  \"ingredients\": [\"ground beef\", \"potato\", \"carrot\"],\n  \"recipes\": [\n    {\n      \"title\": \"Beef and Potato Hash\",\n      \"description\": \"A quick skillet dish of ground beef, diced potatoes, and carrots, seasoned and pan-fried until crispy.\",\n      \"url\": \"https://example.com/recipes/beef-and-potato-hash\"\n    },\n    {\n      \"title\": \"One-Pot Ground Beef Stew\",\n      \"description\": \"A hearty, comforting stew featuring ground beef, potatoes, and carrots in a savory broth.\",\n      \"url\": \"https://example.com/recipes/one-pot-ground-beef-stew\"\n    },\n    {\n      \"title\": \"Shepherd's Pie with Carrots\",\n      \"description\": \"Classic cottage pie using ground beef, carrots, and creamy mashed potato topping.\",\n      \"url\": \"https://example.com/recipes/shepherds-pie-with-carrots\"\n    }\n  ]\n}"
}
