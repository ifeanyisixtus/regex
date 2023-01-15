function VisaCardNumber(inputtxt) {
  //This is a visa card that Allows for either 13 or 16 digits between 0 and 9 and also must start with 4
  const cardno = /^4[0-9]{12}(?:[0-9]{3})?$/;
  //if (Number.isNaN(parseInt(inputtxt))) {
  // return true;
  return cardno.test(inputtxt);
}

function validateVisaCardNumber(cardnumber) {
  let cardType = "invalid visa card, please enter a valid card number";
  if (VisaCardNumber(cardnumber)) {
    cardType = " valid visa card number";
  }
  return cardType;
}

const validate = validateVisaCardNumber(4111111111111111);
console.log(validate);
