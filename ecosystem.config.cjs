module.exports = {
  apps: [{
    name: 'leonstrakos',
    script: './server.js',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'production',
      PORT: 8005,
      HOST: '127.0.0.1',
    },
  }],
};
