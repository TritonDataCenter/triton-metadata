/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var bunyan = require('bunyan');

var Agent = require('../lib/agent');

var log = bunyan.createLogger({
    name: 'metadata',
    level: 'debug',
    serializers: bunyan.stdSerializers
});

var options = { log: log };
var agent = new Agent(options);

// Call .start() from a setImmediate callback to work around OS-5140
// and test that the theory presented in that ticket to explain the crash
// in uv__platform_init is actually valid.
setImmediate(function _startAgent() {
    agent.start();

    setTimeout(process.exit, 120000);
});

process.on('exit', function () {
    log.info('Agent exiting');
    agent.stop();
});
