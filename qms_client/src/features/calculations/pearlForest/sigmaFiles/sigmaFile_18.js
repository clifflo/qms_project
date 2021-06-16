import {
  findItemByStringFromList
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfSeason
} from './sigmaMiniHub_02';
import * as R from 'ramda';

const getQuenchedBoltOfSeason =
  (askingSeasonChinese,
  sigmaClutchContextOfSeason) => {

  const quenchedNutOfSeason =
    findItemByStringFromList(
      sigmaClutchContextOfSeason
      .sigmaBoltContextSetOfSeason,
      askingSeasonChinese,
      'sigmaSourceNutOfSeason');

  const {
    sigmaBrakeName,
    sigmaBrakeTopics,
    sigmaBrakeDescription
  } = sigmaClutchContextOfSeason;

  const quenchedBoltOfSeason = {
    sigmaBrakeName,
    sigmaBrakeTopics,
    sigmaBrakeDescription,
    quenchedNutOfSeason,
    askingSeasonChinese,
    _type: 'QuenchedBoltOfSeason'
  };

  return quenchedBoltOfSeason;
}

const getQuenchedClutchOfSeason =
  askingSeasonChinese => {

  const loadedGetQuenchedBoltOfSeason =
    R.curry
    (getQuenchedBoltOfSeason)
    (askingSeasonChinese);

  const quenchedBoltSetOfSeason =
    R.map(
      loadedGetQuenchedBoltOfSeason,
      sigmaClutchContextSetOfSeason);

  const quenchedClutchOfSeason = {
    askingSeasonChinese,
    quenchedBoltSetOfSeason
  };

  return quenchedClutchOfSeason;
}

export const quenchedClutchSetOfSeason =
  R.map(
    getQuenchedClutchOfSeason,
    '春夏秋冬');
