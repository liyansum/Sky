let body = JSON.parse($response.body);
body = {
  "mobile_type" : "iPhone8,1",
  "data_source" : "unisdk",
  "mem_total" : "1519.55",
  "product" : "ma75",
  "collect_condition" : "60",
  "push_time" : "1653241674",
  "channel_name" : "netease",
  "user_id" : "",
  "os" : "android",
  "transid" : "B7673094-0D0F-40E7-891E-905F47EFEC15_1653241673423_772073177",
  "user_name" : "",
  "mem_idle" : "27.16",
  "network_type" : "wifi",
  "device_id" : "B7673094-0D0F-40E7-891E-905F47EFEC15",
  "os_version" : "15.3.1",
  "bundle_version" : "0.9.3"
}
$done({body: JSON.stringify(body)});
