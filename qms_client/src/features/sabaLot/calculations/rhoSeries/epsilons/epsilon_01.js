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

  const esfnct =
    '卦若無財及財落空其中之一也會導致一切營謀不堪許';

  const escont = '卦若無財及落空,一切營謀不堪許';

  const esbkn = '闡奧歌章';
  const eschn = '求財買賣章';
  const escnid = 'eps-0102';
  const esfnpt = '卦若無財';

  return {
    metesco,
    escnid,
    esfnpt,
    escont,
    esfnct,
    esbkn,
    eschn
  }
}

export const eps0103 = rhocxt => {

  const wodltqc = R.find(
    R.equals(rpcmi['dlt-qc']),
    rhhfs);

  const metesco = !R.isNil(wodltqc);

  const esfnct =
    '卦若無財及財落空其中之一也會導致一切營謀不堪許';

  const escont = '卦若無財及落空,一切營謀不堪許';

  const esbkn = '闡奧歌章';
  const eschn = '求財買賣章';
  const escnid = 'eps-0103';
  const esfnpt = '卦若財落空';

  return {
    metesco,
    escnid,
    esfnpt,
    escont,
    esfnct,
    esbkn,
    eschn
  }
}
