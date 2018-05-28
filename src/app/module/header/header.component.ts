import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn:boolean=true;
  cmshost:string;
  breadCrumb: string = "TITLE.DOOR_TO_DOOR";
  userDetails: any;
  langlist:any[]=[{"name" : "English", "value" : "en"}, {"name" : "中文","value" : "zh"}]
  constructor(public translate: TranslateService) {     
    translate.addLangs(this.langlist);
    //translate.setDefaultLang('en');
    //let browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
  }
  changeLang(lang){
    console.log(lang);
    this.translate.use(lang);
  }
  getCurrentLang(){
    console.log(this.translate.getBrowserLang());
  }

  ngOnInit() {
    this.userDetails=[{
      displayName:"XXXX"
    }]
  }

}
