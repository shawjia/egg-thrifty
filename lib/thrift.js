'use strict';

const assert = require('assert');
const thrift = require('thrift');

module.exports = app => {
  app.addSingleton('thrift', createClient);
};

function connect(config, app, result) {
  app.coreLogger.info('[egg-thrift] connecting %s:%s', config.host, config.port);

  const { host, port, ...connectOptions } = config;
  const conn = thrift.createConnection(host, port, {
    ...connectOptions,
    debug: app.config.env !== 'prod',
  });
  const client = thrift.createClient(require(config.genjs), conn);

  conn.on('error', err => {
    app.coreLogger.error(err);
  });

  conn.on('connect', () => {
    app.coreLogger.info('[egg-thrift] connected %s:%s', host, port);
  });

  // if close, reconnect
  conn.on('close', () => {
    if (!config.reconnect) return;

    app.coreLogger.info('[egg-thrift] reconnecting %s:%s', host, port);

    connect(config, app, result);
  });

  result.conn = conn;
  result.client = client;

  return result;
}

function createClient(config, app) {
  assert(config.host && config.port && config.genjs,
    `[egg-thrift] 'host: ${config.host}', 'port: ${config.port}', genjs are required on config`);

  const result = {};

  connect(config, app, result);

  return result;
}

