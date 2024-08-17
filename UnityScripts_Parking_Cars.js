#pragma strict
var a=0;
var b=0;
var c=0;
var d=0;
var p=0;
var p1=0;
var p2=0;
function OnTriggerEnter(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=1;
Debug.Log("pf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pb") 
{
b=1;
Debug.Log("pb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pl") 
{
c=1;
Debug.Log("pl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pr") 
{
d=1;
Debug.Log("pr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc1") 
{
p1=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc2") 
{
p2=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc") 
{
p=1;
Debug.Log("pcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

//if(a==0&&b==0&&c==0&&d==0&&p1==1&&p2==1)
//{
//Debug.Log("win!");
//Application.LoadLevel("start");
//}
}
}
function OnTriggerExit(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=0;
Debug.Log("upf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pb") 
{
b=0;
Debug.Log("upb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pl") 
{
c=0;
Debug.Log("upl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pr") 
{
d=0;
Debug.Log("upr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc") 
{
p=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc1") 
{
p1=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc2") 
{
p2=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

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
function OnTriggerEnter(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=1;
Debug.Log("pf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pb") 
{
b=1;
Debug.Log("pb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pl") 
{
c=1;
Debug.Log("pl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pr") 
{
d=1;
Debug.Log("pr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc1") 
{
p1=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc2") 
{
p2=1;
Debug.Log("pc1!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc") 
{
p=1;
Debug.Log("pcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

//if(a==0&&b==0&&c==0&&d==0&&p1==1&&p2==1)
//{
//Debug.Log("win!");
//Application.LoadLevel("start");
//}
}
}
function OnTriggerExit(other:Collider)
{
if (other.transform.tag=="pf") 
{
a=0;
Debug.Log("upf!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pb") 
{
b=0;
Debug.Log("upb!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pl") 
{
c=0;
Debug.Log("upl!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pr") 
{
d=0;
Debug.Log("upr!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc") 
{
p=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc1") 
{
p1=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

}
if (other.transform.tag=="pc2") 
{
p2=0;
Debug.Log("upcenter!"+a+b+c+d+p+p1+p2);
if(a==0&&b==0&&c==0&&d==0&&p==1&&p1==1&&p2==1)
Application.LoadLevel("start");

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