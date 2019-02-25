import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../shared/services/user/auth.service";
import {Keys} from "../shared/common/keys";

import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public loginForm:FormGroup;
    public password:string;

    constructor(private fb:FormBuilder,public router: Router, private authService:AuthService) {
        this.createForm();
    }

    ngOnInit() {}

    createForm(){
        this.loginForm = this.fb.group({
            mobile: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {

        const login = this.loginForm.value;


        this.authService.login(login.mobile,login.password).subscribe(res=>{
            if(res.code == 0){
                localStorage.setItem(Keys.KEY_TOKEN,res.data.access_token);
                localStorage.setItem(Keys.KEY_USER_INFO,JSON.stringify(res.data));

                this.router.navigate([ '/dashboard']);
            }
        });


    }
}
