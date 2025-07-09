import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private dataUrl =
    'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl);
  }

  // getUserById(id: number): Observable<User | undefined> {
  //   return this.getUsers().pipe(
  //     map((users: any) => users.find((u) => u['id'] === id))
  //   );
  // }
}
