let body = JSON.parse($response.body);
body = {"code":200,"subcode":8,"status":"adult no need to role_enter","msg":"","rm":"14","online_msg":null}
$done({body: JSON.stringify(body)});
