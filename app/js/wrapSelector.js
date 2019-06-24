jQuery(document).ready(function($) {

	let wrapSelector 	= '<div class="table-responsive"></div>';
	$('.team-box').addClass('table').wrap(wrapSelector);
		
		// function wrappAppend () {
		// 	if ( $('div').is('.table-responsive') ) {
		// 		$('.team-box').addClass('table');
		// 	}
		// }

		// wrappAppend ();

		/*
			! - Скрипт по оборачиванию по селектору
				~ сначала получаем элемент, $('') потом присваиваем к нему класс и методом wrap() оборачиваем все это тем что находится в переменной в 3-ей строке

				с 6 строки начинается второй вариант с проверкой, менее изящный но тоже допустимый.

		*/

});