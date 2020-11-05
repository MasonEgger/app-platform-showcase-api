module.exports = ({ env }) => ({
    url: env("STRAPI_URL"),
    port: env.int("PORT", 1337),
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET"),
        },
    },
});
