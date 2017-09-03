"use strict";

function Lazy(factory) {
  this.factory = factory
  this.instance = null
}

Lazy.prototype.get = function() {
  if (this.instance == null) {
    this.instance = this.factory()
  }
  return this.instance
}