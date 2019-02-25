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
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-merch-corpedit',
    templateUrl: './corpedit.component.html',
    animations: [routerTransition()]
})
export class CorpEditComponent implements OnInit {

    public dataForm: FormGroup; //定义form
    public curId;//当前数据ID


    submitted = false; //控制重复提交

    public listCorpType = [];

    public certImageUrl;

    public listProvince = [];

    public listCity = [];

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private toastrService:ToastrService,private corpService: CorpService,private cityService:CityService,private authService:AuthService) {
        this.createForm();
    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.corpService.findAllCorpType().subscribe(res=>{
            if(res.code == 0){
                this.listCorpType = res.data;
            }
        });

        this.cityService.findAllRegion().subscribe(res=>{
            if(res.code == 0){
                this.listProvince = res.data;
            }
        });

        if(this.curId){
            this.corpService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.dataForm.patchValue({'name': res.data.name});
                    this.dataForm.patchValue({'organizationCode': res.data.organizationCode});
                    if(res.data.corpType){
                        this.dataForm.patchValue({'corpType': {'id':res.data.corpType.id}});
                    }

                    this.dataForm.patchValue({'province': res.data.province});
                    this.dataForm.patchValue({'city': res.data.city});
                    this.dataForm.patchValue({'address': res.data.address});
                    this.dataForm.patchValue({'description': res.data.description});
                    this.dataForm.patchValue({'busiScope': res.data.busiScope});
                    this.dataForm.patchValue({'linkMan': res.data.linkMan});
                    this.dataForm.patchValue({'linkTel': res.data.linkTel});
                    this.dataForm.patchValue({'appId': res.data.appId});
                    this.certImageUrl = res.data.certImageUrl;
                }

            });
        }


        this.dataForm.controls['province'].valueChanges
            .subscribe(term => {
               for(var i=0;i<this.listProvince.length;i++){

                   if(term === this.listProvince[i].name){
                       this.listCity = this.listProvince[i].subRegions;
                   }
                }
            });
    }

    //初始化form
    createForm(){
        this.dataForm = new FormGroup({
            name: new FormControl('', Validators.required),
            corpType: new FormGroup({
                id: new FormControl('', Validators.required)
            }),
            organizationCode: new FormControl('', Validators.required),
            province: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            busiScope: new FormControl('', Validators.required),
            linkMan: new FormControl('', Validators.required),
            linkTel: new FormControl('', Validators.required),
            appId:new FormControl('', Validators.required),
        });


    }

    //数据提交
    onSubmit() {

        //点击后button disabled
        this.submitted = true;

        let formData = this.dataForm.value;


        //console.log(JSON.stringify(contract));
        formData.id  =this.curId;
        formData.certImageUrl = this.certImageUrl;

        //contract.signedDate = JSON.stringify(contract.signedDate).substr(1,10);

        this.corpService.save(JSON.stringify(formData)).subscribe(res=>{
            if(res.code == 0){
                this.toastrService.success("数据保存失败");

               this.goBack();
            }else {
                this.toastrService.error("数据保存失败");
            }
            //还原button
            this.submitted = false;
        },error =>{
            this.toastrService.error("业务接口异常");
            this.submitted = false;
        });
    }

    onBasicUploadAuto(event){


        this.certImageUrl = JSON.parse(event.xhr.response).data.imageUrl;

    }

    goBack(){
        this.location.back();
    }
}
