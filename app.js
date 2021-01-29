const app = require('express')();
const sjd = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Quick Shipping NodeJS APIs',
        version: '1.0.0',
        description:
            'APIs de NodeJS de Quick Shipping.',
    },
    servers: [
        {
            url: 'https://node.qs.gt',
            description: 'Servidor de produccion.'
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./qs-apis.yaml']
}

const swaggerSpec = sjd(options)

app.use(swaggerui.serve, swaggerui.setup(swaggerSpec));

app.listen(3000);