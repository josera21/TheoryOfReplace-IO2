$(document).ready(function() {
	$('#cal').click(function() {
		var I = parseFloat($('#I').val());
		var Co = parseFloat($('#Co').val());
		var Cm = parseFloat($('#Cm').val());
		var K = parseFloat($('#K').val());
		var R = parseFloat($('#r').val());
		var salir = false
		var n = 1
		var acum = 0
		
		var table = $('#table tbody');
		
		while (salir == false) {
			var val_td2 = Math.round(cal_A(Co, Cm, n, K));
			var val_td3 = Math.round(cal_B(Co, R, n));
			var val_td4 = Math.round((val_td2 + val_td3));
			console.log("A: "+ val_td2);
			console.log("B: "+ val_td3);
			console.log("A + B: "+ val_td4);
			
			if (n == 1) {
				var val_td5 = Math.round((I + val_td4) / n);
				acum += val_td4
			}
			else {
				var val_td5 = Math.round((I + val_td4 + acum) / n);
				acum += val_td4;
			}

			if (val_td5 < val_td4) {
				salir = true;
			}
			
			table.append("<tr><td>"+n+"</td><td>"+val_td2+"</td>   <td>"+val_td3+"</td><td>"+val_td4+"</td><td>"+val_td5+"</td></tr>");
			n += 1;
		}
	});
	
	function cal_B(Co, R, n) {
		cal_base = 1/(1+R);
		cal_exp = n - 1;
		cal_interno = Math.pow(cal_base, cal_exp);
		return Co*(1 - cal_interno);
	}

	function cal_A(Co, Cm, n, K) {
		return (Co + Cm)*Math.pow((n+1),K);
	}

	function cal_n(I, Co, Cm, K) {
		return Math.pow(I / (K*(Co + Cm)), (1/(K + 1)));
	}

	function cal_ctp(I, Co, Cm, O, M) {
		var sum = O+M;
		var raiz = Math.sqrt((2*I)*(sum));
		var prom = sum/2;
		var sum_c = Co + Cm;
		return raiz + prom + sum_c;
	}
});