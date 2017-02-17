import {Injectable} from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class DataUserService{

    getUser(id: string): User{
        let user = new User('name', 2);
        return user;
    }

    setUser(tokenId: string){
        //Куки действительны втечении одного дня
        var date = new Date();
        date.setDate(date.getDate() + 1);
        document.cookie = 'TokenId=' + tokenId + ';path=/;expires=' + date.toUTCString() + ';'
    }


    updateUser(){
        var date = new Date(0);
        document.cookie = "TokenId=; path=/; expires=" + date.toUTCString();
    }

    deleteUser(): string{
        let cookie = document.cookie;
        let rights = cookie.slice(6,42);

        let date = new Date(cookie.slice(58,-1)).getTime();
        let now = Date.now();
        if (((now - date) > 86400000) && ((now - date) < 100000000)){
            document.cookie = "Rights=; path=/; expires=" + new Date(0).toUTCString();

            let dateNow = new Date();
            dateNow.setDate(dateNow.getDate() + 1);
            document.cookie = 'Rights=' + rights + ';path=/;expires=' + dateNow.toUTCString() + ';'
        }

        return rights;
    }

}