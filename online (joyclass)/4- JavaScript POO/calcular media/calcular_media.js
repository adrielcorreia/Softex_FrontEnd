n1 = parseFloat(prompt('Digite sua primeira nota: '));
n2 = parseFloat(prompt('Digite sua segunda nota: '));
n3 = parseFloat(prompt('Digite sua terceira nota: '));
media = ((n1+n2+n3)/3).toFixed(1);

console.log(`Sua média final: ${media}`);