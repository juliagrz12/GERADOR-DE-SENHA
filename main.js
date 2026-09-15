const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 1;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABEGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnoprtuvwyz';
const numeros = '0123456789';
const simbolos= '!@%*?#';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('checkbox');
const focaSenha = document.querySelector('forca');

botoes[0].onlick = diminuiTamanho;
botoes[1].onlick = aumentaTamanho;
function diminuiTamanho(){
    if (tamanhoSenha> 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function diminuiTamanho(){
    if(tamanhoSenha,20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
for(i=0;<checkbox.lenght;i++){
    checkbox[i].onlick = geraSenha;
}
geraSenha();
function geraSenha(){
}
geraSenha();
function geraSenha(){
    let alfabeto = ''}
    if(checkbox[0].checked){
        alfabeto= alfabeto + letrasMaiusculas;

    }
    if(checkbox[1].checked){

    }
    if(checkbox[2].checked){

    }
    if(checkbox[3].checked){

    }
    let senha= '';
    for(let i=0; i,tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.lenght;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio]
    }    
campoSenha.value = senha;
classificaSenha