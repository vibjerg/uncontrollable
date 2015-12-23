'use strict';

/**
 *
 * @param canvas
 * @constructor
 */
export default function DrawingApp(canvas) {
  console.log(canvas);
  const context = canvas.getContext("2d");
  const offset = canvas.getBoundingClientRect();
  let isDrawing = false;
  let lastPosition = null;

  function start(eventPosition) {
    isDrawing = true;
    lastPosition = calculatePosition(eventPosition);
  }

  function draw(eventPosition) {
    const position = calculatePosition(eventPosition);
    if (!isDrawing) {
      return;
    }
    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = "#000";
    context.lineWidth = "10px";
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(position.x, position.y);
    context.stroke();
    lastPosition = position;
  }

  function stop() {
    isDrawing = false;
  }

  function calculatePosition(position) {
    return {
      x : position.x - offset.left,
      y : position.y - offset.top
    }
  }

  return {start, stop, draw};
}