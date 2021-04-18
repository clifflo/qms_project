export const brhami = R.invertObj(brhanm);

// BRFAN means Branch from animal
export const getBrfan = animal => {

  if(R.isNil(animal)){
    throw new Error(
      'Animal should not be nil.');
  }

  if(!RA.isString(animal)){
    throw new Error(
      'Animal must be string.');
  }

  if(isValidAnimal(animal)){
    throw new Error(
      `${animal} is not a valid animal.`);
  }

  const branch = brhanm[animal];
  return branch;
}

export const getBrfmn = month => {

    if(R.isNil(animal)){
      throw new Error(
        'Month should not be nil.');
    }

    if(!RA.isString(animal)){
      throw new Error(
        'Month must be string.');
    }

    if(isValidAnimal(animal)){
      throw new Error(
        `${month} is not a valid month.`);
    }

    const branch = brhanm[];
    return branch;
}
