
let sayiTahmini = Number(prompt('1-20 arası bir sayı tahmin ediniz'));
let sayi = Math.floor((Math.random ()*20)+1);
const cevapHakki = 5;

function bul() {

for (let i =0; i< cevapHakki; i++) {


  if (sayiTahmini > sayi) {

    sayiTahmini = Number(prompt('Daha küçük bir sayı deneyin'));
   
}

   else if (sayiTahmini < sayi) {

    sayiTahmini = Number( prompt('Daha büyük bir sayı deneyin.'));
    
   } else {
    
console.log('Tebrikler');
return ;
   }
  
  }
  alert('Tekrar Deneyiniz 😥');
}
bul();


