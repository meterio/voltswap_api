
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


const port = 4000;
app.listen(port,'192.168.0.3', () => {
    console.log(`App running on post ${port}`);
})


