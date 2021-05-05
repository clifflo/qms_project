import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq,
  utPropMap
} from '../../utils/util_04'
import {
  utDictParse,
  utSecondWord
} from '../../utils/util_06';

// Delta focus dictionary list
// [dfccn] is delta focus chinese name
// [dfcsid] is delta focus specification id
// [dfcen] is delta focus short english name
// [dfcen] is delta focus full english name
export const dfcdl = [
  {
    dfccn: '丙兄弟',
    dfcsid: 'dtf-xd',
    rrawf: 'Draw',
    dfcen: 'Delta Brother'
  },
  {
    dfccn: '丙子孫',
    dfcsid: 'dtf-zs',
    rrawf: 'Fruit',
    dfcen: 'Delta Son'
  },
  {
    dfccn: '丙妻財',
    dfcsid: 'dtf-qc',
    rrawf: 'Bank',
    dfcen: 'Delta Money'
  },
  {
    dfccn: '丙父母',
    dfcsid: 'dtf-fm',
    rrawf: 'Seed',
    dfcen: 'Delta Parent'
  },
  {
    dfccn: '丙官鬼',
    dfcsid: 'dtf-gg',
    rrawf: 'Hacker',
    dfcen: 'Delta Ghost'
  }
]

// Delta focus chinese name set
export const dfcns = R.map(
  R.prop('dfccn'), dfcdl);

export const isValidDfccn = dfccn => {
  return R.includes(dfccn, dfcns);
}

// Delta focus english name set
const getDfens = () => {

  try{
    const _dfnns =
      utSecondWord(utPropMap('dfcen', dfcdl));

    return _dfnns;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dfnns].');
  }
}

export const dfnns = getDfens();

export const isValidDfcen = dfcen => {
  return R.includes(dfcen, dfnns);
}

// Get delta focus chinese by rho raw focus
export const getDfcbrf = rrawf => {

  E.cknws(rrawf, 'rrawf');

  try{
    const dfcbrf = utDictParse(
      'rrawf', rrawf, 'dfccn', dfcdl);
    E.cknws(dfcbrf);
    return dfcbrf;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbrf].')
  }

}

// Get delt focus chinese by english name
export const getDfcbe = dfcen => {

  E.cknws(dfcen, 'dfcen');

  if(!isValidDfcen(dfcen)){
    throw new Error(
      `${dfcen} is not a valid [dfcen].`);
  }

  try{
    const dfcbse = utDictParse(
      'dfcen', dfcen, 'dfccn', dfcdl);
    return dfcbse;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbse].');
  }
}
