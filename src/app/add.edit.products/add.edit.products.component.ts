import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddProduct } from '../model/product';
import { RequestService } from '../services/requestService';

@Component({
  selector: 'app-add.edit.products',
  standalone: true,
  imports: [MatDialogModule, FormsModule],
  templateUrl: './add.edit.products.component.html',
  styleUrl: './add.edit.products.component.scss'
})
export class AddEditProductsComponent {
  addProduct: AddProduct = new AddProduct;
  loading: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddEditProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requestService: RequestService) {
    if (data) {
      this.addProduct = {
        productName: data.productName,
        discription: data.discription,
        price: data.price,
        image: data.image
      }
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  addUpdateProduct(form: NgForm) {
    form.value.image = this.addProduct.image;
    if (form.valid) {
      this.loading = true;
      if (this.data?._id) {
        this.requestService.updateProductByid(this.data._id, form.value).subscribe(res => {
          this.loading = false;
          this.dialogRef.close("save");
        }, (err) => {
          this.loading = false;
        })
      } else {
        this.requestService.addProduct(form.value).subscribe(res => {
          if (res.data) {
            this.loading = false;
            this.dialogRef.close("save")
          }
        }, (err) => {
          this.loading = false;
        })
      }
    }
  }

  imageBase64(img: any) {
    const file = img.target.files[0]
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result as string;
      console.log('base64: ', base64);
      this.addProduct.image = base64
    }
    if (file) {
      reader.readAsDataURL(file)
    }

  }
}
