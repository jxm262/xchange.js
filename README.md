xchange.js
==========

Bitcoin and Altcoin exchange api


## Working on xchange.js

To help work on xchange.js, you'll need to have Node installed.  
Then clone the repo  
install dependencies  

```
git clone https://github.com/jxm262/xchange.js.git
cd xchange.js
npm install
```

To run , the start script is in the bin/www directory and defaults to the 'node' command.  It's suggested to use [nodemon](https://github.com/remy/nodemon) to make development much much easier.  To use nodemon, install the dependency and replace the start script section of package.json from the 'node' command to 'nodemon' command.


```
//to run app
npm start

//to run tests
mocha test


//if using nodemon
//install dependencies
npm install nodemon

//change package.json from
"start": "node ./bin/www"

//to
"start": "nodemon ./bin/www"
```
  
  
We're currently in the process of figuring out what should be in the scope of this project and what tasks are being split up.  Pleae PM what of the contributors if you'd like to get on the mailing list.
