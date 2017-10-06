Project Description
===================

This project is a starter for a Hackathon.

File Description
================

- Ball.js: Implentation of the ball. It has a rectangle and a velocity has properties.
- Collision.js: Reverse the velocity when the ball is colliding with paddles.
- DrawRectangle.js: Draw a rectangle on the screen.
- Duration.js: Representation of a duration. Provide some unit conversions.
- Factory.js: Provide constructors to create many objects.
- Field.js: Maintain the paddles and the ball inside the field.
- GameLoop.js: Main function called for every game update. Update the controls, game objects, collision and draw the screen
- GameScreen.js: Draw the screen
- JsPong.js: Initiate the game loop
- Keyboard.js: Manage use inputs from the keyboard
- Lazy.js: Lazy constructor. The object will be created on the first call to the _get_ function
- Paddle.js: Implementation of the paddle.
- PaddleController.js: Move the paddle based on the keyboard inputs
- Rectangle.js: Implementation of a rectangle. Contains basic functionality used for collision
- Services.js: Chained initialization of all services
- Vector.js: Simple and limited implementation of 2D vectors. Can add, substract and scale.
- index.html: Html page to launch the game.

Flow
====

First, JsPong starts the game by creating the services and setting the _onload_ function. The _PongLoop_ function will then be called 60 times per seconds. The _PongLoop_ call the _GameLoop.update_ function. The following actions are executed in sequence:

# Update the paddle position based on keyboard inputs
# Update the game objects (paddle/ball) based on time. The ball will move in the direction of the velocity
# Detect collision, reverse the velocity of the ball if needed
# Make sure that the game objects are contained in the field and do not go out
# Draw the screen
