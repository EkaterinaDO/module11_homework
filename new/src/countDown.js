export function countDown(n) {

    let array = [];
    let str;

    if (n > 0) {
        for (let i = n; i >= 0; i--) {
            array.push([i]);
        }
        str = array.join(",");
        return str;
    } else if (n < 0) {
        return "Данные неверны";
    } else if (typeof n === "string") {
        return "Это строка";
    } else {
        return "Пусто";
    }
}

