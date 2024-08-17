#pragma strict
var speed=0.0001;
function Start () {
  Destroy(gameObject,9.0);
  
}

function Update () {
transform.Translate(0,0,-0.5*Time.deltaTime*speed);
}

