randompoller
============

Playing with the Component framework..

To Run
------

First install **Component**

    sudo npm install -g component

Then, in your project, install the **Random Poller** component:

    $ component install eob/randompoller

To use it, in your code:
   
    var RandomPoller = require('randompoller');
    var rp = new RandomPoller();
    rp.on('BANG', function() {
      alert("Fire!");
    });

Example, in this directory
--------------------------
