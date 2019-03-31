var rupiah = 10;
var dollarResult = dollarToRupiah(rupiah);
var yenResult = yenToRupiah(rupiah);
var wonResult = wonToRupiah(rupiah);

console.log(dollarResult);
console.log(yenResult);
console.log(wonResult);

function dollarToRupiah(nominal){
	return nominal * 5000; //$1 5000
}
function yenToRupiah(nominal){
	return nominal * 133.56;
}
function wonToRupiah(nominal){
	return nominal * 13.26;
}
