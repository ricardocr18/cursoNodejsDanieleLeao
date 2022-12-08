
// O REDUCE, reduz o valor realizando uma soma de tudo. Lembrando que o previous (é o valor) e currentValue (é o objeto), o Zero é inicio do contador

const carrinhoDeCompras = [
    {produto: 'Mouse', preco: 600.1},
    {produto: 'Teclado', preco: 120.0},
    {produto: 'Monitor', preco: 1200.2},
    {produto: 'Fone de ouvido', preco: 157.25}
]

const result = carrinhoDeCompras.reduce(
    (previous, currentValue) => previous + currentValue.preco, 0
);

console.log(result)