# Laravel + Vue + Typescript boilerplate

Completely ready to work boilerplate.

### Features includes:
* ESLint + Airbnb config
* Enabled hot-reloading mode with `yarn server`
* On `yarn build` webpack replace default laravel view (*index.blade.php*) by injected and configured HTML with js bundle
* Created simple project structure
* Configured Vuex & Vue-router

### Additional packages included
* [Axios](https://github.com/axios/axios) - http client
* [Axios Token Interceptor](https://github.com/sandrinodimattia/axios-token-interceptor) - just integrate your token to header with 1 row of code
* [lodash](https://github.com/lodash/lodash) - iterating arrays, objects, & strings etc.
* [vue-class-component](https://github.com/vuejs/vue-class-component) - Typescript decorator for class-styled Vue Components
* [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) - additional decorators for Vue components
* [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)- Typescript decorator for class-styled Vuex

### What configurable

All what you want :)\
For example: for configuration default view layout (e.g. set initial state) you can modify *vue/public/index.html* file.

### ToDo:
* Docker HTTPS support
* Optional build to /dist folder
