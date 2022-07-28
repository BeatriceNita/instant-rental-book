import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router
    ) { }

    ngOnInit(): void {}

    onLogout() {
      this.authService.logout()
                      .subscribe(() => this.router.navigate(['/login']));
    }

}
