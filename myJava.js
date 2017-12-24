(function () {
	window.onload=function(){
		document.getElementById("str").onchange = strChange;
		document.getElementById("perc").onchange = percChange;
		document.getElementById("fort").onchange = fortChange;
		document.getElementById("char").onchange = charChange;
		document.getElementById("intel").onchange = intelChange;
		document.getElementById("dex").onchange = dexChange;
		document.getElementById("luck").onchange = luckChange;
	}
	
	function strChange() {
		var stat = document.getElementById("str").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("strMod").value = strMod;
	}
	
	function percChange() {
		var stat = document.getElementById("perc").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("percMod").value = strMod;
	}
		
	function fortChange() {
		var stat = document.getElementById("fort").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("fortMod").value = strMod;
	}
		
	function charChange() {
		var stat = document.getElementById("char").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("charMod").value = strMod;
	}

	function intelChange() {
		var stat = document.getElementById("intel").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("intelMod").value = strMod;
	}

	function dexChange() {
		var stat = document.getElementById("dex").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("dexMod").value = strMod;
	}

	function luckChange() {
		var stat = document.getElementById("luck").value;
		var strMod = (stat - 5) * 4;
		document.getElementById("luckMod").value = strMod;	
	}
})()