let body = JSON.parse($response.body);
body = {
  "status" : "ok",
  "sdkuid" : "aebf6awut5ghppve",
  "universal_info" : [

  ],
  "data" : {
    "app_channel" : "app_store"
  },
  "code" : 200,
  "subcode" : 0,
  "aid" : 8826442,
  "unisdk_login_json" : "eyJhaWQiOiI4ODI2NDQyIiwic2RrdWlkIjoiYWViZjZhd3V0NWdocHB2ZSIsInVzZXJuYW1lIjoiYWViZjZhd3V0NWdocHB2ZUBpb3MubmV0ZWFzZS53aW4uMTYzLmNvbSIsImFjY2Vzc190b2tlbiI6IiIsImV4cGlyZXNfaW4iOiIiLCJyZWZyZXNoX3Rva2VuIjoiIiwicmVmcmVzaF9leHBpcmVzX2luIjoiIiwicmVhbG5hbWVfbXNnIjp7InJlYWxuYW1lX3N0YXR1cyI6IjEiLCJpc19hZHVsdCI6IjEifSwiY2hsX3Nka19qc29uIjp7InNka3VpZCI6ImFlYmY2YXd1dDVnaHBwdmUiLCJhaWQiOiI4ODI2NDQyIiwidGltZXN0YW1wIjoiMTY1MzIyMDU1MiIsInNpZ24iOiJmOTkxYTliMDFmOTdmZjE2MTZlODlkMzJjMGFjZWNmOGVmMTM0MzI3NWZhMDEyNzFjMWQyMTBjYTM2ZDI5Zjc0In0sImFhc192ZXJzaW9uIjoidjMifQ==",
  "aas_ban" : {
    "ban" : 1,
    "ban_msg" : "禁止登录 滚蛋"
  },
  "newtm" : 1594021027,
  "realname_msg" : {
    "update_guide" : 1,
    "age_range" : 3,
    "age" : 20,
    "id_hash" : "1ebef4b64fadb7c23ef0331be8d691d9",
    "verify_status" : 2,
    "birthday" : "20010814",
    "oversea" : false,
    "age_range_v2" : 4
  }
}
$done({body: JSON.stringify(body)});
