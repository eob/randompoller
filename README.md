randompoller
============

Playing with the Component framework..

To Run
------

    $ component install eob/randompoller

Then

   
    var RandomPoller = require('randompoller');
    var rp = new RandomPoller();
    rp.on('BANG', function() {
      alert("Fire!");
    });
