//promise 1
const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(3000)
    .then(function () {
    console.log("Passou 3 segundos")
})

//new promise
function getTodosOsUsuarios(){
    return new Promise((resolve, reject) => {
        reject(new Error("Não foi possível recuperar a lista de usuarios"))
    })
}

getTodosOsUsuarios()
.catch(err => console.log)

//promise 3
function getTodosUsuarios(){
    return Promise((resolve, reject) => {
        resolve([1, 2, 3])
    })
}

function getUsuarioById(id){
    return Promise((resolve, reject) => {
        resolve({id, nome: 'João da Silva'})
    })
}

getTodosUsuarios()
    .then(ids => getUsuarioById(ids[0]))
    .then(usuario => console.log(usuario)) // {id: 1, nom: João da Silva}