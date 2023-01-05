let body = JSON.parse($request.body);
body = {
  "text" : "enter",
  "op" : "ret",
  "req_sn" : 7,
  "ret" : 0
}
$done({body: JSON.stringify(body)});
