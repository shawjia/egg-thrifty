# egg-thrifty

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-thrifty.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-thrifty
[travis-image]: https://img.shields.io/travis/shawjia/egg-thrifty.svg?style=flat-square
[travis-url]: https://travis-ci.org/shawjia/egg-thrifty
[codecov-image]: https://img.shields.io/codecov/c/github/shawjia/egg-thrifty.svg?style=flat-square
[codecov-url]: https://codecov.io/github/shawjia/egg-thrifty?branch=master
[david-image]: https://img.shields.io/david/shawjia/egg-thrifty.svg?style=flat-square
[david-url]: https://david-dm.org/shawjia/egg-thrifty
[snyk-image]: https://snyk.io/test/npm/egg-thrifty/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-thrifty
[download-image]: https://img.shields.io/npm/dm/egg-thrifty.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-thrifty

<!--
Description here.
-->

## Install

```bash
$ npm i egg-thrifty --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.thrift = {
  enable: true,
  package: 'egg-thrifty',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
const thrift = require('thrift');

exports.thrift = {

  app: true,
  agent: false,

  default: {
    timeout: 4000,
    connect_timeout: 800,
    max_attempts: 10,
    transport: thrift.TFramedTransport,
    protocol: thrift.TBinaryProtocol,
  },

};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// config.js

config.thrift = {
  clients: {
    test: {
      host: 'localhost',
      port: 1111,
      genjs: path.join(appInfo.baseDir, 'path/to/ThriftService.js'),
    },
  },
};

// service/test.js
'use strict';

const { Service } = require('egg');

class TestService extends Service {

  doSth() {
    const client = this.app.thrift.get('test');

    client.doSth(null, (err, data) => {

    });
  }

}

module.exports = SubscribeService;


```


## License

[MIT](LICENSE)
