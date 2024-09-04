import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cds-using-input',
  templateUrl: './cds-using-input.component.html',
  styleUrls: ['./cds-using-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdsUsingInputComponent {
  @Input() count: number = 0
}
