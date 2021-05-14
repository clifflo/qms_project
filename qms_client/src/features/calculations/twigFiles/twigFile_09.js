import {
  getItemByStringFromList
} from './utilityHubCloneOfTwig';

const mapFunctionOfChosenForBranchContext =
  (chosenForBranchEnvelopStartIndex,
  chosenForBranchIndex) => {


}


export const
  mapFunctionOfChosenForBranchFinalEnvelop =
  chosenSourceTwigElementalEnglish => {

  const chosenForBranchRawEnvelop =
    getItemByStringFromList(
      chosenForBranchRawEnvelopSet,
      chosenBranchElementalEnglish,
      'chosenBranchElementalEnglish');

  const { chosenForBranchEnvelopStartIndex } =
    chosenForBranchRawEnvelop

  const loadedMapFunctionOfChosenForBranchContext =
    R.curry(mapFunctionOfChosenForBranchContext)
    (chosenForBranchEnvelopStartIndex);



}
