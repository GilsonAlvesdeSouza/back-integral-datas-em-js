const taValendo2 = (datePromocao: Date, dataSolicitada: Date): Boolean => {
  const horaPromoção = +datePromocao;
  const horaSolicitada = +dataSolicitada;

  const ateOndeVaiPromocao = horaPromoção + 30 * 24 * 60 * 60 * 1000;

  if (horaSolicitada >= horaPromoção && horaSolicitada <= ateOndeVaiPromocao) {
    return true;
  }
  return false;
};

console.log(taValendo2(new Date(2021, 3, 25, 12), new Date(2021, 4, 26, 12)));
