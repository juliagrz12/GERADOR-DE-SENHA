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
