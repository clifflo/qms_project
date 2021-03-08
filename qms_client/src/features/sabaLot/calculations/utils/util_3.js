import * as RA from 'ramda-adjunct';
import * as R from 'ramda';

export const decimalToBinary =
  (decimalNumber, numberOfDigits) => {
  const rawBinary = decimalNumber.toString(2);
  console.log(rawBinary);
  const addedZeroLength = numberOfDigits - rawBinary.length;
  let addedZeroes = ''

  for(let i = 0; i < addedZeroLength; i++){
    addedZeroes += '0';
  }

  return 'b' + addedZeroes + rawBinary;

}

export const binaryToDecimal = (binaryNumber) => {
  if(RA.isString(binaryNumber)){
    throw new Error('Binary number must be of string type.');
  }

  if(R.take(1, binaryNumber) != 'b'){
    throw new Error('Binary number must start with b');
  }

  return parseInt(R.drop(1, binaryNumber)).toString(10);
}
