const precioOriginal = 120;

const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function couponValidate(descuento) {
  const coupon = document.getElementById("coupon");
  const couponValue = coupon.value;
  switch (couponValue) {
    case cupones[0]:
      descuento = descuento + 20;
      break;
    case cupones[1]:
      descuento = descuento + 40;
      break;
  }
  return descuento;
}

function onClickButtonPriceDescount() {
  let cupones = ["NEWCUSTOMER2021", "NOVIEMBRE2021"];

  const inputPrice = document.getElementById("inputPrice");
  const inputDescount = document.getElementById("inputDescount");
  const priceValue = inputPrice.value;
  let descountValue = inputDescount.value;
  const coupon = document.getElementById("coupon");
  let couponValue = coupon.value;
  switch (couponValue) {
    case cupones[0]:
      descountValue = descountValue + 20;
      break;
    case cupones[1]:
      descountValue = descountValue + 40;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    descountValue
  );
  const paragraph = document.getElementById("resultado");
  return (paragraph.innerText = `El precio con descuento es ${precioConDescuento}`);
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
