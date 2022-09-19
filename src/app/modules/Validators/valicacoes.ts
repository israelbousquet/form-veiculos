import { FormControl } from '@angular/forms';

export class Validacoes {
  static validaCpf(formControl: FormControl) {
    const cpf = formControl.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      valido = false;
    } else {
      for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf?.substring(i - 1, i)) * (11 - i);
      }

      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) {
        resto = 0;
      }

      if (resto != parseInt(cpf?.substring(9, 10))) {
        valido = false;
      }

      soma = 0;

      for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf?.substring(i - 1, i)) * (12 - i);
      }

      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) {
        resto = 0;
      }

      if (resto != parseInt(cpf?.substring(10, 11))) {
        valido = false;
      }

      valido = true;
    }

    if (valido) return null;

    return { cpfInvalido: true };
  }

  static validaPlaca(formControl: FormControl) {
    var placa = formControl.value;

    const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
    const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
    const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;

    if (
      regexPlaca.test(placa) ||
      regexPlacaMercosulCarro.test(placa) ||
      regexPlacaMercosulMoto.test(placa) ||
      placa === null
    ) {
      return null;
    } else {
      return { placaInvalido: true };
    }
  }

  static getErrorMessage(
    name: string,
    validator: string,
    validatorValue?: any
  ) {
    const msgContent: { [key: string]: any } = {
      required: `${name} é obrigatório`,
      email: `${name} inválido`,
      cpfInvalido: `CPF inválido`,
      placaInvalido: `Placa inválida`,
      maxlength: `${name} deve ter no máximo ${validatorValue.requiredLength} caracteres`,
      minlength: `${name} deve ter no mínimo ${validatorValue.requiredLength} caracteres`,
    };
    return msgContent[validator];
  }
}
