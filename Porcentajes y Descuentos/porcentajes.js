function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function couponValidate(priceValue, descuento) {
  let cupones = ["NEWCUSTOMER2021", "NOVIEMBRE2021"];
  const coupon = document.getElementById("coupon");
  const couponValue = coupon.value;
  switch (couponValue) {
    case cupones[0]:
      var nuevoDescuento = descuento + 20;
      break;
    case cupones[1]:
      var nuevoDescuento = descuento + 40;
      break;
  }
  console.log(descuento);
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    nuevoDescuento
  );
  return precioConDescuento;
}

function onClickButtonPriceDescount() {
  const inputPrice = document.getElementById("inputPrice");
  const inputDescount = document.getElementById("inputDescount");
  const priceValue = inputPrice.value;
  let descountValue = parseInt(inputDescount.value);

  let descuento = couponValidate(priceValue, descountValue);

  // const precioConDescuento = calcularPrecioConDescuento(
  //   priceValue,
  //   descountValue
  // );
  const paragraph = document.getElementById("resultado");
  return (paragraph.innerText = `El precio con descuento es ${descuento}`);
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
