const SwaggerJSDocWebpackPlugin = require("swagger-jsdoc-webpack-plugin");
const SwaggerJsdocSyncWebpackPlugin = require('swagger-jsdoc-sync-webpack-plugin');

module.exports = {
  plugins: [
    new SwaggerJSDocWebpackPlugin({
      swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          title: "Title",
          version: "1.0.0",
          description: "Description",
        },
      },
      apis: ["./src/routes/**/*.js"],
    }),
    new SwaggerJsdocSyncWebpackPlugin({
        // Swagger specification metadata.
        swagger: {
          openapi: '3.0',
          info: {
            title: 'My API',
            version: require('./package.json').version,
            description: '项目api',
          },
        },
  
        // Print the swagger.json readably.
        prettyJson: true,
      })
  ],
};
