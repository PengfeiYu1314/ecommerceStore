import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('abc123, 10'),
        isAdmin: true
    },
    {
        name: 'Ray',
        email: 'ray@example.com',
        password: bcrypt.hashSync('abc123, 10')
    },
        
    {
        name: 'kate',
        email: 'kate@example.com',
        password: bcrypt.hashSync('abc123, 10')
        
    }
]

export default users