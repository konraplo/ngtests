import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService
{
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [ 
        new Recipe(
            "schnitzel", 
            "dupa", 
            "https://cdn.galleries.smcloud.net/t/galleries/gf-CCSq-NSKG-wzvi_sznycel-wiedenski-czyli-wiener-schnitzel-przepis-na-sznycel-cielecy-664x442-nocrop.jpg",
            [
                new Ingredient("Meat", 1),
                new Ingredient("French fries", 10)
            ]),
            
        new Recipe("Burger", 
        "dupa 2", 
        "https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&ir=1&width=885&height=498&crop=auto&quality=75&speed=2&extension=webp&hash=8A5E11B99541BB0AAB8AA82E39D66BAF", 
        [
            new Ingredient("Buns", 2),
            new Ingredient("Meat", 1)
        ])
      ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(id: number,recipe: Recipe) {
        this.recipes[id] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}