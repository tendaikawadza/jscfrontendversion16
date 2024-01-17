import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-centralinventorydetergentsandcleaningmaterial',
  templateUrl: './centralinventorydetergentsandcleaningmaterial.component.html',
  styleUrls: ['./centralinventorydetergentsandcleaningmaterial.component.css'],
})
export class CentralinventorydetergentsandcleaningmaterialComponent implements OnInit {
  productDialog=false;
  ngOnInit(): void {
    
  }
  openNew() {
    throw new Error('Method not implemented.');
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedCode: any;
  pcodeList: any[];
  logout() {
    throw new Error('Method not implemented.');
  }
  editProduct(_t124: any) {
    throw new Error('Method not implemented.');
  }
  selectedProd(){}
  selectedProducts(item:any) {}
  products: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  addProductForm: FormGroup<any>;
  hideDialog() {
    throw new Error('Method not implemented.');
  }
  submitted: any;
  f: any;
}
