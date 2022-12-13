const date = new Date();

const mesString = (mes: number): string => {
  let result = "";
  switch (mes) {
    case 0:
      result = "janeiro";
      break;
    case 1:
      result = "fevereiro";
      break;
    case 2:
      result = "março";
      break;
    case 3:
      result = "abril";
      break;
    case 4:
      result = "maio";
      break;
    case 5:
      result = "junho";
      break;
    case 6:
      result = "julho";
      break;
    case 7:
      result = "agosto";
      break;
    case 8:
      result = "setembro";
      break;
    case 9:
      result = "outubro";
      break;
    case 10:
      result = "novembro";
      break;
    case 11:
      result = "dezembro";
      break;
  }
  return result;
};

const a = (date: Date): String => {
  return `${date.getDate()} de ${mesString(
    date.getMonth()
  )} de ${date.getFullYear()}`;
};

const b = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const c = (date: Date): String => {
  return `${date.getDate()} ${mesString(date.getMonth()).slice(0, 3)}`;
};

const d = (date: Date): String => {
  return `${date.getDate()} ${mesString(date.getMonth()).slice(
    0,
    3
  )} ${date.getFullYear()}`;
};

const e = (date: Date): String => {
  return `${date.getDate()} de ${mesString(date.getMonth()).slice(
    0,
    3
  )} de ${date.getFullYear()}`;
};

const f = (date: Date): String => {
  return `${date.getDate()}/${mesString(date.getMonth()).slice(0, 3)}`;
};

console.log(a(date));
console.log(b(date));
console.log(c(date));
console.log(d(date));
console.log(e(date));
console.log(f(date));
