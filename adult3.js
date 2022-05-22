
let body = JSON.parse($response.body);
body = {
  "user" : {
    "display_username" : "ztxg53@163.com",
    "realname_status" : 1,
    "need_mask" : false,
    "login_type" : 1,
    "mobile_bind_status" : 0,
    "avatar" : "",
    "need_aas" : false,
    "login_channel" : "netease",
    "username" : "ztxg53@163.com",
    "login_time" : 1653234842,
    "account" : "ztxg53@163.com",
    "client_username" : "ztxg53@163.com",
    "nickname" : "",
    "realname_verify_status" : 2
  },
  "verify_status" : {
    "need_passwd" : 0,
    "need_email" : 0,
    "need_sms" : 0
  }
}
$done({body: JSON.stringify(body)});
