import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  pressFunction(){
    alert('You just pressed a key')
  }

  upFunction() {
      console.log('You just released the key you pressed')
  }

  downFunction() {
    console.log('You jus depresseda keyboard button')
  }

  clickFunction() {
    alert('You just clicked a button')
  }
}
