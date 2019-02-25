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
import {ThirdService} from "../../../../shared/services/common/third.service";

@Component({
    selector: 'app-sys-thirdview',
    templateUrl: './thirdview.component.html',
    animations: [routerTransition()]
})
export class ThirdViewComponent implements OnInit {


    public curId;//当前数据ID
    public thirdData:any;


    //构造
    constructor(private fb: FormBuilder,private location: Location, private route: ActivatedRoute,private router: Router,private thirdService: ThirdService,private authService:AuthService) {

    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.loadData();
    }

    loadData(){
        if(this.curId){
            this.thirdService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.thirdData = res.data;
                }

            });
        }
    }


    //编辑

    toEdit(){
        this.router.navigate(['/sys/third/thirdedit', { 'id': this.curId}]);
    }

    goBack(){
        this.location.back();
    }
}
