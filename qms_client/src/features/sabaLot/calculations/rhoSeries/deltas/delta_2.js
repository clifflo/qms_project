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

export const getCestm = (bkrlhn, chelhn) => {

  const bkrcxt_2 = getRcxt2ByLhn(bkrlhn);
  const chrcxt_2 = getRcxt2ByLhn(chelhn);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  const mapFn = cridx => {
    const bcrsi = bkrcxt_2.lhcres[cridx].crsi;
    const ccrsi = chrcxt_2.lhcres[cridx].crsi;

    if(R.isNil(bcrsi)){
      throw new Error(
        'Book CRSI should not be nil.');
    }

    if(R.isNil(ccrsi)){
      throw new Error(
        'Cheese CRSI should not be nil.');
    }

    if(!isZeroOrOne(bcrsi)){
      throw new Error(
        'BCRSI must be 1 or 0.');
    }

    if(!isZeroOrOne(ccrsi)){
      throw new Error(
        'CCRSI must be 1 or 0.');
    }

    return bcrsi != ccrsi;
  }

  return R.map(mapFn, R.range(0, 6));

}

// RCBRC_1 stands for Rho construct branch
// reaction context 1.
// RCSBR stands for rho construct branch.
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
