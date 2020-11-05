module.exports = ({ env }) => ({
    url: env("STRAPI_URL"),
    port: env.int("PORT", 8080),
    admin: {
        url: "admin",
        auth: {
            secret: env("ADMIN_JWT_SECRET"),
        },
    },
});
