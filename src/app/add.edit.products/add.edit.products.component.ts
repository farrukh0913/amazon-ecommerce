import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    console.log(data, "dataaa");
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
  addUpdateProduct(value: any) {
    value.image = this.addProduct.image;
    this.loading = true;
    if(this.data?._id){
      this.requestService.updateProductByid(this.data._id,value).subscribe(res =>{
        this.loading = false;
        this.dialogRef.close();
      })
    }else{
      console.log('value: ', value);
      this.requestService.addProduct(value).subscribe(res => {
        if (res.data) {
          this.loading = false;
          this.dialogRef.close()
        }
      })
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