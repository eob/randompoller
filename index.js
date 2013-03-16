
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
    this[key] = Emitter.prototype[key];
  }

  // Now we start emitting random events
  this.startEmittingRandomEvents();
  
};

RandomPoller.prototype.startEmittingRandomEvents = function() {
  var seconds = 5000 * Math.random(); // [0, 5] seconds
  var self = this;
  var callMeBack = function() {
    self.eventTimerFired();
  }
  this.timer_ = setInterval(callMeBack, seconds);
};

RandomPoller.prototype.eventTimerFired = function() {
  this.emit('BANG');
};

RandomPoller.prototype.stopEmittingRandomEvents = function() {
  clearInterval(this.timer_);
  this.timer_ = null;
};
