Feature('Liking Rests');

Before((I) => {
   I.amOnPage('/#/like');
 });
 
Scenario('showing empty liked rests', (I) => {
   I.seeElement('#query');
   // I.seeElement('.query'); // membuat test menjadi gagal
   I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
 });
 
 Scenario('liking one resto', (I) => {
   I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');
 
   I.amOnPage('/');
   // … kita akan mengisi uji coba berikutnya …
 });
 