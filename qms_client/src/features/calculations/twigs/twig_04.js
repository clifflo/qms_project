export const getChbs = tBranch => {

  const tBridx = idxOfBranch(tBranch);
  const moiFn = (movement, elem) => {

    try{
      const chsx = tBridx + movement;
      const chosen = itemOfChosen(chsx);
      return chosen
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Moi function of get the source branch of '
        + 'Chosen of Branch is error.');
    }
  }

  try{
    const result = R.mapObjIndexed(moiFn, cbaml);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get the source branch of '
      + 'Chosen of Branch.');
  }

}

// Chosen Of Branch from source element
// returning target branch as a table
const buildCbtt = () => {

  try{

    const getChbt_c = R.curry(getChbt);

    const mapFn = elem => {
      return R.map(getChbt_c(elem), chosenOrder);
    }

    const result = R.map(mapFn, elemod);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot build Chosen for '
    + 'Branch as a table.');
  }
}

export const cbtt = buildCbtt();

// Chosen Of Branch from target branch returning
// source element as a table
const buildCbst = () => {

  const mapFn = tBranch => {
    const chbs = getChbs(tBranch);
    return {
      tBranch,
      chbs
    }
  }

  try{
    const result = R.map(mapFn, branchOrder);
    return result;
  }
  catch(err){
    throw new Error(
      'Cannot build Chosen Of Branch '
      + 'returning source element as a table.')
  }
}

export const cbst = buildCbst();
