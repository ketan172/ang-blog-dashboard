import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthService,private router:Router,private toastr: ToastrService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedInGaurd) {
      console.log('Access Granted ..');
      return true;

    } else {
      //console.log('Access Denied  ..')
      this.toastr.warning('You dont have permission to access this page ..');
      this.router.navigate(['/login']);
      return false;

    }
  }
  
}
