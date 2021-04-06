import * as R from 'ramda';
import {
  getRcxt2ByLhn
} from '../rhos/rho_2';
import {
  getRcxt4ByLhn
} from '../rhos/rho_4';
import {
  decimalToBinary
} from '../../utils/util_2';
import {
  getBscrt
} from '../../twigs/twig_4';
import {
  getFlhop,
  getHitop,
  getPseop
} from '../../twigs/twig_5';

export const getCestm = (srclhn, tgtlhn) => {

  const srocxt_2 = getRcxt2ByLhn(srclhn);
  const tgtcxt_2 = getRcxt2ByLhn(tgtlhn);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  const mapFn = cridx => {
    const scrsi = srocxt_2.lhcres[cridx].crsi;
    const tcrsi = tgtcxt_2.lhcres[cridx].crsi;

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

    return scrsi != tcrsi;
  }

  return R.map(mapFn, R.range(0, 6));

}

// Rho construct branch reaction context 1
export const getRcbrc_1 = (rcsbr, lhname) => {

  // Rho construct BSCRT
  const rcbst = getBscrt(rcsbr);

  // Rho construct flush opponent
  const rcfho = getFlhop(rcsbr);

  // Rho construct hit opponent
  const rchto = getHitop(rcsbr);

  // Rho construct pause opponent
  const rcpso = getPseop(rcsbr);

  if(R.isNil(rcfho)){
    throw new Error(
      'RCFHO should not be nil.');
  }

  if(R.isNil(rchto)){
    throw new Error(
      'RCHTO should not be nil.');
  }

  if(R.isNil(rcpso)){
    throw new Error(
      'RCPSO should not be nil.');
  }

  if(R.isNil(rcbst)){
    throw new Error(
      'RCBST should not be nil.');
  }

  const mapFn = lhcros => {

    const crbh = lhcros.crbh;

    if(R.isNil(crbh)){
      throw new Error(
        'Cross branch should not be nil.');
    }

    return {
      isRcfho: crbh == rcfho,
      isRchto: crbh == rchto,
      isRcpso: crbh == rcpso,
      isRcbso: crbh == rcbst.bscpo,
      crbh,
      lhcdwi: lhcros.lhcdwi
    }
  }

  try{
    const rhocxt_4 = getRcxt4ByLhn(lhname);
    const rcsbrs_1 = R.map(mapFn, rhocxt_4.lhcres);
    return {
      rcsbr,
      rcfho,
      rchto,
      rcpso,
      rcbst,
      rcsbrs_1
    }
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RCBRC_1.');
  }
}
