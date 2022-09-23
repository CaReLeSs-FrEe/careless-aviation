require('../')
const UserLogin = require('./../models/Users.model')

const sampleUserCredentials = [
    { email: 'mejia.alejandro1@outlook.com',
      password: '12345678'
    },
    { email: 'careless-aviation@gmail.com',
      password: '87654321'
    },
    { email: 'careless-avaparts@gmail.com',
      password: 'asdfghjk'
    }
]

UserLogin.insertMany(sampleUserCredentials)
