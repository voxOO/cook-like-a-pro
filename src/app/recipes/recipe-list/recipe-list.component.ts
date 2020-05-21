import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test. This is the best lunch I ever had', 'https://p1.pxfuel.com/preview/143/355/658/asparagus-italian-cuisine-italy-piemonte.jpg'),
    new Recipe('Second test Recipe', 'This is the best recipe ever','https://www.msc.navy.mil/sealift/2012/September/images/ChickenParmesan.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
