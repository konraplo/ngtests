import { Recipe } from "./recipe.model";

export class RecipeService
{
    private recipes: Recipe[] = [ 
        new Recipe("A test 1", "dupa", "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?webp=true&quality=45&resize=2820%2C1198"),
        new Recipe("A test 2", "dupa 2", "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?webp=true&quality=45&resize=2820%2C1198")
      ];

    getRecipes() {
        return this.recipes.slice();
    }
    constructor(parameters) {
        
    }
}