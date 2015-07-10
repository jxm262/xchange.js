xchange.js  [![Build Status](https://travis-ci.org/jxm262/xchange.js.svg?branch=master)](https://travis-ci.org/jxm262/xchange.js)  
==========  

Please be careful, this module is still in the Alpha stage.  

Aggregates different Bitcoin exchanges api's into a convenient wrapper.


To use just import the module and provide your own callback to the ticker function for a given exchange.  

Code example
=======
```  
//Example print the spot price from bitfinex  

var xchange = require('xchange.js');

  
xchange.bitfinex.ticker(function(err, res){
	
	if(err){return err;}
	console.log(res);
	
});
```
  
  
## Contributors


To help make xchange.js better please

- install Node & NPM
- clone the repo
- install dependencies  


```
git clone https://github.com/jxm262/xchange.js.git
cd xchange.js
npm install
```
  
To keep with the latest news on xchange.js development feel free to [participate in the mailing list](https://groups.google.com/forum/#!forum/xchange)
  
## To run tests (using mocha chai)

```
npm test
```  
 
## License
MIT 

Please refer to the LICENSE file for details.
  
About the Project
=================
We're currently in the process of figuring out what should be in the scope of this project and what tasks are being split up.