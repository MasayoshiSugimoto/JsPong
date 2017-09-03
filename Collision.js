"use strict";

function Collision(services) {
  this.services = services
}

Collision.prototype.update = function() {
  const gameObjects = this.services.getFactory().getGameObjects()
  let gameObjectIndex1 = 0
  for (; gameObjectIndex1 < gameObjects.length; gameObjectIndex1++) {
    let gameObjectIndex2 = gameObjectIndex1 + 1
    for (; gameObjectIndex2 < gameObjects.length; gameObjectIndex2++) {
      const gameObject1 = gameObjects[gameObjectIndex1] 
      const gameObject2 = gameObjects[gameObjectIndex2] 
      const rectangle1 = gameObject1.getRectangle()
      const rectangle2 = gameObject2.getRectangle()

      //X collision
      const leftRectangle = (rectangle1.getLeft() < rectangle2.getLeft()) ? rectangle1 : rectangle2
      const rightRectangle = (leftRectangle == rectangle1) ? rectangle2 : rectangle1

      let xCollisionVerticesCount = 0
      if (rightRectangle.getRight() <= leftRectangle.getRight()) {
        xCollisionVerticesCount = 2
      }
      else if (rightRectangle.getLeft() <= leftRectangle.getRight()) {
        xCollisionVerticesCount = 1
      }

      //Y collision
      const topRectangle = (rectangle1.getTop() < rectangle2.getTop()) ? rectangle1 : rectangle2
      const bottomRectangle = (topRectangle == rectangle1) ? rectangle2 : rectangle1

      let yCollisionVerticesCount = 0
      if (bottomRectangle.getBottom() <= topRectangle.getBottom()) {
        yCollisionVerticesCount = 2
      }
      else if (bottomRectangle.getTop() <= topRectangle.getBottom()) {
        yCollisionVerticesCount = 1
      }

      if (xCollisionVerticesCount == 0 || yCollisionVerticesCount == 0) { // No collision
        //Do nothing
      }
      else if (xCollisionVerticesCount == yCollisionVerticesCount) { //Corner collision or one rectangle containing the other
        gameObject1.collideX()
        gameObject2.collideX()
        gameObject1.collideY()
        gameObject2.collideY()  
      }
      else if (xCollisionVerticesCount == 1) {
        gameObject1.collideX()
        gameObject2.collideX()
      }
      else if (yCollisionVerticesCount == 1) {
        gameObject1.collideY()
        gameObject2.collideY()
      }
      else {
        throw "INVALID PATH"
      }
    } 
  }
}