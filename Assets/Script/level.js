#pragma strict

function Start () {

}

function Update () {

}

function OnGUI()  
{  
    var groundWidth = 120;  
    var groundHeight = 150;  
      
    var screenWidth = Screen.width;  
    var screenHeight = Screen.height;  
      
    var groupx = (screenWidth - groundWidth) / 2;  
    var groupy = (screenHeight - groundHeight) / 2;  
      
    GUI.BeginGroup(Rect(groupx,groupy,groundWidth,groundHeight));  
    GUI.Box(Rect(0,0,groundWidth,groundHeight),"City driving & parking");  
      
    if(GUI.Button(Rect(10,30,100,30),"level 1"))  
    {  
        Application.LoadLevel(1);  
    }  
    if(GUI.Button(Rect(10,70,100,30),"level 2"))  
    {  
        Application.LoadLevel(2);  
    }  
    if(GUI.Button(Rect(10,110,100,30),"level 3"))  
    {  
        Application.LoadLevel(3);  
    }  
      
    GUI.EndGroup();  
}  