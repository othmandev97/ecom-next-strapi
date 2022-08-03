module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c97ee22dc17a77b6f656707be3ee9045'),
  },
});
