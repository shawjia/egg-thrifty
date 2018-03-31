'use strict';

const thrift = require('./lib/thrift');

module.exports = agent => {
  if (agent.config.thrift.agent) thrift(agent);
};
