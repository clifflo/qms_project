
export const rpalOrder =
  R.compose(
    R.reverse,
    R.map(s => '丙' + s),
    R.split(','))
  (rpalSce);

// Rho Paladin Start Position
const getRpldSet = () => {

  const mapFn = i => {

    const rpldKey = R.reverse([0,0,1,1,2,3,4,4,5,5]);
    const trunk = itemOfTrunk(i);

    const rpdix = rpldKey[i];
    const rpld = rpalOrder[rpdix];
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
      'Cannot get Paladin Start Position Set.'
    )
  }
}

export const rpldSet = getRpldSet();
