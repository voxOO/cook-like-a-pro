import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-proba-sve',
  templateUrl: './proba-sve.component.html',
  styleUrls: ['./proba-sve.component.css']
})
export class ProbaSveComponent implements OnInit {

  @Input() person: {name:string, surname:string, gender: string};

  proba= "Neki string teksta da prikazemo na ekranu";
  reference_passed; string;
  @ViewChild ('myviewreference') reference_by_view: ElementRef;

  probafija (event) {
    console.log(event);
  }

  getColor () {
    return "brown";
  }

  //Passing event to parent
  @Output() eventToPass = new EventEmitter<{poruka: string , naravoucenije:string}>();

  trigerEventToParent () {
  this.eventToPass.emit({poruka: "Plava lampa" , naravoucenije: "Dobra je za oci i bolja je nego crvena"});
  }

  referenceFunction (reference) {
    //console.log(reference.value);
    this.reference_passed= reference;
  }
  referencebyView () {
    console.log( this.reference_by_view.nativeElement.value );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
