"use strict";

function Services() {
  this.screen     = new Lazy( () => { return new GameScreen(this) } )
  this.gameLoop   = new Lazy( () => { return new GameLoop(this) } )
  this.factory    = new Lazy( () => { return new Factory(this) } )
  this.keyboard   = new Lazy( () => { return new Keyboard(this) } )
  this.collision  = new Lazy( () => { return new Collision(this) } )

  const paddleSize = new Vector(10.0, 100.0)
  const screenCenterY = (this.getScreen().getSize().y / 2.0) - (paddleSize.y / 2.0)

  this.p1Paddle = this.getFactory().createPaddle(
      Rectangle.zero()
        .setPosition(new Vector(0.0, screenCenterY))
        .setSize(paddleSize))
  this.getFactory().createPaddleController(
      this.p1Paddle, 
      KEYBOARD_KEY_W, 
      KEYBOARD_KEY_S, 
      100 /*Speed in pixels per second*/)

  this.p2Paddle = this.getFactory().createPaddle(
      Rectangle.zero()
        .setPosition(
            this.getScreen()
                .getSize()
                .substract(paddleSize)
                .substract(new Vector(0.0, screenCenterY)))
        .setSize(paddleSize))
  this.getFactory().createPaddleController(
      this.p2Paddle, 
      KEYBOARD_KEY_UP, 
      KEYBOARD_KEY_DOWN, 
      100 /*Speed in pixels per second*/)

  this.ball = this.getFactory().createBall(
      Rectangle.zero()
          .setPosition(this.getScreen().getCenter())
          .setSize(new Vector(10.0, 10.0)))

  this.field = new Field(this)
}

Services.prototype.getKeyboard = function() {
  return this.keyboard.get()
}

Services.prototype.getGameLoop = function() {
  return this.gameLoop.get()
}

//Frame per seconds
Services.prototype.getFrequency = function() {
  return 60
}

Services.prototype.getDocument = function() {
  return document
}

Services.prototype.getWindow = function() {
  return window
}

Services.prototype.getScreen = function() {
  return this.screen.get()
}

Services.prototype.getFactory = function() {
  return this.factory.get()
}

Services.prototype.getBall = function() {
  return this.ball
}

Services.prototype.getField = function() {
  return this.field
}

Services.prototype.getCollision = function() {
  return this.collision.get()
}

Services.prototype.getP1Paddle = function() {
  return this.p1Paddle
}

Services.prototype.getP2Paddle = function() {
  return this.p2Paddle
}