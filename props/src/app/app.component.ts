import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'props';
  text = 'type your question here'
  chosenColor = 'green'
  para = 'this is the new paragraph you get'
}
