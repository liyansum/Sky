let body = JSON.parse($response.body);
body = {
  "ip" : "4.4.4.4",
  "country" : "US"
}
$done({body: JSON.stringify(body)});
