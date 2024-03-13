import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditProductsComponent } from '../../add.edit.products/add.edit.products.component';
import { SupervisorModel } from '../../model/supervisor';
import { FormsModule, NgForm } from '@angular/forms';
import { RequestService } from '../../services/requestService';

@Component({
  selector: 'app-add.edit.supervisor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.edit.supervisor.component.html',
  styleUrl: './add.edit.supervisor.component.scss'
})
export class AddEditSupervisorComponent {
  supervisor: SupervisorModel = new SupervisorModel();
  loading: boolean = false;
  isSubmitted: boolean = false;
  showPassword: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddEditProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requestService: RequestService) {
    if (data) {
      this.supervisor = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.password,
        userName: data.userName
      }
    }
  }

  saveForm(form: NgForm) {
    this.isSubmitted = true;
    if (form.valid && (form.value.password === form.value.confirmPassword)) {
      this.isSubmitted = false;
      this.loading = true;
      if (this.data?._id) {
        this.requestService.updateSupervisor(this.data._id, form.value).subscribe(res => {
          if (res) {
            this.loading = false;
            this.dialogRef.close("save");
          }
        })
      } else {
        this.requestService.addSupervisor(form.value).subscribe(res => {
          this.loading = false;
          this.dialogRef.close("save");
        })
      }
    }
  }

  cancelForm() {
    this.dialogRef.close();
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
