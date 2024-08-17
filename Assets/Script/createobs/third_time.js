#pragma strict
var timenumber:Texture[];
static var lefttime:int=140;
var time:float=0;

function Update () {
time+=Time.deltaTime;
if(time>1)
{
lefttime--;
time=0;
}
if(lefttime<1.0)
{
lefttime=0;
Application.LoadLevel("city3_lose");
}
}

function OnGUI(){
GUI.Label(new Rect(160,1,65,40)," remaining time: " );
for(var i:int=0;i<lefttime.ToString().Length;i++){
GUI.DrawTexture(new Rect(222+i*20,6,35,40),timenumber[System.Int32.Parse((lefttime.ToString())[i].ToString())]);
}
}