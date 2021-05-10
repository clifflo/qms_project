import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const rhoBaseLongHookSeries =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const slhidx = 63;

  const mapFn = tlhna => {

    const tlhidx =
      getRhoContext1ByLongHookName(tlhna)
      .lhidx;

    if(R.isNil(tlhidx)){
      throw new Error(
        'TLHIDX should not be nil.');
    }

    if(!RA.isNumber(tlhidx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const rgbnry = decimalToBinary(
      slhidx ^ tlhidx,
      6);

    return rgbnry;
  }

  try{

    const rhgbs = R.compose(
      R.uniq,
      R.map(mapFn))
    (rblhss)

    if(rhgbs.length != 7){
      throw new Error(
        'It must have 7 unique rho hook '
        + 'gap binaries only but now it has '
        + rhgbs.length + '.');
    }

    return R.map(mapFn, rblhss);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho hook gap binaries set.');
  }
}
