This is a project to explore OpenAI, Next.js and Tailwind. I also used Codex as my AI assistant. 
I'm using each page to compare OpenAI models on how they handle a task. 

## Recipe

This page allows the user to enter a list of ingredients and 3 recipes idea will be generated. The base prompt for each model is to :
- First check for any inedible ingredients. If there is inedible ingredients, it should throw an error. 
- Second once the all ingredients are edible, generate the recipes and respond with a valid JSON like this: {"ingredients": [list of ingredients part of the prompt], "recipes": [{"title": "Short Name", "description": "Brief description of the recipe", "url:: "The url where the recipe can be found"}]}

It has cost 0.06$ in OpenAI token (API calls excluding Codex usage) to complete this page including for the demo. 

Please go to https://youtu.be/Wj5gCqz69nE to see a demo!

<img width="1552" height="1282" alt="Screenshot 2025-11-24 at 2 53 57 PM" src="https://github.com/user-attachments/assets/fd0cb579-375b-4fb0-b19e-9e62bff5f95f" />
