/* Напишите функциюf(A), которая возвращает наибольшее число одинаковых
подряд стоящих элементов в числовом массиве A.
Пример: f([4,1,7,1,1,1,6]) = 3 */

function CounterOfNears(A){
	var i, j,
	n = A.length,
	counter = 1, max = 0;
	for ( i = 0 ; i < n -1 ; i++){
		for ( j = 1 ; j < n ; j++){
			if ( A[i] == A[j]){
				counter++;
				if (counter > max) max = counter;
			}
			else{
				counter = 0;
			}
		}
	}
return max;
}