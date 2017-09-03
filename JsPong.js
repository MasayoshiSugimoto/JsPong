"use strict";

const PongLoop = (services) => {
  const frameTime = Duration.fromFrequency(services.getFrequency())
  setTimeout( 
    () => {
      services.getGameLoop().update(frameTime)
      PongLoop(services)
    },
    frameTime
  )
}
window.onload = () => {
  const services = new Services()
  PongLoop(services)
}