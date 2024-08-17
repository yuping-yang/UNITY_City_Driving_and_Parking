using UnityEngine;
using System.Collections;

public class start : MonoBehaviour {
	public Animator ani_panel;
	public void panel_in(){
		ani_panel.SetBool ("panel_in", true);
	}
	public void panel_out(){
		ani_panel.SetBool ("panel_in", false);
	}
	public void quit_game(){
		Application.Quit ();
	}
	public void start_game(){
		Application.LoadLevel ("cj");
	}
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
