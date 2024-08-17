#pragma strict
// create
var diren:Transform;
var t=0.0;
function Start () {}
function Update () {
  t=t+Time.deltaTime;
  if (t>6)
  {
  Instantiate(diren);
  t=t-6;
  }
  }


#pragma strict
// bluebus
var speed=5;
function Start () {
  Destroy(gameObject,9.0);  
}

function Update () {
transform.Translate(0,0,0.5*Time.deltaTime*speed);
}


#pragma strict
// yellowcar
var speed=0.0001;
function Start () {
  Destroy(gameObject,9.0);
}

function Update () {
transform.Translate(0,0,-0.5*Time.deltaTime*speed);
}


#pragma strict
// first_time
var timenumber:Texture[];
static var lefttime:int=100;
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
Application.LoadLevel("city1_lose");
}
}

function OnGUI(){
GUI.Label(new Rect(160,1,65,40),"Remaining time: " );
for(var i:int=0;i<lefttime.ToString().Length;i++){
GUI.DrawTexture(new Rect(222+i*20,6,35,40),timenumber[System.Int32.Parse((lefttime.ToString())[i].ToString())]);
}
}


#pragma strict
// second_time
var timenumber:Texture[];
static var lefttime:int=120;
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
Application.LoadLevel("city2_lose");
}
}

function OnGUI(){
GUI.Label(new Rect(160,1,65,40)," Time left: " );
for(var i:int=0;i<lefttime.ToString().Length;i++){
GUI.DrawTexture(new Rect(222+i*20,6,35,40),timenumber[System.Int32.Parse((lefttime.ToString())[i].ToString())]);
}
}


#pragma strict
// third_time
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
GUI.Label(new Rect(160,1,65,40)," Time left: " );
for(var i:int=0;i<lefttime.ToString().Length;i++){
GUI.DrawTexture(new Rect(222+i*20,6,35,40),timenumber[System.Int32.Parse((lefttime.ToString())[i].ToString())]);
}
}