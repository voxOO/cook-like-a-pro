import {Recipe} from "./recipes.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test. This is the best lunch I ever had', 'https://p1.pxfuel.com/preview/143/355/658/asparagus-italian-cuisine-italy-piemonte.jpg'),
    new Recipe('Second test Recipe', 'This is the best recipe ever','https://www.msc.navy.mil/sealift/2012/September/images/ChickenParmesan.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
