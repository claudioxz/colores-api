// Swagger set up

const express = require('express');
const router = express.Router();

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Colores API",
            version: "0.0.1",
            description: "Api que permite gestionar una lista de colores",
            contact: {
                name: "Claudio Gomez",
                email: "claudio.gomezquidel@gmail.com"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/v1"
            }
        ]
    },
    apis: [
        "./src/models/user.model.js",
        './src/models/color.model.js',
        "./src/routes/auth.route.js",
        "./src/routes/colores.route.js"
    ]
};
const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs, { explorer: true }));

module.exports = router;