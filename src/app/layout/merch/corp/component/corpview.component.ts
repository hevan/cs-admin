/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { routerTransition } from '../../../../router.animations';
import { HttpClient,HttpResponse, HttpHeaders,HttpParams } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../../../shared/services/user/auth.service';
import {CorpService} from '../../../../shared/services/corp/corp.service';
import { Keys   }    from '../../../../shared/common/keys';
import {ConstCodeService} from "../../../../shared/services/common/constCode.service";
import {CorpMenuItemService} from "../../../../shared/services/corp/corpMenuItem.service";
import {MenuService} from "../../../../shared/services/common/menu.service";

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-merch-corpview',
    templateUrl: './corpview.component.html',
    animations: [routerTransition()]
})
export class CorpViewComponent implements OnInit {


    public curId;//当前数据ID
    public corpData:any;

    public listMenu = [];

    public submitted = false;

    public curItem;

    public listCorpMenuItem = [];

    public listSelectMenuItem = [];


    public displayEdit =false;

    //构造
    constructor(private fb: FormBuilder,private location: Location, private route: ActivatedRoute,private router: Router,private toastrService:ToastrService,private corpService: CorpService,private menuService:MenuService,private corpMenuItemService:CorpMenuItemService,private authService:AuthService) {

    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.loadData();
    }

    loadData(){
        if(this.curId){
            this.corpService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.corpData = res.data;
                }

            });
        }

        this.menuService.findAll().subscribe(res=>{
            if(res.code == 0){
                this.listMenu = res.data;

                this.loadMenuItem();
            }
        });
    }

    loadMenuItem(){
        let params2 = new HttpParams().set('corpId', this.curId);

        this.listCorpMenuItem = [];
        this.corpMenuItemService.findAllByCorpId(params2).subscribe(res=>{
            if(res.code == 0){
                let corpMenus = res.data;

                for(var m=0;m<this.listMenu.length;m++){
                    let curMenu = this.listMenu[m];
                    for(var n=0;n<corpMenus.length;n++){
                        if(curMenu.id == corpMenus[n].menuId){
                            this.listCorpMenuItem.push(curMenu);
                        }
                    }
                }
            }
        });
    }

    saveMenuItem() {

        this.submitted = true;


        let listSaveMenu = [];
        if (this.listSelectMenuItem.length > 0) {

            for (var m = 0; m < this.listSelectMenuItem.length; m++) {
                let selectMenu = {menuId: this.listSelectMenuItem[m].id, corpId: this.corpData.id};

                listSaveMenu.push(selectMenu);
            }
        }

        this.corpMenuItemService.batch(JSON.stringify(listSaveMenu)).subscribe(res=> {
            if (res.code == 0) {

                this.loadMenuItem();
            }

            this.displayEdit = false;
        });
    }

    toDispatchMenu(){

        this.displayEdit =true;
    }


    toCheckCorp(status){
        let params2 = new HttpParams().set('id', this.curId).set('checkStatus',status);
        this.corpService.updateStatus(params2).subscribe(res=>{
            if(res.code == 0){

                this.toastrService.success("审核成功");
            }

        });
    }

    //编辑
    toEdit(){
        this.router.navigate(['/merch/corp/corpedit',{id:this.curId}]);
    }

    goBack(){
        this.location.back();
    }
}
