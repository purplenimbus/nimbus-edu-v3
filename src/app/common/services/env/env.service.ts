import { Injectable } from '@angular/core';
import { environment as DEVELOPMENT } from '../../../../environments/environment';
import { environment as PRODUCTION } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ENVService {
	ENV: any;

  constructor() {
  	this.ENV = this.isLive() ? PRODUCTION : DEVELOPMENT;
  }

  public isLive = () => PRODUCTION.production
}
