import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq,
  utPropMap
} from '../../utils/util_04'
import {
  utDictParse
} from '../../utils/util_06';

// Delta focus dictionary list
// [dfccn] is delta focus chinese name
// [dfcsid] is delta focus specification id
// [dfcsen] is delta focus short english name
// [dfcen] is delta focus full english name
export const dfcdl = [
  {
    dfccn: '丙兄弟',
    dfcsid: 'dtf-xd',
    rrawf: 'Draw',
    dfcen: 'Delta brother'
  },
  {
    dfccn: '丙子孫',
    dfcsid: 'dtf-zs',
    rrawf: 'Fruit',
    dfcen: 'Delta son'
  },
  {
    dfccn: '丙妻財',
    dfcsid: 'dtf-qc',
    rrawf: 'Bank',
    dfcen: 'Delta money'
  },
  {
    dfccn: '丙父母',
    dfcsid: 'dtf-fm',
    rrawf: 'Seed',
    dfcen: 'Delta parent'
  },
  {
    dfccn: '丙官鬼',
    dfcsid: 'dtf-gg',
    rrawf: 'Hacker',
    dfcen: 'Delta ghost'
  }
]

// Delta focus chinese name set
export const dfcns = R.map(
  R.prop('dfccn'), dfcdl);

export const isValidDfccn = dfccn => {
  return R.includes(dfccn, dfcns);
}

// Delta focus short english name set
export const dfsens =
  utPropMap('dfcsen', dfcdl);

export const isValidDfcsen = dfcsen => {
  return R.includes(dfcsen, dfsens);
}

// Get delta focus chinese by rho raw focus
export const getDfcbrf = rrawf => {

  E.cknws(rrawf, 'rrawf');

  try{
    const dfcbrf = utDictParse(
      'rrawf', rrawf, 'dfccn', dfcdl);
    E.ckwns(dfcbrf);
    return dfcbrf;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbrf].')
  }

}

// Get delt focus chinese by english name
export const getDfcbse = dfcsen => {

  E.cknws(dfcsen, 'dfcsen');

  if(!isValidDfcsen(dfcsen)){
    throw new Error(
      `${dfcsen} is not a valid [dfcsen].`);
  }

  try{
    const dfcbse = utDictParse(
      'dfcsen', dfcsen, 'dfccn', dfcdl);
    return dfcbse;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbse].');
  }
}
