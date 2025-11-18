This is a simple project to explore OpenAI, Next.js and Tailwind. I also used Codex as my AI assistant. 
I'm using each page to test different OpenAI models. 

Each page allows the user to enter a list of ingredients and 3 recipes idea will be generated. The base prompt for each model is to :
- First check for any inedible ingredients. If there is inedible ingredients, it should throw an error. 
- Second once the all ingredients are edible, generate the recipes and respond with a valid JSON like this: {"ingredients": [list of ingredients part of the prompt], "recipes": [{"title": "Short Name", "description": "Brief description of the recipe", "url:: "The url where the recipe can be found"}]}

This recording is using "gpt-nano-5", so it is unable to add an actual working url to the recipe. 
