const taAberto2 = (
  ano: number,
  mes: number,
  dia: number,
  hora: number,
  minutos?: number
): Boolean => {
  const utcDate = new Date(Date.UTC(ano, mes, dia, hora, minutos));
  if (utcDate.getHours() >= 8 && utcDate.getHours() <= 18) {
    if (utcDate.getDay() > 0 && utcDate.getDay() < 6) {
      return true;
    }
  }
  return false;
};

console.log(taAberto2(2021, 3, 26, 7, 59));
