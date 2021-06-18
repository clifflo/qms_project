import * as RA from 'ramda-adjunct'
import {
  sigmaBrakeContextSubset_01
} from './sigmaBrakeFile_01';
import {
  sigmaBrakeContextSubset_02
} from './sigmaBrakeFile_02';
import {
  sigmaBrakeContextSubset_03
} from './sigmaBrakeFile_03';
import {
  sigmaBrakeContextSubset_04
} from './sigmaBrakeFile_04';
import {
  sigmaBrakeContextSubset_05
} from './sigmaBrakeFile_05';
import {
  sigmaBrakeContextSubset_06
} from './sigmaBrakeFile_06';
import {
  sigmaBrakeContextSubset_07
} from './sigmaBrakeFile_07';
import {
  sigmaBrakeContextSubset_08
} from './sigmaBrakeFile_08';
import {
  sigmaBrakeContextSubset_09
} from './sigmaBrakeFile_09';
import {
  sigmaBrakeContextSubset_10
} from './sigmaBrakeFile_10';
import {
  sigmaBrakeContextSubset_11
} from './sigmaBrakeFile_11';
import {
  sigmaBrakeContextSubset_12
} from './sigmaBrakeFile_12';
import {
  sigmaBrakeContextSubset_13
} from './sigmaBrakeFile_13';

export const sigmaBrakeTotalSet =
  RA.concatAll([
    sigmaBrakeContextSubset_01,
    sigmaBrakeContextSubset_02,
    sigmaBrakeContextSubset_03,
    sigmaBrakeContextSubset_04,
    sigmaBrakeContextSubset_05,
    sigmaBrakeContextSubset_06,
    sigmaBrakeContextSubset_07,
    sigmaBrakeContextSubset_08,
    sigmaBrakeContextSubset_09,
    sigmaBrakeContextSubset_10,
    sigmaBrakeContextSubset_11,
    sigmaBrakeContextSubset_12,
    sigmaBrakeContextSubset_13
  ]);
