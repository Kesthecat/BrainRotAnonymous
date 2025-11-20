export type Recipes = {
    title: string,
    description: string,
    url: string
};

export type ModelResponse = {
    isLoading: boolean;
    response: Result | null;
    error: string | null;
    duration: number;
}

export interface Result {
    ingredients: string[],
    cuisine: string[] | undefined,
    recipes: Recipes[],
}