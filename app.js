
const express = require("express")

const swaggerJsdoc = require("swagger-jsdoc")
swaggerUi = require("swagger-ui-express")

const { swaggerDocs } = require('./swaggerdocs')

const pairRoutes = require('./routes/pairs.routes')

const specs = swaggerJsdoc(swaggerDocs);

const app = express()

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);
app.use('/tickers', pairRoutes)
app.get('/', (req, res) => {
    res.send({
        description: 'APIs for voltswap dex',
        available_routes:[
            {
                route:'/tickers',
                description:' Retrieves list of all trading pairs on the exchanges'
            }
        ]
    })
  });


const PORT = 4000
const HOST = '0.0.0.0'
app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`);



