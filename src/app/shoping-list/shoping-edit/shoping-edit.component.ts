import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShopingListService} from "../shoping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemindex: number;

  constructor(private slService: ShopingListService) { }
  //moze i ovako da se napise i onda ne moramo da dodajemo Ingredient klasu iz modela
  //ingredientAdded = new EventEmitter<{name: string , amount:number}>();

  onAddItem(form: NgForm) {
     const value = form.value;
     const newIngredient = new Ingredient (value.name, value.amount);
     this.slService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index) => {
          this.editedItemindex = index;
          this.editMode = true;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
