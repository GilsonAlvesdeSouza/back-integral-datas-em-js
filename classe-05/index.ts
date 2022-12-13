const taAberto3 = (
  ano: number,
  mes: number,
  dia: number,
  hora: number,
  minutos?: number
): Boolean => {
  const utcDate = new Date(ano, mes, dia, hora, minutos);
  if (utcDate.getDay() > 0 && utcDate.getDay() < 6) {
    if (utcDate.getHours() >= 8 && utcDate.getHours() <= 18) {
      return true;
    }
  }

  if (utcDate.getDay() === 6) {
    if (utcDate.getHours() >= 8 && utcDate.getHours() <= 12) {
      return true;
    }
  }

  return false;
};

console.log(taAberto3(2021, 3, 25, 12));
