
const ropldOrder_1 = '青龍,朱雀,勾陳,螣蛇,白虎,玄武';

const ropldOrder_2 =
  R.compose(
    R.reverse,
    R.map(s => '丙' + s),
    R.split(','))
  (ropldOrder_1);

// Rho Paladin Start Position
const getRpspSet = () => {

  const mapFn = i => {

    const rpldKey = R.reverse([0,0,1,1,2,3,4,4,5,5]);
    const trunk = itemOfTrunk(i);

    const rpdix = ropldKey[i];
    const rpld = ropldOrder_2[rpdix];
    return {
      trunk,
      rpdix,
      rpld
    }
  }

  try{
    return R.map(mapFn, R.range(0, 10));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho Paladin '
      + 'Start Position Set.'
    )
  }
}

const rpspSet = getRpspSet();
