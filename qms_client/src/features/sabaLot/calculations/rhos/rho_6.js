import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { isValidBranch } from '../twigs/twig_1';
import { getBpse } from '../twigs/twig_2';
import { lhContexts_5 } from './rho_4';
import { rpsSet, rpalOrder } from './rho_5';
import { item } from '../utils/util_1';
import { getWToday } from '../calendar';
import { getLhcByIdx } from './rho_3';
import { idxOfBranch } from '../twigs/twig_1';

// 'Rin' stands for Rho Input.
const getDelta_1 = rin => {

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

const castRhoLots = (lhia, lhib) => {

  const lhna = getLhcByIdx(lhia).lhName;
  const lhnb = getLhcByIdx(lhib).lhName;

  const wToday = getWToday();
  const mBrh = wToday.mbp[1];
  const dbp = wToday.dbp;
  const rin = `${mBrh}月${dbp}日${lhna}之${lhnb}卦`;
  return getDelta_1(rin);
}

// Cast eight faced rho lots
const efRhoLots_1 =
  (efda_1, efda_2, efdb_1, efdb_2) => {

  const lhia_1 = (efda_1 % 8) * 8;
  const lhia_2 = efda_2 % 8;
  const lhia_3 = lhia_1 + lhia_2;

  const lhib_1 = (efdb_1 % 8) * 8;
  const lhib_2 = efdb_2 % 8;
  const lhib_3 = lhib_1 + lhib_2;

  return castRhoLots(lhia_3, lhib_3);
}

// Eight faced dice results
export const efRhoLots_2 = (efdr) => {

  return efRhoLots_1(...R.split('', efdr));
}
