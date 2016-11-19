import { Component } from "@angular/core";
import "../content/css/app-styles.less";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public sum(a: number, b: number): number {
        // Sample code to test the code coverage
        if (a === 1) {
            return 1 + b;
        } else {
            return a + b;
        }
    }
}
