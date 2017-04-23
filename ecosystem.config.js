module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'node-deployment',
      script    : 'app.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '138.68.109.169',
      ref  : 'origin/master',
      repo : 'https://github.com/pavelko1608/node-deployment.git',
      path : '~/node-deployment',
      'post-deploy' : 'nvm install && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
