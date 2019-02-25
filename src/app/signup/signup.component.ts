import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../shared/services/user/auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public registerForm: FormGroup;

    submitted = false;
    message = '';

    listBrand=[];

    constructor(private fb: FormBuilder,private router: Router,private authService: AuthService) {
        this.createForm();
    }

    ngOnInit() {

    }

    createForm(){
        this.registerForm = this.fb.group({
            mobile: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit() {
        this.message = '';
        this.submitted = true;
        const registerValue = this.registerForm.value;

        if(registerValue.password != registerValue.confirmPassword){
            this.message="前后密码不一致";
            return;
        }

        this.authService.register(JSON.stringify(registerValue)).subscribe(res=>{

            this.submitted = false;

            if(res.code == 0){
                this.router.navigate([ '/login']);
            }else{
                this.message = '注册失败，或用户已经存在';
            }
        });
    }
}
