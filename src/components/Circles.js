import React, { useState, useEffect } from "react"
import { getShadesArray } from "../colorFunctions"

const Circle = ({ x, y, dx, dy, radius, color }) => {
  const [position, setPosition] = useState({ x, y })
  const [velocity, setVelocity] = useState({ dx, dy })
  const [classNames, setClassNames] = useState("circle")

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextX = position.x + velocity.dx
      let nextY = position.y + velocity.dy
      let nextXVel = velocity.dx
      let nextYVel = velocity.dy

      if (nextX < radius || nextX > window.innerWidth) {
        // Bounce off left/right edge of page
        nextXVel = -nextXVel
        setClassNames("circle jiggle-tall")
        setTimeout(() => {
          setClassNames("circle")
        }, 500)
      }
      if (nextY < radius + 49 || nextY > window.innerHeight) {
        // Bounce off top/bottom edge of page
        nextYVel = -nextYVel
        setClassNames("circle jiggle-flat")
        setTimeout(() => {
          setClassNames("circle")
        }, 500)
      }

      setVelocity({ dx: nextXVel, dy: nextYVel })
      setPosition({ x: nextX, y: nextY })
    }, 16)

    return () => clearInterval(intervalId)
  }, [
    position.x,
    position.y,
    dx,
    dy,
    radius,
    window.innerWidth,
    window.innerHeight,
  ])

  return (
    <div
      className={classNames}
      style={{
        top: position.y - radius,
        left: position.x - radius,
        backgroundColor: color,
        width: radius,
        height: radius,
      }}
    />
  )
}

const BALL_COUNT = 20
const RADIUS = 25
const SPEED = 10

const Circles = () => {
  const [circles, setCircles] = useState([])

  useEffect(() => {
    const newCircles = Array.from({ length: BALL_COUNT }).map(() => {
      const randColor = 60 + Math.floor(Math.random() * 100)
      const randGrayColor = `rgb(${randColor},${randColor},${randColor})`
      const circleColors = getShadesArray("#CF729C")
      return {
        x: Math.random() * (window.innerWidth - 2 * RADIUS + 40),
        y: Math.random() * (window.innerHeight - 2 * RADIUS + 69),
        dx: Math.random() * SPEED - SPEED / 2,
        dy: Math.random() * SPEED - SPEED / 2,
        radius: RADIUS + Math.random() * 25,
        color: circleColors[Math.floor(Math.random() * circleColors.length)],
      }
    })
    setCircles(newCircles)
  }, [])

  return (
    <div className="container">
      {circles.map((circle, index) => (
        <Circle
          key={index}
          x={circle.x}
          y={circle.y}
          dx={circle.dx}
          dy={circle.dy}
          radius={circle.radius}
          color={circle.color}
        />
      ))}
    </div>
  )
}

export default Circles
