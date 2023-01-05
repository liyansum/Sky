let body = JSON.parse($response.body);
body = {"user": {"username": "a2973667167@163.com", "account": "a2973667167@163.com", "realname_verify_status": 2, "login_channel": "netease", "mobile_bind_status": 0, "need_mask": false, "client_username": "a2973667167@163.com", "realname_status": 1, "avatar": "", "need_aas": false, "login_type": 1, "nickname": "", "display_username": "a2973667167@163.com", "login_time": 1670044329}, "verify_status": {"need_sms": 0, "need_email": 0, "need_passwd": 0}}
$done({body: JSON.stringify(body)});
