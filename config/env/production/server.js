
    module.exports = ({ env }) => ({
        proxy: true,
        url: env('mt-strapi.pavansprabhu.in'), // Sets the public URL of the application.
        app: { 
          keys: env.array('APP_KEYS')
        },
    });
