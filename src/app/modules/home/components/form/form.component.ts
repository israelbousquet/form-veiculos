import { ConsultaCepService } from './../../services/consulta-cep.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  AsyncValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

import * as JsonToXML from 'js2xmlparser';

//validators

import { Validacoes } from '../../Validators/valicacoes';

//interfaces
import { ColorList } from '../../interfaces/color-list';
import { FuelOptions } from '../../interfaces/fuel-options';

//services
import { ListsService } from './../../services/lists.service';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public listVehicles: Array<string> = [];

  public colorList: Array<ColorList> = [];

  public fuelOptions: Array<FuelOptions> = [];

  public customPatterns = {
    '0': { pattern: new RegExp('/^[a-zA-Z][0-9]{7}$/') },
  };

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private listsService: ListsService,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      renavam: ['', [Validators.required]],
      marca: [''],
      modelo: [''],
      corVeiculo: [''],
      tipoVeiculo: [''],
      placa: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
          Validacoes.validaPlaca,
        ],
      ],
      fuel: ['gasoline'],
      nome: [''],
      sobrenome: [''],
      tel: [''],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required]],
      bairro: [''],
      rua: [''],
      cidade: [''],
      uf: [''],
      complemento: [''],
      numero: [''],
      cpf: ['', [Validators.required, Validacoes.validaCpf]],
    });

    this.listVehicles = this.listsService.getVehicle();

    this.listsService.getColorList().subscribe({
      next: (res) => (this.colorList = res),
      error: (error) => error,
    });

    this.fuelOptions = this.listsService.getFuel();
  }

  getCampo(campo: string) {
    return this.form.get(campo)!;
  }

  verifyError(campo: string) {
    return !this.getCampo(campo).valid && this.getCampo(campo).touched;
  }

  validatorError(campo: string, validator: string) {
    if (this.verifyError(campo) && this.getCampo(campo).errors?.[validator]) {
      return true;
    } else {
      return false;
    }
  }

  consultaCEP() {
    const cep = this.form.get('cep')!.value;

    if (cep.length === 8) {
      this.consultaCepService.getCep(cep).subscribe({
        next: (dados) => {
          if (dados.hasOwnProperty('erro')) {
            this.errorCep();
            this.form.patchValue({
              cep: null,
            });
          } else {
            this.setCepForm(dados);
          }
        },
      });
    }
  }

  errorCep() {
    alert('CEP não encontrado');
  }

  setCepForm(dados: any) {
    this.form.patchValue({
      bairro: dados.bairro,
      rua: dados.logradouro,
      cidade: dados.localidade,
      uf: dados.uf,
    });
  }

  public onSubmit() {
    console.log(JsonToXML.parse('obj', this.form.value));
  }
}
