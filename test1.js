let body = JSON.parse($response.body);
body = {
  "queue_size" : 10,
  "enable" : true,
  "di_refresh_interval" : 300,
  "java_crash_enabled" : false,
  "project" : "",
  "wifi_only" : false,
  "expire" : 30,
  "file_limit" : 6144,
  "froze_time" : 0,
  "anr_catch_limit" : 0,
  "watchdog_enabled" : false,
  "client_v" : "",
  "message_enabled" : false,
  "carrier_limit" : 6144,
  "os_type" : "android"
}
$done({body: JSON.stringify(body)});
