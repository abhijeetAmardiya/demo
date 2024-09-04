import { Injectable } from '@angular/core';

@Injectable()
export class DiHierarchicalService {

  public data: string;

  constructor() {
    this.data = 'Initial data';
  }
  
}
