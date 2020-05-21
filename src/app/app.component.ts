import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cook-like-a-pro';
  loadedFeature =  'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }



 //  PersonDetails = [
 //    {name: 'Vojislav', surname: 'Stupar', gender: 'male'},
 //    { name: 'Branislav', surname: 'Stupar', gender: 'male' }
 // ];
 //
 //  poruka;
 //  naravoucenije;
 //
 //  functionPassed (event) {
 //    //alert("Akcija je uspesno obavljena");
 //
 //    this.poruka = event.poruka;
 //    this.naravoucenije = event.naravoucenije;
 //  }

}
