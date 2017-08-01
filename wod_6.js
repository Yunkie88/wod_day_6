var n = 240;
function lateRide(n){
	var time = '';
	var counter = 0;
	var hour = Math.floor(n/60);
	var minutes = n % 60;	
	if(minutes < 10){
		minutes = '0' + minutes.toString();
	}
	if(hour < 10) {
		time += '0'
		time += hour.toString() + ':';
		time += minutes;
	} else {	
		time += hour.toString() + ':';
		time += minutes;	
	}
	newTime = time.replace(/\D/g,'').split('');
	for(i=0; i<newTime.length; i++){
		counter += parseInt(newTime[i])
	}
	return counter
}

console.log(lateRide(n));