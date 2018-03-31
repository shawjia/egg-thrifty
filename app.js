'use strict';

const thrift = require('./lib/thrift');

module.exports = app => {
  if (app.config.thrift.app) thrift(app);
};
