import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../core/service/auth.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      this.user = user;
    });

  }

  logout() {
    this.auth.logout();
  }
}
