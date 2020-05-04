# Fastify Mongoose Connection
this package add a db property in fastify object a fastify decorator workks.

### How to install
```bash
npm i fastify-mongoose-connection
```

### How to access connection
```javascript
const fastify = require('fastify')
 
fastify.register(require('fastify-mongoose-connection'), config)
```
this will add a db property to fastify
```javascript
fastify.db.users.find({});
```

### Configuration properties
```javascript
{
    user: 'root', //database user
    password: 'example', // database password
    name: 'test', //database name
    hosts: [{
        host: 'localhost', // host for a database server
        port: 27017, // port of databaser server
    }],
    options: {} // same as mentioned in mongoose documentation
}
```

## License
MIT
