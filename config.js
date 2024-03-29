/**
 * This is a sample configuration meant to get users and up running on a local
 * machine.  The configuration will not support multi-process on a single
 * server or multi-server/elastic environments.  For more detailed information
 * on the options provided please refer to the /include/config.js file.
 *
 * The file can be renamed to "config.js" in the same directory as this file
 * and it will be used as the configuration when PencilBlue is started.  If
 * this file is used then there is no need to create a "config.json"
 */

module.exports = {
    "siteName": "MONDO",
    "siteRoot": "http://mondomeds.com/",
    "logging": {
        "level": "info"
    },
    "db": {
        "type": "mongo",
        "servers": [
            "mongodb://mondo_site_db_admin:M0nd0Fab@ds051605.mongolab.com:51605/mondo_site_db"
        ],
        "name": "mondo_site_db",
        "writeConcern": 1
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": true,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": true,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "/plugins/s3-pencilblue/include/s3_media_provider.js",
        "max_upload_size": 6291456
    },
    "cluster": {
        "workers": 1,
        "self_managed": true
    },
    "siteIP": "0.0.0.0"
};

