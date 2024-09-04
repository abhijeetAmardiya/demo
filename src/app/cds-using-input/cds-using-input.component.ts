import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cds-using-input',
  templateUrl: './cds-using-input.component.html',
  styleUrls: ['./cds-using-input.component.scss']
})
export class CdsUsingInputComponent {
  @Input() count: number = 0
}
