const vardi = ['Jana Krūmiņa', 'Aivars Radziņš', 'Jānis Bērziņš', 'Elina Bileskalna', 'Laura Priede'];
const balva = ['Dators', 'Telefons', 'Mašīna', 'Televizors','Ledusskapis'];
const naudaKopa = 100000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju
    let uzvaretajs = vardi[rand];
    rindas.innerHTML +=
        <tr>
            <td>${i + 1}</td>
            <td>${uzvaretajs}</td>
            <td>${laimesti}</td>
            let uzvaretajs = vardi[rand];
        </tr>//izvada vairakas rindas
}
rindas.innerHTML += ``//pievieno+,lai pieskaitītu nākamo




