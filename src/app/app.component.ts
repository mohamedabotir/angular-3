import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toggle: boolean = false;
  logs = [];
  getToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.logs.push(this.logs.length + 1);
    console.log(this.logs);
  }
}
