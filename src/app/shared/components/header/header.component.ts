import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
