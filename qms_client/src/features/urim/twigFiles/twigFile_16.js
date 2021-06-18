import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigBranchContextByIndex
} from './twigMiniHub_02';

const mapFunctionOfTwigMeetingContext =
  twigMeetingHint => {

    const twigMeetingSecondBranchIndex =
      twigMeetingHint * 3;

    const twigMeetingFirstBranchIndex =
      twigMeetingSecondBranchIndex - 1;

    const twigMeetingThirdBranchIndex =
      twigMeetingSecondBranchIndex - 2;

    const twigMeetingFirstBranchContext =
      getTwigBranchContextByIndex(
        twigMeetingFirstBranchIndex);

    const twigMeetingSecondBranchContext =
      getTwigBranchContextByIndex(
        twigMeetingSecondBranchIndex);

    const twigMeetingThirdBranchContext =
      getTwigBranchContextByIndex(
        twigMeetingThirdBranchIndex);

    const twigMeetingElementalChinese =
      twigMeetingSecondBranchContext
      .twigBranchElementalChinese;

    const twigMeetingElementalEnglish =
      twigMeetingSecondBranchContext
      .twigBranchElementalEnglish;

    const twigMeetingFirstBranchChinese =
      twigMeetingFirstBranchContext
      .twigBranchChinese;

    const twigMeetingSecondBranchChinese =
      twigMeetingSecondBranchContext
      .twigBranchChinese;

    const twigMeetingThirdBranchChinese =
      twigMeetingSecondBranchContext
      .twigBranchChinese;

    const twigMeetingFirstBranchEnglish =
      twigMeetingFirstBranchContext
      .twigBranchEnglish;

    const twigMeetingSecondBranchEnglish =
      twigMeetingSecondBranchContext
      .twigBranchEnglish;

    const twigMeetingThirdBranchEnglish =
      twigMeetingSecondBranchContext
      .twigBranchEnglish;



}
