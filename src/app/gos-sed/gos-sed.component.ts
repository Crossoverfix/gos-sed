import { Component } from '@angular/core';

@Component({
  selector: 'app-gos-sed',
  templateUrl: './gos-sed.component.html',
  styleUrls: ['./gos-sed.component.scss']
})
export class GosSedComponent {

  public showSideBar: boolean = true;
  public toggleDarkTheme: boolean = false;

  toggleShowContent(){
    if (this.showSideBar){
     this.showSideBar = false;
    } else {
      this.showSideBar = true;
    }
    // list.querySelectorAll('[data-toggle-index="'+index+'"]' )[0].classList.toggle("hidde");
  }
}
