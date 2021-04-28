
const getFlushSet = () => {

  const mapFn = (i) => {
    const sBranch = itemobr(i);
    const tBranch = itemobr(i + 6);
    return [sBranch, tBranch];
  }

  return R.map(mapFn, R.range(0, 6));
}

export const flushSet = getFlushSet();

export const getFlhop =
  getBbdro_c(flushSet);

const getHitSet = () => {

  const mapFn = (i) => {
    const sBranch = itemobr(i);
    const tBranch = itemobr(7 - i);
    return [sBranch, tBranch];
  }

  return R.map(mapFn, R.range(0, 6));
}

export const hitSet = getHitSet();

export const getHitop =
  getBbdro_c(hitSet);

const getPauseSet = () => {

  const mapFn = i => {

    const sBridx = i * 2;
    const tBridx = sBridx - 3;

    const sBranch = itemobr(sBridx);
    const tBranch = itemobr(tBridx);
    return [sBranch, tBranch];
  }

  try{
    return R.map(mapFn, R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get bow hunter set.'
    )
  }

}

export const pauseSet = getPauseSet();

export const getPseop =
  getBbdro_c(pauseSet);
