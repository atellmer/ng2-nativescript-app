import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['pages/login/login.css'],
})
export class AppComponent {
    public email: string;
    public password: string;
    public isLoggingIn: boolean = true;

    constructor() { }

    public submit() {
        alert('your email is: ' + this.email + '\n' + 'your password is: ' + this.password);
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
