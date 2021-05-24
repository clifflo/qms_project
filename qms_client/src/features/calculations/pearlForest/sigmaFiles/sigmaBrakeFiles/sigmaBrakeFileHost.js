import * as RA from 'ramda-adjunct'
import {
  sigmaBrakeSubset_01
} from './sigmaBrakeFile_01';
import {
  sigmaBrakeSubset_02
} from './sigmaBrakeFile_02';
import {
  sigmaBrakeSubset_03
} from './sigmaBrakeFile_03';
import {
  sigmaBrakeSubset_04
} from './sigmaBrakeFile_04';
import {
  sigmaBrakeSubset_05
} from './sigmaBrakeFile_05';
import {
  sigmaBrakeSubset_06
} from './sigmaBrakeFile_06';
import {
  sigmaBrakeSubset_07
} from './sigmaBrakeFile_07';
import {
  sigmaBrakeSubset_08
} from './sigmaBrakeFile_08';
import {
  sigmaBrakeSubset_09
} from './sigmaBrakeFile_09';
import {
  sigmaBrakeSubset_10
} from './sigmaBrakeFile_10';
import {
  sigmaBrakeSubset_11
} from './sigmaBrakeFile_11';
import {
  sigmaBrakeSubset_12
} from './sigmaBrakeFile_12';
import {
  sigmaBrakeSubset_13
} from './sigmaBrakeFile_13';

export const sigmaBrakeSet =
  RA.concatAll([
    sigmaBrakeSubset_01,
    sigmaBrakeSubset_02,
    sigmaBrakeSubset_03,
    sigmaBrakeSubset_04,
    sigmaBrakeSubset_05,
    sigmaBrakeSubset_06,
    sigmaBrakeSubset_07,
    sigmaBrakeSubset_08,
    sigmaBrakeSubset_09,
    sigmaBrakeSubset_10,
    sigmaBrakeSubset_11,
    sigmaBrakeSubset_12,
    sigmaBrakeSubset_13
  ]);
