import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { binaryToDecimal } from '../utils/util_1';
import { getLhcByIdx } from '../rhos/rho_3';
import { isValidBranch } from '../twigs/twig_1';
import { getBpse } from '../twigs/twig_3';
import { lhcts_5 } from '../rhos/rho_4';
import { rpsSet, rpalOrder } from '../rhos/rho_5';
import { item } from '../utils/util_1';
import { getWTodeDay } from '../calendar';
import { idxOfBranch } from '../twigs/twig_1';
import produce from 'immer';

export const getDelta_1 = delta_0 => {

  const regex = /(.)月(..)日(.*)之(.*)卦/;

  // Capturing group
  const cgr = delta_0.match(regex);

  if(R.isNil(cgr)){
    throw new Error(
      'You have typed the rho input incorrectly.');
  }

  const deMonth = cgr[1];

  if(!isValidBranch(deMonth)){
    throw new Error(
      `${deMonth} is not a valid deMonth.`
    )
  }
  const deDay = cgr[2];

  // Long Hook Name A
  const lhna = cgr[3];

  // Long Hook Name B
  const lhnb = cgr[4];

  // Long Hook Context A
  const lhca = R.find(
    R.propEq('lhName', lhna),
    lhcts_5);

  if(R.isNil(lhca)){
    throw new Error('Long Hook A is wrong.');
  }

  // Long Hook Context B
  const lhcb = R.find(
    R.propEq('lhName', lhnb),
    lhcts_5);

  if(R.isNil(lhcb)){
    throw new Error('Long Hook B is wrong.');
  }

  const acdFn = idx => {
    const crsi_1 = lhca.crosses[idx].crsi;
    const crsi_2 = lhcb.crosses[idx].crsi;

    // Is Activated
    const isStrike = crsi_1 != crsi_2;
    return isStrike;
  }

  const acdl = R.map(acdFn, R.range(0, 6));

  const crossFn = (cross_1, idx, list) => {

    const cross_2 = produce(cross_1, d_cross_2){

      cross_2.isStrike = acdl[idx];

      // Rho Paladin Start Position
      const rpsIdx = R.find(
        R.propEq('trunk', deDay[0]), rpsSet)
        .rpsIdx;

      // Rho Paladin
      const rpal = item(rpalOrder, rpsIdx + idx + 1);
      cross_2.rpal = rpal;

      return cross_2;
    }

  }


  try{
    // Day Betapsi Series
    const dbse = getBpse(deDay);
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
      deMonth,
      deDay,
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
