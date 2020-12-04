const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
    const body = request.body

    if(body.password == undefined) {
        return response.status(400).json({ error: 'password missing' })
    }

    if(body.password.length < 4) {
        return response.status(400).json({ error: 'password minimum length 4 characters' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User ({
        username: body.username,
        name: body.name,
        email: body.email,
        phone: body.phone,
        passwordHash
    })

    const savedUser = await user.save()
    response.json(savedUser)
})

usersRouter.get('/', async (request,response) => {
const users = await User.find({})
.populate('cars')
response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter