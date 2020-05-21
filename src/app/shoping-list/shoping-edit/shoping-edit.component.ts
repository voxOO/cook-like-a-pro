import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static:false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  //moze i ovako da se napise i onda ne moramo da dodajemo Ingredient klasu iz modela
  //ingredientAdded = new EventEmitter<{name: string , amount:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
