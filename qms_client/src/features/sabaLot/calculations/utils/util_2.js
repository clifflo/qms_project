import * as RA from 'ramda-adjunct';
import * as R from 'ramda';

export const decimalToBinary =
  (decimalNumber, numberOfDigits) => {

  if(R.isNil(numberOfDigits)){
    throw new Error(
      'Need to enter number of digits');
  }

  if(!RA.isNumber(numberOfDigits)){
    throw new Error(
      'Number of digits has to be a number.');
  }

  const rawBinary = decimalNumber.toString(2);

  const addedZeroLength = numberOfDigits - rawBinary.length;
  let addedZeroes = ''

  for(let i = 0; i < addedZeroLength; i++){
    addedZeroes += '0';
  }

  return 'b' + addedZeroes + rawBinary;

}

export const binaryToDecimal = binaryNumber => {

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
