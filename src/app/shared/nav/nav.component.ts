import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy {
  userLoginOn: boolean=false;
  constructor(private loginService:LoginService){}
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
  }

}
