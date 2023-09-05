let nomes = ['yujiro', 'baki', 'pickle', 'jack', 'hanayama', 'yuuichirou', 'retsu', 'doppo', 'biscuit', 'musachi'];
let idades = [38, 17, 190000000, 22, 19, undefined, 30, 56, 45, 32];
let cores = ['vermelho', 'azul', 'verde', 'preto', 'azul', 'roxo', 'amarelo', 'rosa', 'marrom', 'violeta'];

console.log(nomes, '\n');
console.log(idades, '\n');
console.log(cores);

idades.splice(2, 1, 190000001);
cores.splice(6, 1, 'dourado');

console.log(nomes, '\n');
console.log(idades, '\n');
console.log(cores);