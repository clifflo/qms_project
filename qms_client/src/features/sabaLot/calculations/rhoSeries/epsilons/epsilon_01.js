import * as R from 'ramda';

export const eps0101 = rhocxt => {

  const findFn = lhcros => {
    const isRqn = lhcros.isRqn;
    const isStriking = lhcros.isString;
    return isRqn && isString;
  }

  const result = R.find(findFn, rhocxt.lhcres);
  const metescn = !R.isNil(result);

  return {
    metesco,
    escnid: 'eps-0101',
    escont: '發動臨身財必取'
  };
}

export const eps0102 = rhocxt => {

  const wodltqc = R.find(
    R.equals(rpcmi('dlt-qc')),
    rhhfs);

  const metesco = !R.isNil(wodltqc);

  return {
    metesco,
    escnid: 'eps-0102',
    escont: '卦若無財及落空',
    esfnct: '卦若無財及（財）落空',
    esfnpt: '卦若無財'
  }
}
