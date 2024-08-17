#pragma strict
// parking
var a=0;
var b=0;
var c=0;
var d=0;
var p=0;
var p1=0;
var p2=0;

var livesImage:Texture[];
var livesImagegray:Texture[];
static var lives:int=3;

function OnTriggerEnter(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=1;
Debug.Log("pf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");

}
if (other.transform.tag=="pb") 
{
b=1;
Debug.Log("pb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pl") 
{
c=1;
Debug.Log("pl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pr") 
{
d=1;
Debug.Log("pr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc") 
{
p=1;
Debug.Log("pcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
//if(a==0&&b==0&&c==0&&d==0&&p1==1&&p2==1)
//{
//Debug.Log("win!");
//Application.LoadLevel("start");
//}
}
if(other.transform.tag!="pc"&&other.transform.tag!="pf"&&other.transform.tag!="pb"&&other.transform.tag!="pl"&&other.transform.tag!="pr"&&other.transform.tag!="pc1"&&other.transform.tag!="pc2"){
lives--;
}
if(lives<1){
Application.LoadLevel("city1_lose");
}
}


function OnTriggerExit(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=0;
Debug.Log("upf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pb") 
{
b=0;
Debug.Log("upb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pl") 
{
c=0;
Debug.Log("upl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pr") 
{
d=0;
Debug.Log("upr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc") 
{
p=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city1_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city1_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city1_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city1_onestar");
}
}


function OnGUI(){
GUI.skin.label.fontSize=15;
GUI.Label(new Rect(5,1,50,40)," energy: " );
if(lives==3){
for(var i:int=0;i<3;i++)
GUI.DrawTexture(new Rect(55+i*35,12,35,30),livesImage[i]);
}
if(lives==2){
for(var j:int=0;j<2;j++){
GUI.DrawTexture(new Rect(55+j*35,12,35,30),livesImage[j]);
}
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==1){
GUI.DrawTexture(new Rect(55,12,35,30),livesImage[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==0){
GUI.DrawTexture(new Rect(55,12,35,30),livesImagegray[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
}
/*function update(){
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
{
Debug.Log("win!");
Application.LoadLevel("start");
}
}


if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");
*/


#pragma strict
var a=0;
var b=0;
var c=0;
var d=0;
var p=0;
var p1=0;
var p2=0;

var livesImage:Texture[];
var livesImagegray:Texture[];
static var lives:int=3;

function OnTriggerEnter(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=1;
Debug.Log("pf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");

}
if (other.transform.tag=="pb") 
{
b=1;
Debug.Log("pb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pl") 
{
c=1;
Debug.Log("pl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pr") 
{
d=1;
Debug.Log("pr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc") 
{
p=1;
Debug.Log("pcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
//if(a==0&&b==0&&c==0&&d==0&&p1==1&&p2==1)
//{
//Debug.Log("win!");
//Application.LoadLevel("start");
//}
}
if(other.transform.tag!="pc"&&other.transform.tag!="pf"&&other.transform.tag!="pb"&&other.transform.tag!="pl"&&other.transform.tag!="pr"&&other.transform.tag!="pc1"&&other.transform.tag!="pc2"){
lives--;
}
if(lives<1){
Application.LoadLevel("city1_lose");
}
}


function OnTriggerExit(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=0;
Debug.Log("upf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pb") 
{
b=0;
Debug.Log("upb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pl") 
{
c=0;
Debug.Log("upl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pr") 
{
d=0;
Debug.Log("upr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc") 
{
p=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city2_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city2_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city2_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city2_onestar");
}
}


function OnGUI(){
GUI.skin.label.fontSize=15;
GUI.Label(new Rect(5,1,50,40)," energy: " );
if(lives==3){
for(var i:int=0;i<3;i++)
GUI.DrawTexture(new Rect(55+i*35,12,35,30),livesImage[i]);
}
if(lives==2){
for(var j:int=0;j<2;j++){
GUI.DrawTexture(new Rect(55+j*35,12,35,30),livesImage[j]);
}
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==1){
GUI.DrawTexture(new Rect(55,12,35,30),livesImage[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==0){
GUI.DrawTexture(new Rect(55,12,35,30),livesImagegray[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
}
/*function update(){
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
{
Debug.Log("win!");
Application.LoadLevel("start");
}
}


if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");
*/


#pragma strict
var a=0;
var b=0;
var c=0;
var d=0;
var p=0;
var p1=0;
var p2=0;

var livesImage:Texture[];
var livesImagegray:Texture[];
static var lives:int=3;

function OnTriggerEnter(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=1;
Debug.Log("pf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");

}
if (other.transform.tag=="pb") 
{
b=1;
Debug.Log("pb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pl") 
{
c=1;
Debug.Log("pl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pr") 
{
d=1;
Debug.Log("pr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc") 
{
p=1;
Debug.Log("pcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
//if(a==0&&b==0&&c==0&&d==0&&p1==1&&p2==1)
//{
//Debug.Log("win!");
//Application.LoadLevel("start");
//}
}
if(other.transform.tag!="pc"&&other.transform.tag!="pf"&&other.transform.tag!="pb"&&other.transform.tag!="pl"&&other.transform.tag!="pr"&&other.transform.tag!="pc1"&&other.transform.tag!="pc2"){
lives--;
}
if(lives<1){
Application.LoadLevel("city1_lose");
}
}


function OnTriggerExit(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=0;
Debug.Log("upf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pb") 
{
b=0;
Debug.Log("upb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pl") 
{
c=0;
Debug.Log("upl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pr") 
{
d=0;
Debug.Log("upr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc") 
{
p=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc1") 
{
p1=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
if (other.transform.tag=="pc2") 
{
p2=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==3)
Application.LoadLevel("city3_threestars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==3)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime>=40&&lives==2)
Application.LoadLevel("city3_twostars");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&first_time.lefttime<40&&lives==2)
Application.LoadLevel("city3_onestar");
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1&&lives==1&&first_time.lefttime>0)
Application.LoadLevel("city3_onestar");
}
}


function OnGUI(){
GUI.skin.label.fontSize=15;
GUI.Label(new Rect(5,1,50,40)," energy: " );
if(lives==3){
for(var i:int=0;i<3;i++)
GUI.DrawTexture(new Rect(55+i*35,12,35,30),livesImage[i]);
}
if(lives==2){
for(var j:int=0;j<2;j++){
GUI.DrawTexture(new Rect(55+j*35,12,35,30),livesImage[j]);
}
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==1){
GUI.DrawTexture(new Rect(55,12,35,30),livesImage[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
if(lives==0){
GUI.DrawTexture(new Rect(55,12,35,30),livesImagegray[0]);
GUI.DrawTexture(new Rect(55+35,12,35,30),livesImagegray[1]);
GUI.DrawTexture(new Rect(55+2*35,12,35,30),livesImagegray[2]);
}
}
/*function update(){
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
{
Debug.Log("win!");
Application.LoadLevel("start");
}
}


if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");
*/