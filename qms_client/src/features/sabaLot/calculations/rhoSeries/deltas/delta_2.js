import * as R from 'ramda';
import {
  rhocs_1,
  getRcxt1ByLhn
} from '../rhos/rho_1';

const buildCestm = (srclhn, tgtlhn) => {

  const srocxt_1 = getRcxt1ByLhn(srclhn);
  const tgtcxt_1 = getRcxt1ByLhn(tgtlhn);
  const slhbns = decimalToBinary(
    srocxt_1.lhidx, 6);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  // Cross Index
  const mapFn = cridx => {
    const scrsi = srocxt_1.crosses[cridx].crsi;
    const tcrsi = tgtcxt_1.crosses[cridx].crsi;

    if(R.isNil(scrsi)){
      throw new Error(
        'Source Cross Sign should not be nil.');
    }

    if(R.isNil(tcrsi)){
      throw new Error(
        'Target Cross Sign should not be nil.');
    }

    if(!isZeroOrOne(scrsi)){
      throw new Error(
        'Source Cross Sign must be 1 or 0.');
    }

    if(!isZeroOrOne(tcrsi)){
      throw new Error(
        'Target Cross Sign must be 1 or 0.');
    }


    return scrsi == tcrsi;
  }


}
