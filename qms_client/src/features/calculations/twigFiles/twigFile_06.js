export const getTwigTrunkContextByIndex =
  twigTrunkIndex => {

  try{
    checkNilWithNumber(
      twigTrunkIndex, 'Twig trunk index');

    return getCyclicItemFromList(
      twigTrunkContextSet,
      twigTrunkIndex,
      'twigTrunkIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig trunk context by index.');
  }
}

export const getTwigTrunkContextByChinese =
  twigTrunkChinese => {

  try{

    checkNilWithString(
      twigTrunkChinese,
      'Twig trunk chinese');

    const twigTrunkContext = getItemByStringFromList(
      twigTrunkContextSet,
      twigTrunkChinese,
      'twigTrunkChinese');

    if(R.isNil(twigTrunkContext)){
      throw new Error(
        twigTrunkChinese + ' '
        + 'is not a valid twig trunk chinese.');
    }

    return twigTrunkContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig trunk context by chinese.');
  }
}
