# total.js × bunyan

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### for use the release.js with bunyan, same as `$ node release.js | bunyan`
    $ npm start 
  |
### for use the debug.js with bunyan, same as `$ node debug.js | bunyan`
    $ npm run debug 
  |
### for use the bunyan filtering, mode with code {"mode"= "code"}. same as `$ node debug.js | bunyan -c 'this.mode==\"code\"'`
    $ npm run code
  |
### for use the bunyan filtering, mode with http {"mode": "http"}. same as `$ node debug.js | bunyan -c 'this.mode==\"http\"'`
    $ npm run http
  |
### for use the standard code style with auto fix. same as `standard --fix` 
    $ npm test
  |
## run test the api
    $ npm install
    $ npm start       # ... for release mode
    $ npm run debug   # ... for debug mode
    # open chrome then goto http://127.0.0.1:8000
    # you can find the log file in ./logs floder (in release mode)
    # and also you can see the log warning/error in the terminal
## good to know
- use key/value ('log': production|developement) in the config file (config or config-debug) determine what bunyan config to load.
- the api log contain http request / respone's body and header infomation