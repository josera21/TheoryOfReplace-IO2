$(document).ready(function() {
	$('#cal').click(function() {
		$('#N').html("");

		var I = parseFloat($('#I').val());
		var Co = parseFloat($('#Co').val());
		var Cm = parseFloat($('#Cm').val());
		var K = parseFloat($('#K').val());
		var n = parseFloat($('#n').val());
		
		var n_optimo = Math.round(cal_n(I, Co, Cm, K)*100)/100;
		$('#N').append("n* = "+ n_optimo + " años");
		
		var n_round = Math.round(n_optimo)
		var table = $('#table tbody');

		for (var i = 1; i <= n; i++) {
			var val_td2 = Math.round(cal_I_sobre_n(I,i)*10000) / 10000;
			var val_td3 = Math.round(cal_co_cm_prom(Co, Cm, i, K)*10000) / 10000;
			var val_td4 = Math.round((val_td2 + val_td3)*10000) / 10000;
			
			if (n_round != i) {
				table.append("<tr><td>"+i+"</td><td>"+val_td2+"</td>   <td>"+val_td3+"</td><td>"+val_td4+"</td></tr>");
			}
			else {
				table.append("<tr class="+"table-success"+"><td>"+i+"</td><td>"+val_td2+"</td>   <td>"+val_td3+"</td><td>"+val_td4+"</td></tr>");
			}
		}
	});
	
	function cal_co_cm_prom(Co, Cm, n, K) {
		return (Cm + Co) * (Math.pow(n,K));
	}

	function cal_I_sobre_n(I, n) {
		return (I/n);
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