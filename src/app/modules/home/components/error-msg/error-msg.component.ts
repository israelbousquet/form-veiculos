import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validacoes } from 'src/app/modules/Validators/valicacoes';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
})
export class ErrorMsgComponent implements OnInit {
  @Input() control!: FormControl<any>;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return Validacoes.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}
