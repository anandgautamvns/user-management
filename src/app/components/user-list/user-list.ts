import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [
    CommonModule, // <-- provides *ngIf, *ngFor
    FormsModule, // <-- provides ngModel
    RouterModule, // <-- if you use routerLink or programmatic navigation
  ],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList implements OnInit {
  users: User[] = [];
  headers: string[] = [];
  editing: { [key: string]: boolean } = {};

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      if (data.length) {
        this.headers = Object.keys(data[0]);
      }
    });
    console.log('UserList initialized', this.headers);
  }

  goToDetail(idx: number) {
    this.router.navigate(['/user', idx]);
  }

  enableEdit(idx: number, key: string) {
    this.editing[`${idx}_${key}`] = true;
  }

  disableEdit(idx: number, key: string) {
    this.editing[`${idx}_${key}`] = false;
  }
}
