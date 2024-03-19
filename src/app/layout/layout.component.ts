import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, HostListener, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterModule } from "@angular/router";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { AddEditProductsComponent } from "../add.edit.products/add.edit.products.component";
import { RequestService } from "../services/requestService";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    MatDialogModule,
    RouterModule,
  ],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent implements OnInit {
  admin: any;
  products: any[] = [];
  loading: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private requestService: RequestService
  ) {
    this.admin = JSON.parse(localStorage.getItem("admin") || "[]");
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }

  addProduct(item?: any) {
    const dialogRef = this.dialog.open(AddEditProductsComponent, {
      // height: "900px",
      disableClose: true,
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "save") {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.loading = true;
    this.requestService.getAllProducts().subscribe(
      (res) => {
        if (res) {
          this.loading = false;
          this.products = res.data;
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  deleteConfirmation(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "yes") {
        this.deleteProducts(id);
      }
    });
  }

  deleteProducts(id: any) {
    this.loading = true;
    this.requestService.removeProduct(id).subscribe(
      (res) => {
        if (res) {
          this.loading = false;
          this.getAllProducts();
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
