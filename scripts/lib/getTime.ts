export function getTime() {
  const now = new Date();
  const Year = now.getFullYear();
  const Month = (now.getMonth() + 1).toString().padStart(2, "0");
  const Date_ = now.getDate().toString().padStart(2, "0");
  const Hour = now.getHours().toString().padStart(2, "0");
  const Min = now.getMinutes().toString().padStart(2, "0");
  const Sec = now.getSeconds().toString().padStart(2, "0");

  return Year + "年" + Month + "月" + Date_ + "日" + Hour + ":" + Min + ":" + Sec;
}
