import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq,
  utPropMap
} from '../../utils/util_04'

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
    dfcsen: 'Brother',
    dfcfen: 'Delta brother'
  },
  {
    dfccn: '丙子孫',
    dfcsid: 'dtf-zs',
    rrawf: 'Fruit',
    dfcsen: 'Son',
    dfcfen: 'Delta son'
  },
  {
    dfccn: '丙妻財',
    dfcsid: 'dtf-qc',
    rrawf: 'Bank',
    dfcsen: 'Money',
    dfcfen: 'Delta money'
  },
  {
    dfccn: '丙父母',
    dfcsid: 'dtf-fm',
    rrawf: 'Seed',
    dfcsen: 'Parent',
    dfcfen: 'Delta parent'
  },
  {
    dfccn: '丙官鬼',
    dfcsid: 'dtf-gg',
    rrawf: 'Hacker',
    dfcsen: 'Ghost',
    dfcfen: 'Delta ghost'
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

// Get delta focus dictionary by rho raw focus
export const getDfdbrf = rrawf => {

  E.cknws(rrawf, 'rrawf');

  try{
    const dfdbrf = utFindByPropEq(
      'rrawf', rrawf, dfcdl);
    return dfdbrf;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfdbrf].');
  }
}

// Get delt focus dictionary by chinese name
export const getDfdbcn = dfccn => {

  E.cknws(dfccn, 'dfccn');

  try{
    const dfdbcn = utFindByPropEq(
      'dfccn', dfccn, dfcdl);
    return dfdbcn;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfdbcn].');
  }
}
