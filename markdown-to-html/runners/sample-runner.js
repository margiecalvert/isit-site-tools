/**
 * Created by charlie on 2/18/16.
 *
 * How to create markdown files
 */

const createMarkdown = require('../private/create-markdown');
const config = require('mcalvert-isit-code').elfConfig;
config.useLocalConfig = true;

function runConfig(user, siteDirsOffset, useLocalConfig) {
    'use strict';
    return new Promise(function(resolve, reject) {
        if (typeof useLocalConfig !== 'undefined') {
            config.useLocalConfig = useLocalConfig;
        }
        config.loadAsync()
            .then(function(configuration) {
                createMarkdown(configuration['users'][user], siteDirsOffset)
                    .then(resolve)
                    .catch(reject)
            })
            .catch(function(err) {
                throw err
            })
    });
}

module.exports = runConfig;
