$(document).ready(function() {
	$('#cal').click(function() {
		$('#n').html("");
		$('#ctp').html("");

		var I = parseFloat($('#I').val());
		var Co = parseFloat($('#Co').val());
		var Cm = parseFloat($('#Cm').val());
		var O = parseFloat($('#O').val());
		var M = parseFloat($('#M').val());
		
		// Calculando n*
		var n_optimo = Math.round(cal_n(I, O, M)*100) / 100
		// Calculando CTP*
		var ctp_optimo = cal_ctp(I, Co, Cm, O, M);
		
		$('#n').append("n* = "+ n_optimo + " años")
		$('#ctp').append("ctp* = "+ ctp_optimo + " $/año")
	});

	function cal_n(I, O, M) {
		return Math.sqrt((2*I) / (O + M));
	}

	function cal_ctp(I, Co, Cm, O, M) {
		var sum = O+M;
		var raiz = Math.sqrt((2*I)*(sum));
		var prom = sum/2;
		var sum_c = Co + Cm;
		return raiz + prom + sum_c;
	}
});