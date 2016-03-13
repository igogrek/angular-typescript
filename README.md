# angular-typescript

[![Build Status](https://img.shields.io/travis/Igogrek/angular-typescript.svg?style=flat-square)](https://travis-ci.org/Igogrek/angular-typescript)
[![Dependencies](https://img.shields.io/david/Igogrek/angular-typescript.svg?style=flat-square)](https://david-dm.org/igogrek/angular-typescript)
[![Dev Dependencies](https://img.shields.io/david/dev/Igogrek/angular-typescript.svg?style=flat-square)](https://david-dm.org/igogrek/angular-typescript/#info=devDependencies)


Angular typescript starter project

This project is intended to be simple AngularJS + Typescript starter application.

There are plenty of options already available at the moment but most of them either lack features or have quite complex build process.

This project will try to find the middle between build complexity and feature fullness.

##Installation

Run `npm install` to install all of the dependencies.

**node-sass** and **phantomjs** usually fail to install via proxy.
In this case refer to workarounds on corresponding module page 
(can be solved using env variables or run parameters).

##Usage

Run `npm run build` for simple static build

Run `npm run dev-server` for webpack-dev-server

Run `npm run test` to start karma test with jasmine


Pass **-- --production** for minified production build without sourcemaps.

#TODO
  - Autodeploy to heroku or github pages
  - Fix styles and add animations
  - Add fontawesome
  - Write real logic with some unit tests 
