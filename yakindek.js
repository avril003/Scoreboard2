const hasill = Array.from(document.getElementsByClassName("hasil"));
let mousedownY;
hasill.forEach((e)=>{
	e.addEventListener('touchstart', event=> {
		touchstartY = event.changedTouches[0].screenY;
	  });
	  e.addEventListener('touchend', event=> {
		if (event.changedTouches[0].screenY > touchStartY) {

			let currentPoint = parseInt(e.innerHTML);
			if (currentPoint > 0) {
			  e.innerHTML = currentPoint - 1;
			}
		  } else {
			let currentPoint = parseInt(e.innerHTML);
			if (currentPoint < 21) {
			  e.innerHTML = currentPoint + 1;
			}
		}
	  });  
	  e.addEventListener('mousedown', event => {
		mousedownY = event.clientY;
	  });
	  e.addEventListener('mouseup', event => {
		mouseupY = event.clientY;
		if (event.clientY > mouseupY) {
		  let currentPoint = parseInt(e.innerHTML);
		  if (currentPoint > 0) {
		e.innerHTML = currentPoint - 1;
	  }
	} else {
	  let currentPoint = parseInt(e.innerHTML);
	  if (currentPoint < 21) {
		e.innerHTML = currentPoint + 1;
	  }
	}
	  });
});