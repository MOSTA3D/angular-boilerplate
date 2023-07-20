import { Injectable } from "@angular/core";

export class Account {
    constructor(public name:string, public status:"active"|"inactive"|"unknown"){}

    setStatus(status:Account["status"]){
        this.status = status;
    }
}


@Injectable()
export class AccountService{
    private acc1 = new Account("MyAccount","active");
    private acc2 = new Account("MyAccount", "active");
    private acc3 = new Account("MyAccount", "active");
    accounts:Account[] = [
        this.acc1,
        this.acc2,
        this.acc3
    ];

    public addAccount(account:Account){
        this.accounts.push(account);
    }
}