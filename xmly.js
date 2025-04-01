// 多账号 Cookie 池（根据你提供的 6 组账号填充）
const cookiePool = [
  // 账号1
  {
    main: {
      "Cookie": "channel=ios-b1; 1&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6406938&9.2.31; net-mode=WIFI;1&_token=505199039&C5C2E605-C61C-4D34-90AD-C80098B6DF07; device_model=Telegram:https://t.me/GieGie777",
      "VipExpireDays": "会员7天后到期",
      "msg": "success"
    },
    kids: {
      "Cookie": "channel=ios-b1; 1&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6406938&9.2.31; net-mode=WIFI;1&_token=505199039&C5C2E605-C61C-4D34-90AD-C80098B6DF07; device_model=Telegram:https://t.me/GieGie777",
      "VipExpiryTime": "2024-04-15 23:59:59",
      "msg": "complete",
      "message": "正常"
    }
  },
  // 账号2
  {
    main: {
      "Cookie": "channel=ios-b1; 1&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6181486&9.2.31; net-mode=WIFI;1&_token=505199056&ADE7BE90-125B-4E2F-BEC5-E271584EB8D9; device_model=Telegram:https://t.me/GieGie777",
      "VipExpireDays": "会员7天后到期",
      "msg": "success"
    },
    kids: {
      "Cookie": "channel=ios-b1; 1&_device=iPhone&075201B3-4A5F-487E-AAFF-0AC3E6181486&9.2.31; net-mode=WIFI;1&_token=505199056&ADE7BE90-125B-4E2F-BEC5-E271584EB8D9; device_model=Telegram:https://t.me/GieGie777",
      "VipExpiryTime": "2024-04-15 23:59:59",
      "msg": "complete",
      "message": "正常"
    }
  },
  // 后续账号按相同格式补充...
];

// 获取随机账号
function getRandomAccount() {
  const index = Math.floor(Math.random() * cookiePool.length);
  return cookiePool[index];
}

// 主程序
let body = JSON.parse($response.body);
const account = getRandomAccount();

// 根据请求路径注入不同数据
if ($request.url.includes("mobile/v1/user")) {  // 主App
  body.data = account.main;
} else if ($request.url.includes("account/v1/profile")) {  // 儿童版
  body.data = account.kids;
}

$done({body: JSON.stringify(body)});