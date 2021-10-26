function getJD(){
const currDate = new Date();
		let d = currDate.getDate();
		let m = currDate.getMonth()+1;
		let y = currDate.getFullYear();

		//Adjusting as per our formula found above
		if (m === 1 || m === 2){
		  y = y-1;
		  m = m + 12;
		}

		//Formula to determine number of new moons Julian dates
		let a   = y/100;
		let b   = a/4;
		let c   = 2-a+b;
		let e   = 365.25 * (y+4716);
		let f   = 30.6001 * (m+1);
		let jd  = c + d + e + f - 1524.5;
        let daysSinceNew  = jd - 2451549.5;
        let newMoons      = daysSinceNew / 29.53;
        newMoons
		let moonFraction  = "0." + newMoons.toString().split(".")[1];
		moonFraction
        //Our final Digit - 29.53 days a moon cycle. 15 is full moon. 0/29.5 is new
		let dayOfCycle    =  moonFraction * 29.53;
        dayOfCycle
        const mod = dayOfCycle%15
        mod
        // console.log(jd-2451549.5)
        return jd 
    }
    getJD();