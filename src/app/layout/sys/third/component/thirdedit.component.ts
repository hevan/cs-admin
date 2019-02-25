/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { routerTransition } from '../../../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../shared/services/user/auth.service';
import {CorpService} from '../../../../shared/services/corp/corp.service';
import {CityService} from '../../../../shared/services/common/city.service';
import { Keys   }    from '../../../../shared/common/keys';
import {ThirdService} from "../../../../shared/services/common/third.service";

@Component({
    selector: 'app-sys-thirdedit',
    templateUrl: './thirdedit.component.html',
    animations: [routerTransition()]
})
export class ThirdEditComponent implements OnInit {

    public dataForm: FormGroup; //定义form
    public curId;//当前数据ID


    submitted = false; //控制重复提交


    public imageUrl;


    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private thirdService: ThirdService,private authService:AuthService) {
        this.createForm();
    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        if(this.curId){
            this.thirdService.find(this.curId).subscribe(res=>{
                if(res.code == 0){
                    this.dataForm.patchValue({'name': res.data.name});
                    this.dataForm.patchValue({'code': res.data.code});
                    this.dataForm.patchValue({'appId': res.data.appId});
                    this.dataForm.patchValue({'secret': res.data.secret});
                    this.dataForm.patchValue({'merchId': res.data.merchId});
                    this.dataForm.patchValue({'hostUrl': res.data.hostUrl});
                    this.dataForm.patchValue({'callbackUrl': res.data.callbackUrl});
                    this.dataForm.patchValue({'protocal': res.data.protocal});
                    this.dataForm.patchValue({'password': res.data.password});
                    this.dataForm.patchValue({'port': res.data.port});
                    this.dataForm.patchValue({'signType': res.data.signType});
                    this.dataForm.patchValue({'publicKey': res.data.publicKey});
                    this.dataForm.patchValue({'privateKey': res.data.privateKey});
                    this.imageUrl = res.data.icon;
                }

            });
        }

    }

    //初始化form
    createForm(){
        this.dataForm = new FormGroup({
            name: new FormControl('', Validators.required),
            code: new FormControl('', Validators.required),
            appId: new FormControl('', Validators.required),
            secret: new FormControl('', Validators.required),
            merchId: new FormControl('', Validators.required),
            hostUrl: new FormControl('', Validators.required),
            callbackUrl: new FormControl('', Validators.required),
            protocal: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            port: new FormControl('', Validators.required),
            signType: new FormControl('', Validators.required),
            publicKey: new FormControl('', Validators.required),
            privateKey: new FormControl('', Validators.required)
        });


    }

    //数据提交
    onSubmit() {

        //点击后button disabled
        this.submitted = true;

        let formData = this.dataForm.value;


        //console.log(JSON.stringify(contract));
        formData.id  =this.curId;
        formData.icon = this.imageUrl;

        //contract.signedDate = JSON.stringify(contract.signedDate).substr(1,10);

        this.thirdService.save(JSON.stringify(formData)).subscribe(res=>{
            if(res.code == 0){

               this.goBack();
            }
            //还原button
            this.submitted = false;
        });
    }

    onBasicUploadAuto(event){


        this.imageUrl = JSON.parse(event.xhr.response).data.imageUrl;

    }

    goBack(){
        this.location.back();
    }
}
