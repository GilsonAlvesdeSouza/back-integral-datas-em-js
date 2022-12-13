const taAberto = (ano: number, mes: number, dia: number, hora: number) => {
  const utcDate = new Date(ano, mes, dia, hora);
  if (utcDate.getHours() >= 8 && utcDate.getHours() <= 18) {
    return true;
  }

  return false;
};

console.log(taAberto(2022, 11, 13, 2));
