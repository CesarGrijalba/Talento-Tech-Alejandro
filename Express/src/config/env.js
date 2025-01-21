import env from 'dotenv'
import envar from 'env-var'

env.config()

// require ('dotenv').config()
// const {get} = require ('env-var')

//envs es un objeto
export const envs = {
    PORT: envar.get ('PORT').required().asPortNumber(),
    PUBLIC_PATH: envar.get ('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }