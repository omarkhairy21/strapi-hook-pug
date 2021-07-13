# strapi-hook-pug

Strpi hook allows to use Pug.js(Jade) template engine with custom options

## installation 

```npm i strapi-hook-pug```

## Configuration

In order to config your hook with custom options, you need to edit your ```./config/hook.js``` or ```./config/hook.json``` file in strapi app


```
  ...
  settings: {
    pug: {
      enabled: true,
      layout: false,
      viewExt: '.pug',
      partial: true,
      cache: false,
      debug: false
    }
  }
  ...
```

> Side Note : settings object is required inside config file.

## usage

in your controller use ```ctx.render``` to render a view 

```
module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;
    const post = await strapi.services.post.findOne({ slug });

    return ctx.render('post', { post })
  }
};

```

This will render the ```views/post.pug``` file
