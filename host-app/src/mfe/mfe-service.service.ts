import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from './mfe-dynamic.routes';

@Injectable({
  providedIn: 'root'
})
export class MfeServiceService {

  constructor(private router: Router) { }

  init () {
    return new Promise<void>((resolve, reject) => {
      const routes = buildRoutes();
      this.router.resetConfig(routes);
      resolve();
    })
  }
}
