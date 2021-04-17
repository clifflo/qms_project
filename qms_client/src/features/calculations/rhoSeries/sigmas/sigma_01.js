import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { regexGen_7 } from '../../utils/util_4';

export const sigmas_1 = {
  '天元祿': '甲祿在寅，乙祿在卯，丙戊祿在巳，丁己祿居午，庚祿居申，辛祿在酉，壬祿在亥，癸祿在子。',
  '驛馬': '寅午戌居申，申子辰居寅，巳酉丑在亥，亥卯未在巳。',
  '天乙貴人': '甲戊兼牛羊，乙己鼠猴鄉，丙丁豬雞位，壬癸兔蛇藏，庚辛逢馬虎，此是貴人方。',
  '福星貴人': '甲虎乙豬牛，丙同犬鼠遊，丁雞戊猴走，己羊庚馬頭，辛蛇癸愛兔，壬日占龍樓。',
  '天德貴人--凡占諸事化凶成吉': '正丁、二申宮，三壬、四辛同，五亥、六甲上，七癸、八寅逢，九丙、十歸乙，子己、丑庚中。',
  '月德貴人--凡有所占，轉凶為吉': '寅午戌月丙，申子辰月壬，亥卯未月甲，巳酉丑月庚。',
  '月德合--百事遇之，和合大吉': '寅午戌月辛，申子辰月丁，亥卯未月己，巳酉丑月乙。',
  '天福貴人--占身命遇之，一生福祿綿綿': '甲愛金雞、乙愛猴，丁豬、丙鼠、己寅頭，戊尋玉兔、庚壬馬，辛癸逢蛇福自優。',
  '天喜--百事有喜，占胎，尤要看之': '春戌、夏丑為天喜，秋辰、冬未二三指，世上遇此必懽忻，百事得之皆有理。'
}

export const getSigmas_2 = () => {
  const sigprs = R.toPairs(sigmas_1);

  const mapFn = sigpr => {
    const result = regexGen_7(sigpr[1]);
    const origin = R.split('--', sigpr[0]);
    const oldObj = {
      name: origin[0],
      explanation: origin[1],
      result
    }

    const newObj = R.reject(
      R.anyPass([R.isEmpty, R.isNil]))
      (oldObj);

    return newObj;
  }


  return R.map(mapFn, sigprs);
}

export const sigmas_2 = getSigmas_2();
