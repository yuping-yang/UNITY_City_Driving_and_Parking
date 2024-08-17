#pragma strict
var diren:Transform;
var t=0.0;
function Start () {

}

function Update () {
  t=t+Time.deltaTime;
  if (t>6)
  {
  Instantiate(diren);
  t=t-6;
  }
  }