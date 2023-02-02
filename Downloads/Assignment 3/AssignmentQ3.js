function isValidCreditCard(cardNumber) {
    
    cardNumber = cardNumber.replace(/\D/g, '');
  
    if (!/^\d{13,19}$/.test(cardNumber)) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  }
  const cardNumber = '4111 1111 1111 1111';

if (isValidCreditCard(cardNumber)) {
  console.log('Valid credit card number');
} else {
  console.log('Invalid credit card number');
}
