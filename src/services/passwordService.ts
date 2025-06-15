export default function generatePass() {
    let password:string ='';
    let caracters:string ='qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890!@#$?';
    let passwordLength = 8 ;
    for (let i =0 ; i < passwordLength ; i++ ){
        password += caracters.charAt(Math.floor(Math.random() * caracters.length))
    }

    return password
}