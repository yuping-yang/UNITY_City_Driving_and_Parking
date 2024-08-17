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
//Debug.Log("speed: "+rigidbody.velocity.magnitude); 
//TURN;
WheelFL.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;
WheelFR.steerAngle = Input.GetAxis("Horizontal")*(-3)*Turning;

}
