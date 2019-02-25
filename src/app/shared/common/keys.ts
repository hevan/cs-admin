/**
 * Created by hevan on 2018/5/21.
 */
export class Keys {
  static KEY_TOKEN:string = 'admin_token';
  static KEY_USER_INFO:string = 'admin_user_info';
  static SERVER_URL:string = 'http://api.yoxyc.com';
  static SERVER_UPLOAD_URL: string = 'http://api.yoxyc.com';

  //static SERVER_URL:string = 'http://localhost:8000';
  //static SERVER_UPLOAD_URL: string = 'http://localhost:8000';

  static HTTP_BODY:string = 'application/json';

  static HTTP_FORM:string = 'application/x-www-form-urlencoded';

  static HTTP_MULTIPART:string = 'multipart/form-data';


  static cn = {
    firstDayOfWeek: 1,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["日","一","二","三","四","五","六"],
    dayNamesMin: ["日","一","二","三","四","五","六"],
    monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
    monthNamesShort: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
    today: '今天',
    clear: '清除'
  };

} 
