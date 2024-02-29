import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: "root"
})

export class RequestService {
    constructor(private http: HttpClient){}

    adminLogin(cred:any):Observable<any>{
        return this.http.post(`${environment.ApiBaseUrl}login/loginAdmin`,cred);
    }
}    
