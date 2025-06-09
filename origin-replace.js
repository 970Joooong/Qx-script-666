// origin-replace.js
// 替换 Origin 请求头为 pandalive

if ($request && $request.headers) {
  $done({
    headers: {
      ...$request.headers,
      Origin: "https://www.pandalive.co.kr"
    }
  });
} else {
  $done({});
}
