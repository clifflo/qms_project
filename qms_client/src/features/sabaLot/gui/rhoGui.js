import * as R from 'ramda';

function showCross(isCrsa, cross) {
  const csi = cross.csi;

  function strike(isStrike){
    if(isStrike && isCrsa){
      return (
        <span style={{ fontSize: 20 }}>
          1
        </span>
      )
    }
  }
  if(csi == 1){
    return (
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <div style={{
          backgroundColor: 'black',
          width: 150,
          height: 30,
          marginRight: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 80,
          height: 30,
          fontSize: 20}}>
            {cross.crbh}{cross.fcn[1]}{cross.fcn[2]}
        </div>
      </div>
    )
  }
  else if(csi == 0){
    return (
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <div style={{
          backgroundColor: 'black',
          width: 50,
          height: 30 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 50,
          height: 30 }}>
        </div>
        <div style={{
          backgroundColor: 'black',
          width: 50,
          height: 30 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 20,
          height: 30 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 80,
          height: 30,
          fontSize: 20}}>
            {cross.crbh}{cross.fcn[1]}{cross.fcn[2]}
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        Error
      </div>
    )
  }
}

export function RhoGui(props){


  const rhoLots = props.rhoLots;
  console.log(rhoLots);

  const showCross_c = R.curry(showCross)

  const renderCrsa = rhoLots.crsa.map(showCross_c(true));
  const renderCrsb = rhoLots.crsb.map(showCross_c(false));

  return (
    <div style={{ padding: 40 }}>
      <div>
        {rhoLots.deMonth}月{rhoLots.deDay}日
      </div>
      <div>
        {rhoLots.lhna}之{rhoLots.lhnb}
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 40 }}>
          {renderCrsa}
        </div>
        <div>{renderCrsb}</div>
      </div>

    </div>

  )
}
