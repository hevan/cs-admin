/**
 * Created by hevan on 2018/6/4.
 */
/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { routerTransition } from '../../../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../../../shared/services/user/auth.service';
import {CorpService} from '../../../../shared/services/corp/corp.service';
import { Keys   }    from '../../../../shared/common/keys';
import {MenuService} from "../../../../shared/services/common/menu.service";

@Component({
    selector: 'app-sys-menuview',
    templateUrl: './menuview.component.html',
    animations: [routerTransition()]
})
export class MenuViewComponent implements OnInit {

    public curId;//当前数据ID
    public menuData:any;


    //构造
    constructor(private fb: FormBuilder,private location: Location, private route: ActivatedRoute,private router: Router,private menuService: MenuService,private authService:AuthService) {

    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.loadData();
    }

    loadData(){
        if(this.curId){
            this.menuService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.menuData = res.data;
                }

            });
        }
    }


    //编辑

    toEdit(){
        this.router.navigate(['/sys/menu/menuedit', { 'id': this.curId}]);
    }

    goBack(){
        this.location.back();
    }
}
