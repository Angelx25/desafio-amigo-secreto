// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
  let ul = document.getElementById('listaAmigos')
  ul.innerHTML = ''

  const amigo = document.getElementById('amigo').value

  if (amigo === '') {
    alert('Nombre no puede estar vacio')
  } else {
    amigos.push(amigo)
    console.log(amigos)
    document.getElementById('amigo').value = ''

    amigos.forEach(a => {
      let li = document.createElement('li')
      li.textContent = a
      ul.appendChild(li)
    })
  }
}

function sortearAmigo() {
  let ul = document.getElementById('resultado')
  let ulAmigos = document.getElementById('listaAmigos')
  ul.innerHTML = ''

  if (amigos.length === 0) {
    alert('No hay amigos en la lista')
  } else {

    let indice = Math.floor(Math.random() * amigos.length)
    let amigoSeleccionado = amigos[indice]
    console.log(amigoSeleccionado)

    let li = document.createElement('li')
    li.textContent = 'El amigo secreto sorteado es: ' + amigoSeleccionado
    ul.appendChild(li)
    ulAmigos.innerHTML = ''
  }
}