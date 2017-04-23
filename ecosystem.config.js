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
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

   
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
      path : '/home/deploy/node-production',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
    
  }
};
