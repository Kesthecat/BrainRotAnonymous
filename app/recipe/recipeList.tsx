import { Result } from "../type";
import ErrorMessage from "../ui/errorMessage";
import { formatList } from "../utils/utils";

interface RecipeListProps {
    isLoading: boolean;
    response: Result | null;
    error: string | null;
    ingredientPrompt: string | null;
}

export default function RecipeList({ isLoading, response, error, ingredientPrompt }: RecipeListProps) {

    const ingredientsList = formatList(response?.ingredients);

    if (isLoading) {
        return <div className='size-full flex flex-col items-center justify-center'>
            <h3 className="text-purple-primary animate-bounce">Thinking... Searching...</h3>
            <h3 className="text-purple-primary animate-bounce">Coming Up with Ideas...</h3>
        </div >
    }

    if (error) {
        return <ErrorMessage
            errorPrompt={'Not Edible'}
            error={error}
            promptType='This is what you said you had: '
            prompt={ingredientPrompt}
            errorMessage='One or more ingredients on the list is not edible. Please only enter edible ingredients.' />
    }

    if (!response) {
        return (
            <div>
                <h3 className="text-purple-primary-light">No Recipe Yet.</h3>
                <h3 className="text-purple-primary-light">Ask for some suggestions.</h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="font-semibold text-purple-primary">
                    These recipe ideas are based on:
                </h3>
                <p className=" text-purple-text">{ingredientsList}</p>
            </div>

            <ul className="flex flex-col gap-3">
                {response?.recipes.map((recipe) => (
                    <li key={recipe.title} className="rounded-lg border border-purple-accent p-3 flex flex-col gap-1">
                        <h4 className="font-semibold text-purple-primary">{recipe.title}</h4>
                        <p className="text-sm text-purple-text">{recipe.description}</p>
                        <div className="flex justify-end"><a href={recipe.url} target="_blank"><p className="text-xs text-purple-primary-light">Go to Recipe</p></a></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
