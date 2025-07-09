import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  imports: [
    CommonModule, // <-- provides *ngIf, *ngFor
    FormsModule, // <-- provides ngModel
    // RouterModule, // <-- if you use routerLink or programmatic navigation
  ],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css'],
})
export class UserDetail implements OnInit {
  user!: User;
  headers: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idx = +this.route.snapshot.paramMap.get('index')!;
    this.userService.getUsers().subscribe((data) => {
      this.user = data[idx];
      this.headers = Object.keys(this.user);
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
