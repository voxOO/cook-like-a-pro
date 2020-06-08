import {Injectable} from "@angular/core";

import {Recipe} from "./recipes.model";
import {Ingredient} from "../shared/ingredient.model";
import { ShopingListService } from '../shoping-list/shoping-list.service';


@Injectable()
export class RecipeService {

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test. This is the best lunch I ever had', 'https://p1.pxfuel.com/preview/143/355/658/asparagus-italian-cuisine-italy-piemonte.jpg',
      [
        new Ingredient('Carrot', 1),
        new Ingredient('Asparagus',8)
      ]),
    new Recipe('Second test Recipe', 'This is the best recipe ever','https://www.msc.navy.mil/sealift/2012/September/images/ChickenParmesan.jpg',
    [
      new Ingredient ('Chesse', 1),
      new Ingredient( 'Pasta',1)
      ])
  ];

  constructor(private slService: ShopingListService ) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
