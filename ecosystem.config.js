module.exports = {
  apps: [
    {
      name: 'app1',
      script: './index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      env: {
        PORT: 5000,
      },
    },
    {
      name: 'app2',
      script: './index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      env: {
        PORT: 3000,
      },
    },
  ],
};
