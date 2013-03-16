
/**
 * Module dependencies.
 */

var Emitter = require('emitter');

/**
 * Expose `RandomPoller`.
 */

module.exports = RandomPoller;

/**
 * Initialize a new `RandomPoller`.
 *
 * @api public
 */

function RandomPoller() {

  // Mix the Emitter functionality into the Random Poller
  // This enables calles to listen to us with 
  // var rp = new RandomPoller();
  // rp.on('eventName', function() {...})
  for (var key in Emitter.prototype) {
    this.key = Emitter.prototype.key;
  }

  // Now we start emitting random events
  this.startEmittingRandomEvents();
  
};

RandomPoller.prototype.startEmittingRandomEvents = function() {
  var seconds = 5000 * Math.random(); // [0, 5] seconds
  this.timer_ = window.setInterval(this.eventTimerFired, seconds);
};

RandomPoller.prototype.eventTimerFired = function() {
  this.emit('BANG');
};

RandomPoller.prototype.stopEmittingRandomEvents = function() {
  window.clearInterval(this.timer_);
  this.timer_ = null;
};
