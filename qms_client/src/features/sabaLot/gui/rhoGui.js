function showCross(cross) {
  const csi = cross.csi;

  function strike(isStrike){
    if(isStrike){
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
          height: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 20,
          height: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 20,
          height: 20 }}>
        </div>
        {strike(cross.isStrike)}

      </div>
    )
  }
  else if(csi == 0){
    return (
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <div style={{
          backgroundColor: 'black',
          width: 50,
          height: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 50,
          height: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'black',
          width: 50,
          height: 20 }}>
        </div>
        <div style={{
          backgroundColor: 'white',
          width: 20,
          height: 20 }}>
        </div>
        {strike(cross.isStrike)}
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

  const renderCrsa = rhoLots.crsa.map(showCross);


  return (
    <div style={{ padding: 40 }}>
      <div>
        {rhoLots.lhna}之{rhoLots.lhnb}
      </div>
      {renderCrsa}
    </div>

  )
}
