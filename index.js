const passwordBox= document.getElementById("password");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnstuvwxyz";
const num = "0123456789";
const symbol = "!@$%^&*()_+{}|:?><";

const allchar = upperCase + lowercase + num + symbol;

function createPassword(){
    let Genpassword = "";
    Genpassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    Genpassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    Genpassword += num[Math.floor(Math.random() * num.length)];
    Genpassword += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > Genpassword.length){
        Genpassword +=allchar[Math.floor(Math.random() * allchar.length)];

    }
    passwordBox.value=Genpassword;
}


