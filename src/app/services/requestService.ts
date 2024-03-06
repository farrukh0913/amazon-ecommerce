import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { AddProduct } from "../model/product";

@Injectable({
    providedIn: "root"
})

export class RequestService {
    constructor(private http: HttpClient) { }

    adminLogin(cred: any): Observable<any> {
        return this.http.post(`${environment.ApiBaseUrl}login/loginAdmin`, cred);
    }

    addProduct(payload: AddProduct): Observable<any> {
        return this.http.post(`${environment.ApiBaseUrl}product/addProduct`, payload);
    }
    getAllProducts(): Observable<any> {
        return this.http.get(`${environment.ApiBaseUrl}product/getAllProducts`);
    }
    removeProduct(id: any): Observable<any> {
        return this.http.delete(`${environment.ApiBaseUrl}product/removeProduct/${id}`);
    }
    getProductById(id: any): Observable<any> {
        return this.http.get(`${environment.ApiBaseUrl}product/getProductById/${id}`);
    }
    updateProductByid(id:any,payload:any):Observable<any>{
        return this.http.put(`${environment.ApiBaseUrl}product/updateProduct/${id}`,payload)
    }
}    
