// JavaScript Document

 
var poweradd = 0;

var TableData = 0;

function addunitHQ() {
	

	var model = document.getElementById('HQrost').insertRow(0);
	if (document.getElementById('HQDropDownList').value == 2){
		poweradd = poweradd + 10;
		document.getElementById('total').innerHTML = poweradd + " Power Level" ;
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Captain-General Trajann Valoris";
		power.innerHTML = "Power Level: 10";
		del.innerHTML = "<button onclick='deleteRowHQ(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
		
		
		
	}
	else if(document.getElementById('HQDropDownList').value == 3){
		
			poweradd = poweradd + 8;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
			var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Shield-Captain in Allarus Terminator Armour";
		power.innerHTML = "Power Level: 8";
		del.innerHTML = "<button onclick='deleteRowHQ(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
			}
		else if(document.getElementById('HQDropDownList').value == 4){
		
			poweradd = poweradd + 9;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Shield-Captain on DawnEagle Jetbike";
		power.innerHTML = "Power Level: 9";
		del.innerHTML = "<button onclick='deleteRowHQ(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
			
			}
	
	else {
	
		poweradd = poweradd + 7;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
			var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Shield-Captain";
		power.innerHTML = "Power Level: 7";
		del.innerHTML = "<button onclick='deleteRowHQ(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
			}
	return poweradd + " Power Level";
	}


	


function addunitTR() {
		var model = document.getElementById('TRrost').insertRow(0);
	if (document.getElementById('TRDropDownList').value == 6){
		poweradd = poweradd + 7;
		document.getElementById('total').innerHTML = poweradd + " Power Level" ;
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Custodian Guard";
		power.innerHTML = "Power Level: 7";
		del.innerHTML = "<button onclick='deleteRowTR(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
		
	}
	

	return poweradd + " Power Level";
}




function addunitELT() {
	

	var model = document.getElementById('ELTrost').insertRow(0);
	if (document.getElementById('ELTDropDownList').value == 7){
		poweradd = poweradd + 13;
		document.getElementById('total').innerHTML = poweradd + " Power Level" ;
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Allarus Custodians";
		power.innerHTML = "Power Level: 13";
		del.innerHTML = "<button onclick='deleteRowELT(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
		
		
	}
	else if(document.getElementById('ELTDropDownList').value == 8){
			poweradd = poweradd + 10;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Custodian Wardens";
		power.innerHTML = "Power Level: 10";
		del.innerHTML = "<button onclick='deleteRowELT(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
		
			}
		else if(document.getElementById('ELTDropDownList').value == 9){
			poweradd = poweradd + 10;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Venerable Conteptor Dreadnought";
		power.innerHTML = "Power Level: 10";
		del.innerHTML = "<button onclick='deleteRowELT(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
			}
	else if(document.getElementById('ELTDropDownList').value == 10){
			poweradd = poweradd + 7;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Vexilus Praetor in Allarus Terminator Armor";
		power.innerHTML = "Power Level: 7";
		del.innerHTML = "<button onclick='deleteRowELT(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
			}
	else {
		poweradd = poweradd + 6;
		document.getElementById('total').innerHTML = poweradd + " Power Level";
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Vexilus Praetor";
		power.innerHTML = "Power Level: 6";
		del.innerHTML = "<button onclick='deleteRowELT(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
	}
	
		


	return poweradd + " Power Level";
}

function addunitFA() {
		var model = document.getElementById('FArost').insertRow(0);
	if (document.getElementById('FADropDownList').value == 12){
		poweradd = poweradd + 15;
		document.getElementById('total').innerHTML = poweradd + " Power Level" ;
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Vertus Praetors";
		power.innerHTML = "Power Level: 15";
		del.innerHTML = "<button onclick='deleteRowFA(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
	}

	return poweradd + " Power Level";
}
function addunitHS() {
		var model = document.getElementById('HSrost').insertRow(0);
	if (document.getElementById('HSDropDownList').value == 13){
		poweradd = poweradd + 21;
		document.getElementById('total').innerHTML = poweradd + " Power Level" ;
		var name = model.insertCell(0);
		var power = model.insertCell(1);
		var del = model.insertCell(2);
		name.innerHTML = "Venerable Land Raider";
		power.innerHTML = "Power Level: 21";
		del.innerHTML = "<button onclick='deleteRowHS(this)' style ='display:right;margin:right;' id = 'Delete' value='Delete	'> Delete</button> <br>";
		
	}


	return poweradd + " Power Level";
}

function save(){
	
	saveHQ();
	saveTR();
	saveELT();
	saveFA();
	saveHS();
}

function saveHQ(){
	
	var myTableArrayHQ = [];

$("table#HQrost tr").each(function() {
    var arrayOfThisRow = [];
    var tableDataHQ = $(this).find('td');
    if (tableDataHQ.length > 0) {
        tableDataHQ.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArrayHQ.push(arrayOfThisRow);
    }
	
	var myJSONHQ = JSON.stringify(myTableArrayHQ);
	dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (x in myObj) {
            
        }
       
    }
};
xmlhttp.open("POST", "save.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
});


}

function saveTR(){
	
	var myTableArrayTR = [];

$("table#TRrost tr").each(function() {
    var arrayOfThisRow = [];
    var tableDataTR = $(this).find('td');
    if (tableDataTR.length > 0) {
        tableDataTR.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArrayTR.push(arrayOfThisRow);
    }
	
var myJSONTR = JSON.stringify(myTableArrayTR);
	return myJSONTR	;
});


}

function saveELT(){
	
	var myTableArrayELT = [];

$("table#ELTrost tr").each(function() {
    var arrayOfThisRow = [];
    var tableDataELT = $(this).find('td');
    if (tableDataELT.length > 0) {
        tableDataELT.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArrayELT.push(arrayOfThisRow);
    }
	var myJSONELT = JSON.stringify(myTableArrayELT);
	return myJSONELT	;
});


}
function saveFA(){
	
	var myTableArrayFA = [];

$("table#FArost tr").each(function() {
    var arrayOfThisRow = [];
    var tableDataFA = $(this).find('td');
    if (tableDataFA.length > 0) {
        tableDataFA.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArrayFA.push(arrayOfThisRow);
    }
	
	var myJSONFA = JSON.stringify(myTableArrayFA);
	return myJSONFA	;
});


}

function saveHS(){
	
	var myTableArrayHS = [];

$("table#HSrost tr").each(function() {
    var arrayOfThisRow = [];
    var tableDataHS = $(this).find('td');
    if (tableDataHS.length > 0) {
        tableDataHS.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArrayHS.push(arrayOfThisRow);
    }
	var myJSONHS = JSON.stringify(myTableArrayHS);
	return myJSONHS	;
	
});


}

function deleteRowHQ(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("HQrost").deleteRow(i);
}
function deleteRowTR(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("TRrost").deleteRow(i);
}
function deleteRowELT(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("ELTrost").deleteRow(i);
}
function deleteRowFA(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("FArost").deleteRow(i);
}
function deleteRowHS(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("HSrost").deleteRow(i);
}
