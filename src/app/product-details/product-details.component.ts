import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/requestService';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading: boolean = false;
  constructor(private activatedRoutes: ActivatedRoute,
    private requestService: RequestService) { }
  ngOnInit(): void {
    this.activatedRoutes.queryParams.subscribe((res: any) => {
      console.log('res: ', res);
      this.getRecordById(res.prop)
    })
  }
  getRecordById(id: any) {
    this.loading = true;
    this.requestService.getProductById(id).subscribe(res => {
      console.log(res);
      if (res) {
        this.loading = false;
        this.product = res.data;
      }
    })
  }
}
