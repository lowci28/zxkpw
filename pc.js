function hideplayer(){
  var system = {};  
  var p = navigator.platform;  
  var u = navigator.userAgent;  

  system.win = p.indexOf("Win") == 0;  
  system.mac = p.indexOf("Mac") == 0;  
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
  if (system.win || system.mac || system.xll) {
      if (u.indexOf('Windows Phone') > -1) {

      }else {  
          $('.player').html('<img src="https://ae01.alicdn.com/kf/HTB1f6xDSIbpK1RjSZFyq6x_qFXaV.jpg" height="450px" width="100%" />');
      }  
  }  
	var hh =1;
	var a = 2;
	var cc = 3;
}
hideplayer();
