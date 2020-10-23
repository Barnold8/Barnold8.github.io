class eye{
	
	constructor(w,h,xpos,ypos,e_xpos,e_ypos,e_r){
		
		this.e_xpos = e_xpos;
		this.e_ypos = e_ypos;
		this.e_r = e_r;
		
		this.canv = createCanvas(w,h);
		this.canv.position(xpos,ypos);
		this.base_Eye = ellipse(e_xpos,e_ypos,e_r);
		this.pupil;
	}
	
	show(r,l_b,h_b){
		clear();
		let x = mouseX;
		let y = mouseY
		
		let static_eye = ellipse(this.e_xpos,this.e_ypos,this.e_r);
		
		x = map(x,0,1000,l_b,h_b);
		y = map(y,0,1000,l_b,h_b);
		
		
		ellipse(x,y,r);
		

	}
	
	
	
	
}