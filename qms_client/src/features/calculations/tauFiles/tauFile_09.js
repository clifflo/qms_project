import * as R from 'ramda';
import { DateTime } from 'luxon';
import {
  getLuxonCarFromTauGlobalMonthContext
} from './tauFile_07';

const tauDateMatchInTauGlobalMonthContext_2 =
  (sourceDateInIso,
  targetTauGlobalMonthContext_2) => {

  const sourceLuxonCar =
    DateTime.fromISO(sourceDateInIso);

  const targetLuxonCar =
    getLuxonCarFromTauGlobalMonthContext()

}

export const getTauDateContextFromIso =
  dateInIso => {




}
