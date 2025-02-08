import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestUserComponent } from './test-user/test-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'module-1';
}
