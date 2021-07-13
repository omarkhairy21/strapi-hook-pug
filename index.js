const path = require('path')

const Pug = require('koa-pug')


/**
 * PUG hook 
 */
module.exports = function (strapi) {
  return {
    /**
     *  Default options
    */
    defaults: {
      app: strapi.app,
      viewPath: path.join(strapi.config.appPath, strapi.config.paths.views),
      ext: '.pug',
      debug: true,
      pretty: false,
      compileDebug: true,
      noCache: true,
      locals: {},
      basedir: path.join(strapi.config.appPath, strapi.config.paths.views),
      helperPath: []
    },
     /**
     * Initialize the hook
     */
    initialize () {

      // Force cache mode in production
      if (strapi.config.environment === 'production') {
        strapi.config.hook.settings['strapi-hook-pug'].noCache = false;
      }

      const pug = new Pug(
        Object.assign(this.defaults, strapi.config.hook.settings['strapi-pug'])
      );

      pug.use(strapi.app)
    }
  }
};
