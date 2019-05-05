const hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'MyComponent.js') {
      const MyComponent = require('./MyComponent.js');
      return MyComponent
    }
    return null;
  },

  port: 8080,
});
