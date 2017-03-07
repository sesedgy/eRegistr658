import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {AppSettings} from "../appSettings";

@Injectable()
export class HttpService{

    urlServer: string = AppSettings.API_SRC;

    constructor(private http: Http){ }

    get(urlApi){
        return this.http.get(this.urlServer + urlApi);
    }

    post(urlApi, obj){
        const body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post(this.urlServer + urlApi, body, { headers: headers })
            .map((resp:Response)=>resp.json())
    }
}