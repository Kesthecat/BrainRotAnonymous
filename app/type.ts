export type Recipes = {
    title: string,
    description: string,
    href: string
};

export interface Result {
    ingredients: string[],
    cuisine: string[] | undefined,
    recipes: Recipes[],
}