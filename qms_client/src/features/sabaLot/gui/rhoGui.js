function showCross(cross) {
  const csi = cross.csi;
  if(csi == 1){
    return (
      <div>
        11111111
      </div>
    )
  }
  else if(csi == 0){
    return (
      <div>
        --------
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
    <div>
      <div>
        {rhoLots.lhna}之{rhoLots.lhnb}
      </div>
      {renderCrsa}
    </div>

  )
}
