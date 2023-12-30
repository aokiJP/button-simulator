export function getTime() {
    const Year = new Date().getFullYear();
    const Month = new Date().getMonth() + 1;
    const Date_ = new Date().getDate();
    const Hour = new Date().getHours();
    const Min = new Date().getMinutes();
    const Sec = new Date().getSeconds();
    return Year + "年" + Month + "月" + Date_ + "日" + Hour + ":" + Min + ":" + Sec;
}

//# sourceMappingURL=../../../_buttonAddonDebug/lib/getTime.js.map
