import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRcxt1ByLhn } from
  '../calculations/rhoSeries/rhos/rho_03';

export default function RhoGui() {
  return <JSONTree data={getRcxt1ByLhn('謙')}/>
}
