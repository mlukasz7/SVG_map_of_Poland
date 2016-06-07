(function(){
	function createTooltip() {
	    var tekst = this.getAttribute('data-tooltip'); 
	    var tooltip = document.createElement('div'); 
	    var body = document.querySelector('body');

	    tooltip.appendChild(document.createTextNode(tekst));
	    tooltip.id = 'tooltip';
	    tooltip.className = 'tooltip';
	    body.appendChild(tooltip);
	}

	function moveTooltip(e) {
	    var tooltip = document.querySelector('#tooltip');
	    if (tooltip != null) {
	        var x, y;

	        if (e.pageX || e.pageY) {
	            x = e.pageX;
	            y = e.pageY;
	        } else {
	            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }

	        tooltip.style.left = x + 'px';
	        tooltip.style.top = y - tooltip.offsetHeight - 20 + 'px';
	    }
	}

	function deleteTooltip() {
	    var tooltip = document.querySelector('#tooltip');
	    if (tooltip != null) {
	        tooltip.parentNode.removeChild(tooltip);
	    }
	}

	document.addEventListener("DOMContentLoaded", function() {
	    var elements = document.querySelectorAll('.land[data-tooltip]');

	    for (var x=0; x<elements.length; x++) {
	        elements[x].addEventListener('mouseover', createTooltip);
	        elements[x].addEventListener('mousemove', moveTooltip);
	        elements[x].addEventListener('mouseout', deleteTooltip);
	    }
	});

	var lands = $('.land'),
		area = $('#area'),
		people = $('#people'),
		capital = $('#capital'),
		nameLand = $('#nameLand');

	function clearAtrrActive() {
		lands.each(function(){
			$(this).attr('class', 'land');
		});
	}

	lands.each(function(index){
		$(this).click(function(){
			area.html($(this).data('area'));
			people.html($(this).data('people'));
			capital.html($(this).data('capital'));
			nameLand.html($(this).attr('title'));
			clearAtrrActive();
			$(this).attr('class', 'land active');
		});
	});

})();