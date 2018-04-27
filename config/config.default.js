'use strict';

const thrift = require('thrift');

/**
 * egg-thrift default config
 * @member Config#thrift
 * @property {String} SOME_KEY - some description
 */
exports.thrift = {

  app: true,
  agent: false,

  default: {
    timeout: 4000,
    connect_timeout: 4000,
    max_attempts: 10,
    reconnect: false,
    transport: thrift.TFramedTransport,
    protocol: thrift.TBinaryProtocol,
  },

};
