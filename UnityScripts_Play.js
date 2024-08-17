#pragma strict

// level
function Start () {}
function Update () {}
function OnGUI()  
{  
    var groundWidth = 120;  
    var groundHeight = 150;  
      
    var screenWidth = Screen.width;  
    var screenHeight = Screen.height;  
      
    var groupx = (screenWidth - groundWidth) / 2;  
    var groupy = (screenHeight - groundHeight) / 2;  
      
    GUI.BeginGroup(Rect(groupx,groupy,groundWidth,groundHeight));  
    GUI.Box(Rect(0,0,groundWidth,groundHeight),"City trip");  
      
    if(GUI.Button(Rect(10,30,100,30),"Level One"))  
    {  
        Application.LoadLevel(1);  
    }  
    if(GUI.Button(Rect(10,70,100,30),"Level Two"))  
    {  
        Application.LoadLevel(2);  
    }  
    if(GUI.Button(Rect(10,110,100,30),"Level Three"))  
    {  
        Application.LoadLevel(3);  
    }  
      
    GUI.EndGroup();  
}  


// truckmove
var WheelFL:WheelCollider;
var WheelFR:WheelCollider;
var WheelRL:WheelCollider;
var WheelRR:WheelCollider;
var upSpeed = 15f;
var maxSpeed = 15;
var Breaking =150f;
var Turning = 8f;
 function Update()
{
 if (Input.GetKey(KeyCode.Space))
{
   WheelRL.brakeTorque = Breaking;
   WheelRR.brakeTorque = Breaking;
}
else{
if(rigidbody.velocity.magnitude <=maxSpeed){
WheelRR.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRL.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRR.brakeTorque = 0;
WheelRL.brakeTorque = 0;
}
else {
   WheelRL.motorTorque = 0;
   WheelRR.motorTorque = 0;
   WheelFR.brakeTorque = 0;
   WheelFL.brakeTorque = 0; 
}
}
//Debug.Log("Speed: "+rigidbody.velocity.magnitude); 
//TURN;
WheelFL.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;
WheelFR.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;

}


// busmove
var WheelFL:WheelCollider;
var WheelFR:WheelCollider;
var WheelRL:WheelCollider;
var WheelRR:WheelCollider;
var upSpeed = 10f;
var maxSpeed = 10f;
var Breaking =100f;
var Turning = 5f;
 function Update()
{
 if (Input.GetKey(KeyCode.Space))
{
   WheelRL.brakeTorque = Breaking;
   WheelRR.brakeTorque = Breaking;
}
else{
if(rigidbody.velocity.magnitude <=maxSpeed){
WheelRR.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRL.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRR.brakeTorque = 0;
WheelRL.brakeTorque = 0;
}
else {
   WheelRL.motorTorque = 0;
   WheelRR.motorTorque = 0;
   WheelFR.brakeTorque = 0;
   WheelFL.brakeTorque = 0; 
}
}
//Debug.Log("Speed: "+rigidbody.velocity.magnitude); 
//TURN;
WheelFL.steerAngle = Input.GetAxis("Horizontal")*(-2)*Turning;
WheelFR.steerAngle = Input.GetAxis("Horizontal")*(-2)*Turning;

}


// carmove
var WheelFL:WheelCollider;
var WheelFR:WheelCollider;
var WheelRL:WheelCollider;
var WheelRR:WheelCollider;
var upSpeed = 20f;
var maxSpeed = 10;
var Breaking =150f;
var Turning = 5f;
 function Update()
{
 if (Input.GetKey(KeyCode.Space))
{
   WheelRL.brakeTorque = Breaking;
   WheelRR.brakeTorque = Breaking;
}
else{
if(rigidbody.velocity.magnitude <=maxSpeed){
WheelRR.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRL.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRR.brakeTorque = 0;
WheelRL.brakeTorque = 0;
}
else {
   WheelRL.motorTorque = 0;
   WheelRR.motorTorque = 0;
   WheelFR.brakeTorque = 0;
   WheelFL.brakeTorque = 0; 
}
}
//Debug.Log("Speed: "+rigidbody.velocity.magnitude); 
//TURN;
WheelFL.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;
WheelFR.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;

}


// Speed up
var WheelFL:WheelCollider;
var WheelFR:WheelCollider;
var WheelRL:WheelCollider;
var WheelRR:WheelCollider;
var upSpeed = 20f;
var maxSpeed = 10;
var Breaking =150f;
var Turning = 5f;
 function Update()
{
 if (Input.GetKey(KeyCode.Space))
{
   WheelRL.brakeTorque = Breaking;
   WheelRR.brakeTorque = Breaking;
}
else{

if(Input.GetKey(KeyCode.M)) 
{
 upSpeed = 55f;
 maxSpeed = 80;	
 Breaking =250f;
 Turning = 5f;
}
if(Input.GetKey(KeyCode.N)) 
{
 upSpeed = 20f;
 maxSpeed = 10;	
 Breaking =150f;
 Turning = 5f;
}
if(rigidbody.velocity.magnitude <=maxSpeed){
WheelRR.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRL.motorTorque = Input.GetAxis("Vertical")*(-2)*upSpeed;
WheelRR.brakeTorque = 0;
WheelRL.brakeTorque = 0;
}
else {
   WheelRL.motorTorque = 0;
   WheelRR.motorTorque = 0;
   WheelFR.brakeTorque = 0;
   WheelFL.brakeTorque = 0; 
}
}
//Debug.Log("Speed: "+rigidbody.velocity.magnitude); 
//TURN;
WheelFL.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;
WheelFR.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;

}


#pragma strict
// back
function Start () {}
function Update () {}
 function OnClick()
    {
        Application.LoadLevel("cj");
    }


#pragma strict
// back1
function Start () {}
function Update () {}
 function OnClick()
    {
        Application.LoadLevel("start");
    }


#pragma strict
// car_level1
function Start () {}
function Update () {}
function OnClick()
    {
        Application.LoadLevel("city1");
    }


#pragma strict
// car1
function Start () {}
function Update () {}
 function OnClick()
    {
        Application.LoadLevel("car1");
    }


#pragma strict
// car2
function Start () {}
function Update () {}
function OnClick()
    {
        Application.LoadLevel("car2");
    }


#pragma strict
// car3
function Start () {}
function Update () {}
function OnClick()
    {
        Application.LoadLevel("car3");
    }


#pragma strict
// city1_Button
function Start () {}
function Update () {}
 function OnClickOne()
    {
        Application.LoadLevel("car1");
    }
     function OnClickTwo()
    {
        Application.LoadLevel("city1");
    }
     function OnClickThree()
    {
        Application.LoadLevel("city2");
    }


#pragma strict
// city2_Button
function Start () {}
function Update () {}
 function OnClickOne()
    {
        Application.LoadLevel("car1");
    }
     function OnClickTwo()
    {
        Application.LoadLevel("city2");
    }
     function OnClickThree()
    {
        Application.LoadLevel("city3");
    }


#pragma strict
// city3_Button
function Start () {}
function Update () {}
 function OnClickOne()
    {
        Application.LoadLevel("car1");
    }
     function OnClickTwo()
    {
        Application.LoadLevel("city3");
    }
     function OnClickThree()
    {
        Application.LoadLevel("city1");
    }








