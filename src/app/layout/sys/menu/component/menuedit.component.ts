/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { routerTransition } from '../../../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../shared/services/user/auth.service';
import { Keys   }    from '../../../../shared/common/keys';
import {MenuService} from "../../../../shared/services/common/menu.service";

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sys-menuedit',
    templateUrl: './menuedit.component.html',
    animations: [routerTransition()]
})
export class MenuEditComponent implements OnInit {

    public dataForm: FormGroup; //定义form
    public curId;//当前数据ID


    submitted = false; //控制重复提交

    public listMenu;


    public imageUrl;


    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private toastrService:ToastrService,private menuService:MenuService,private authService:AuthService) {
        this.createForm();
    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        if(this.curId){
            this.menuService.find(this.curId).subscribe(res=>{
                if(res.code == 0){
                    this.dataForm.patchValue({'code': res.data.code});
                    this.dataForm.patchValue({'name': res.data.name});
                    this.dataForm.patchValue({'icon': res.data.icon});
                    this.dataForm.patchValue({'parentId': res.data.parentId});
                    this.dataForm.patchValue({'path': res.data.path});
                }

            });
        }

        this.menuService.findAll().subscribe(res=>{
            if(res.code == 0){
                this.listMenu = res.data;
            }

        });

    }

    //初始化form
    createForm(){
        this.dataForm = new FormGroup({
            code: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            icon: new FormControl('', Validators.required),
            parentId: new FormControl('', Validators.required),
            path: new FormControl('', Validators.required),
        });

    }

    //数据提交
    onSubmit() {

        //点击后button disabled
        this.submitted = true;

        let formData = this.dataForm.value;

        formData.id  =this.curId;

        this.menuService.save(JSON.stringify(formData)).subscribe(res=>{
            if(res.code == 0){
               this.toastrService.success("保存成功");
               this.goBack();
            }else{
                this.toastrService.error("保存失败")
            }
            //还原button
            this.submitted = false;
        },error=>{
            this.toastrService.error("接口异常")
            this.submitted = false;
        });
    }

    goBack(){
        this.location.back();
    }
}
