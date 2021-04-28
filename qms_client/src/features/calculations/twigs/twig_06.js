export const itemOfBtp = idx => {

  if(R.isNil(idx)){
    throw new Error(
      'Betapsi index is nil.'
    )
  }

  if(!RA.isNumber(idx)){
    throw new Error(
      'Betapsi index must be a number.'
    );
  }

  if(idx > 59){
    throw new Error(
      'Betapsi index should not be bigger than 59.'
    )
  }

  if(idx < 0){
    throw new Error(
      'Betapsi index should not be smaller than 0.'
    )
  }

  try{
    const tenthIdx = Math.floor(idx / 10);

    const bplbi = 12 - (tenthIdx * 2);

    // Trunk Index
    const tkidx = idx % 10;
    const trunk = itemotr(tkidx);

    // Branch Index
    const bridx =  bplbi + tkidx;

    const branch = itemobr(bridx);

    return trunk + branch;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get Betapsi item.');
  }


}


// Trunk Small Compound
// 天干五合
const getTkscSet = () => {

  const mapFn = i => {
    const celemIdx = i - 1;
    const celem = itemOfElem(celemIdx);
    const sTrunk = itemotr(i);
    const tTrunk = itemotr(i + 5);

    return {
      trunks: [sTrunk, tTrunk],
      celem
    }
  }

  return R.map(mapFn, R.range(0, 5));
}

export const tkscSet = getTkscSet();
