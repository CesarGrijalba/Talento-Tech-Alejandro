const {envs} = require('./config/env')
const {iniciarServidor} = require ('./server/server')

//funcion anonima asincrona

const main = () => {
    iniciarServidor({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

( async () => {
    main()
})()

