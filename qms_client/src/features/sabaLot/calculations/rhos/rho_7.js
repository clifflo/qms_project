import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { binaryToDecimal } from '../utils/util_1';
import { getLhcByIdx } from './rho_3';
import { isValidBranch } from '../twigs/twig_1';
import { getBpse } from '../twigs/twig_2';
import { lhContexts_5 } from './rho_4';
import { rpsSet, rpalOrder } from './rho_5';
import { item } from '../utils/util_1';
import { getWToday } from '../calendar';
import { idxOfBranch } from '../twigs/twig_1';

export const getDelta_1 = delta_0 => {

  const regex = /(.)月(..)日(.*)之(.*)卦/;

  // Capturing group
  const cgr = delta_0.match(regex);

  if(R.isNil(cgr)){
    throw new Error(
      'You have typed the rho input incorrectly.');
  }

  const month = cgr[1];

  if(!isValidBranch(month)){
    throw new Error(
      `${month} is not a valid month.`
    )
  }
  const day = cgr[2];

  // Long Hook Name A
  const lhna = cgr[3];

  // Long Hook Name B
  const lhnb = cgr[4];

  // Long Hook Context A
  const lhca = R.find(
    R.propEq('lhName', lhna),
    lhContexts_5);

  if(R.isNil(lhca)){
    throw new Error('Long Hook A is wrong.');
  }

  // Long Hook Context B
  const lhcb = R.find(
    R.propEq('lhName', lhnb),
    lhContexts_5);

  if(R.isNil(lhcb)){
    throw new Error('Long Hook B is wrong.');
  }

  const acdFn = idx => {
    const csi_1 = lhca.crosses[idx].csi;
    const csi_2 = lhcb.crosses[idx].csi;

    // Is Activated
    const isAcd = csi_1 != csi_2;
    return isAcd;
  }

  const acdl = R.map(acdFn, R.range(0, 6));

  const crossFn = (cross_1, idx, list) => {
    let cross_2 = Object.assign({}, cross_1);
    cross_2.cst = acdl[idx] ? 'Strike' : 'Silent';

    // Rho Paladin Start Position
    const rpsIdx = R.find(
      R.propEq('trunk', day[0]), rpsSet).rpsIdx;

    // Rho Paladin
    const rpal = item(rpalOrder, rpsIdx + idx + 1);
    cross_2.rpal = rpal;

    return cross_2;
  }


  try{
    // Day Betapsi Series
    const dbse = getBpse(day);
    const crsa = RA.mapIndexed(crossFn, lhca.crosses);
    const crsb = RA.mapIndexed(crossFn, lhcb.crosses);

    // Jack Index for Long Hook A
    const lhjia = lhca.rjackIdx;

    // King Index for Long Hook A
    const lhkia = lhca.rkingIdx;

    const getLhqia = () => {

      // Rho Jack's Cross Branch
      const rjcbh = crsa[lhjia].crbh;
      const rjcbi = idxOfBranch(rjcbh);
      return 5 - (rjcbi % 6);
    }

    const lhqia = getLhqia();

    return {
      month,
      day,
      lhna,
      lhnb,
      crsa,
      crsb,
      dbse,
      lhjia,
      lhkia,
      lhqia
    }
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse Rho Input.'
    );
  }
}

export const getDelta_2 = delta_1 => {

  const lhjia = delta_1.lhjia;
  const lhqia = delta_1.lhqia;
  const lhkia = delta_1.lhkia;

  const mapFn = (cross_1, idx) => {

    const cross_2 = Object.assign({}, cross_1);
    let dcrStatus = [];

    if(idx == lhkia){
      dcrStatus.push('Delta King');
    }

    if(idx == lhjia){
      dcrStatus.push('Delta Jack');
    }

    if(idx == lhqia){
      dcrStatus.push('Delta Queen');
    }

    cross_2.dcrStatus = dcrStatus;

    return cross_2;

  }

  const delta_2 = Object.assign({}, delta_1);
  delta_2.crsa = RA.mapIndexed(mapFn, delta_1.crsa);

  return delta_2;
}
