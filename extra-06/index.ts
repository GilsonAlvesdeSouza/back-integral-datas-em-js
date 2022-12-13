const taValendo = (datePromocao: Date, dataSolicitada: Date): Boolean => {
  const horaPromoção = +datePromocao;
  const horaSolicitada = +dataSolicitada;

  const ateOndeVaiPromocao = horaPromoção + 24 * 60 * 60 * 1000;

  if (horaSolicitada >= horaPromoção && horaSolicitada <= ateOndeVaiPromocao) {
    return true;
  }
  return false;
};

console.log(taValendo(new Date(2021, 3, 25, 12), new Date(2021, 3, 26, 12)));
