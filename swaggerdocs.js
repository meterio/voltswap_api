exports.swaggerDocs = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Voltswap Open Api",
        version: "2.0",
        description:
          "API endpoints for Voltswap Dex in Meter Network",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    
    },
    apis: ["./routes/pairs.routes.js"],
  };