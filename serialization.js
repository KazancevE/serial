let arr = []; //тут может быть любой обьект или массив

let ser = json.stringify(arr); // преобразует в строку
alert(ser);

let deser = json.parse(ser); //преобразует строку обратно в обьект/массив
alert(deser);