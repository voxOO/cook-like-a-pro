import  {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route:ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log(params['id']);
        }
      );
  }
  onAddtoShopingList() {
    //console.log(this.recipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    //ovaj prvi nacin je ok skroz. Dodali smo drugi nacin samo zbog vezbe. Prikazuje kako da prenesemo vrednost
    //u ovom slucaju ID kroz navigaciju
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../',this.id, 'edit'], {relativeTo:this.route});
  }
}
