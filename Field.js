"use strict";

function Field(services) {
  this.services = services
}

Field.prototype.update = function() {
  this.services.getFactory().getGameObjects().forEach( (gameObject) => {
    const rectangle = gameObject.getRectangle()
    const fieldSize = this.services.getScreen().getSize()
  
    if (rectangle.getTop() < 0) {
      rectangle.setPosition(new Vector(rectangle.getPosition().x, 0))
      gameObject.collideY()
    }
    if (rectangle.getLeft() < 0) {
      rectangle.setPosition(new Vector(0, rectangle.getPosition().y))    
      gameObject.collideX()
    }
    if (rectangle.getRight() > fieldSize.x) {
      rectangle.setPosition(
        new Vector(fieldSize.x - rectangle.getSize().x, rectangle.getPosition().y))
      gameObject.collideX()
    }
    if (rectangle.getBottom() > fieldSize.y) {
      rectangle.setPosition(
        new Vector(rectangle.getPosition().x, fieldSize.y - rectangle.getSize().y))
      gameObject.collideY()
    }
  } )
}