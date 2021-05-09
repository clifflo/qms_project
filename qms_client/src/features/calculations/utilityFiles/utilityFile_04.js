import * as RA from 'ramda-adjunct';
import * as R from 'ramda';

export const decimalToBinary =
  (decimalNumber, numberOfDigits) => {

  if(R.isNil(decimalNumber)){
    throw new Error(
      'Decimal number should not be nil.');
  }

  if(!RA.isNumber(decimalNumber)){
    throw new Error(
      'Decimal number must be a number of course.');
  }

  if(R.isNil(numberOfBinaryDigits)){
    throw new Error(
      'Need to enter number of binary digits');
  }

  if(!RA.isNumber(numberOfBinaryDigits)){
    throw new Error(
      'Number of binary digits has to be a number.');
  }

  const rawBinaryDigits =
    decimalNumber.toString(2);

  const addedZeroLength =
    numberOfBinaryDigits - rawBinary.length;

  let addedZeroes = ''

  for(let i = 0; i < addedZeroLength; i++){
    addedZeroes += '0';
  }

  return 'b' + addedZeroes + rawBinaryDigits;
}

export const binariesToDecimal = binaryNumber => {

  if(!RA.isString(binaryNumber)){
    throw new Error(
      'Binary number must be of string type.');
  }

  if(R.take(1, binaryNumber) != 'b'){
    throw new Error(
      "Binary number must start with 'b'");
  }

  return parseInt(
    R.drop(1, binaryNumber), 2);
}

export const octalToDecimal = octalNumber => {

  if(!RA.isString(octalNumber)){
    throw new Error(
      'Octal number must be of string type.');
  }

  if(R.take(1, octalNumber) != 'o'){
    throw new Error(
      "Octal number must start with 'o'");
  }

  return parseInt(
    R.drop(1, octalNumber), 8);
}
