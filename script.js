const vardi = ['Jana Krūmiņa', 'Aivars Radziņš', 'Jānis Bērziņš', 'Elina Bileskalna', 'Laura Priede'];
const balva = ['Dators', 'Telefons', 'Mašīna', 'Televizors'];
const naudaKopa = 12000;

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju

}
let uvaretajs = vardi[rand];
let rindas = document.querySelector('.rindas');
Math.random = Math.random() * 10;
console.log(vardi[rand]);
rindas.innerHTML += ``//pievieno+,lai pieskaitītu nākamo
<tr>