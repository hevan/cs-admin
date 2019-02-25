/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { routerTransition } from '../../../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpParams } from '@angular/common/http';
import {AuthService} from '../../../../shared/services/user/auth.service';
import { Keys  }    from '../../../../shared/common/keys';
import {CorpTypeService} from "../../../../shared/services/corp/corpType.service";



@Component({
    selector: 'app-corp-corptypelist',
    templateUrl: './corptypelist.component.html',
    animations: [routerTransition()]
})
export class CorpTypeListComponent implements OnInit {

    public listData=[]; //定义form

    public searchData = {'name':''};

    public selectData = {id:'','name':''};

    public displayEdit = false;

    public submitted = false;

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private corpTypeService: CorpTypeService,private authService:AuthService) {

    }

    //页面初始化
    ngOnInit() {

        this.loadData();
    }

    loadData() {

        this.loadAll();
    }



    loadAll() {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages


        this.corpTypeService.findAllCorpType().subscribe(res=>{
            if(res.code == 0){
                this.listData = res.data;
            }
        });
    }


    toEdit(item){
        if(item){

            this.selectData = item;
        }else{
            this.selectData = {id:'','name':''};
        }

        this.displayEdit = true;
    }

    //数据提交
    onSubmit() {

        //点击后button disabled
        this.submitted = true;

        this.corpTypeService.save(JSON.stringify(this.selectData)).subscribe(data=>{

            //还原button
            this.submitted = false;
            this.displayEdit = false;
            this.loadAll();

        });
    }

    goBack(){
        this.location.back();
    }
}
