import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

// [wbdfc] is wheat bowl delta focus chinese
// [chdfc] is cheese delta focus chinese
// [clbpm] is cross list by focus movement
export const getClbfm =
  (wbdfc, chdfc, slcrl) => {

  const mapFn = lhcdwi => {

    // Iso downward index cross list
    const idicl = utFilterByPropEq(
      'lhcdwi', lhcdwi, slcrl);

    if(idicl.length == 1){
      return null;
    }
    else if(idicl.length == 2){

      // Wheat bowl iso downward index cross
      const wbics = utFindByPropTrue(
        'isWbocr', idicl);

      const chics = utFindByPropFalse(
        'isWbocr', idicl);

      E.cknwo('wbics', wbics);
      E.cknwo('chics', chics);

      // Is wheat bowl match the requied focus
      const isWbmfc = wbics.dfccn == wbdfc;
      const isChmfc = chics.dfccn == chdfc;

      // Is matching focus movement
      const isMfcm = isWbmfc && isChmfc;
      if(isMfcm){
        return { wbics, chics };
      }
      else {
        return null;
      }
    }
    else {
      throw new Error(
        'It must be at least one cross'
        + 'matched for various [lhcdwi].');
    }
  }

  try{
    const clbfm = R.compose(
      RA.compact,
      R.map(mapFn))
    (R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [clbfm].');
  }
}

// [clbwd] is cross list by delta word. So it would
// define various kind of english wordings and
// getting the respective cross list.
export const getClbdw = (dltwd, slcrl) => {

  
}
