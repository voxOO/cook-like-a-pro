import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShopingListService} from "../shoping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static:false }) amountInputRef: ElementRef;

  constructor(private slService: ShopingListService) { }
  //moze i ovako da se napise i onda ne moramo da dodajemo Ingredient klasu iz modela
  //ingredientAdded = new EventEmitter<{name: string , amount:number}>();

  onAddItem() {
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient (ingName, ingAmount);
     this.slService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
  }
}
