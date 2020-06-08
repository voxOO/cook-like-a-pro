import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShopingListService} from "./shoping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private slService: ShopingListService) { }


  ngOnInit(): void {
    this.ingredients= this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])  => {
        this.ingredients = ingredients;
      }
     );
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
