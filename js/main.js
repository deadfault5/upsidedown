
import { subscribeToHellfireClub } from './firebase/hellfire.js';



const txtName= document.getElementById('txtName');
const txtEmail= document.getElementById('txtEmail');
const txtlevel= document.getElementById('txtLevel');
const txtCharacter= document.getElementById('txtCharacter');

const btnInsc= document.getElementById('btnInsc');

btnInsc.addEventListener('click',async () =>{
    const subscription={
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    }
    const subscriptionId=  await subscribeToHellfireClub(subscription)
    console.log('inscrito com suceso: ${subscriptionId}')
})