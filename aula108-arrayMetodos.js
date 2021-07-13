const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento no início
console.log(pilotos)

// splice pode adicionar e remover elementos 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do índice 2, exclua 0 elementos e adicione os novos que forem passados
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos) // a partir do índice 3 exclua 1 elemento

const algunspilotos1 = pilotos.slice(2) // novo array
console.log(algunspilotos1) // a partir do índice 2 cria um novo array

const algunspilotos2 = pilotos.slice(1, 4) // a partir do índice 1 cria um novo array excluindo o 4 
console.log(algunspilotos2)