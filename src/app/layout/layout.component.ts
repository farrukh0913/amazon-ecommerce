import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, HostListener, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterModule } from "@angular/router";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditProductsComponent } from "../add.edit.products/add.edit.products.component";
import { RequestService } from "../services/requestService";
@Component({
  selector: "app-layout",
  standalone: true,
  imports: [MatIconModule, HeaderComponent, FooterComponent, MatDialogModule,RouterModule],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ transform: 'translateY(0)' })),
      state('hide', style({ transform: 'translateY(-120%)' })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ]),


  ]
})
export class LayoutComponent implements OnInit {
  scrollDirection: 'show' | 'hide' = 'show';
  admin: any
  products: any[] = [];
  loading: boolean = false;
  constructor(private router: Router, 
    public dialog: MatDialog,
    private requestService: RequestService) {
    this.admin = JSON.parse(localStorage.getItem("admin") || '[]');
    window.scroll({
      top: 0,
      left: 0
    })
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Adjust the value as needed
    this.scrollDirection = window.scrollY > 100 ? 'hide' : 'show';
  }

  ngOnInit() {
    this.getAllProducts();
  }

  addProduct(item?:any) {
    const dialogRef = this.dialog.open(AddEditProductsComponent, {
      disableClose: true,
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    });
  }

  getAllProducts() {
    this.loading = true;
    this.requestService.getAllProducts().subscribe(res => {
      if (res) {
        this.loading = false;
        this.products = res.data
      }
    })
  }

  deleteProducts(id: any) {
    this.requestService.removeProduct(id).subscribe(res => {
      if (res) {
        this.getAllProducts();
      }
    })
  }
}
