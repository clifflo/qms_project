import { isValidBranch } from '../twigs/twig_1';
import { getBpse } from '../twigs/twig_2';
import { lhContexts_5 } from './rho_4';
import { rpsSet, rpalOrder } from './rho_5';
import { item } from '../utils/util_1';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { checkDay } from '../calendar';

// 'Rin' stands for Rho Input.
export const getDelta_1 = rin => {

  const regex = /(.)月(..)日(.*)之(.*)卦/;

  // Capturing group
  const cgr = rin.match(regex);

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

    return {
      month,
      day,
      lhna,
      lhnb,
      crsa,
      crsb,
      dbse
    }
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse Rho Input.'
    );
  }
}

export const castRhoLots = (lhba, lhbb) => {

  const lhia = binaryToDecimal('b' + lhba);
  const lhib = binaryToDecimal('b' + lhbb);

  const lhna = getLhcByIdx(lhia).lhn;
  const lhnb = getLhcByIdx(lhib).lhn;

  const wToday = getWToday();
  const mBrh = wToday.mbp[1];
  const rin = `${mBrh}月${dbp}日${lhna}之${lhnb}卦`;
  return getDelta_1(rin);
}
