import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      productName : ['', Validators.required],
      productCategory : ['', Validators.required],
      date : ['', Validators.required],
      price : ['', Validators.required],
      description : ['', Validators.required],
    })
  }

  addProduct(){
    console.log(this.productForm.value);
  }
 
}
