import React, { useEffect, useRef } from "react"

const CollidingCircles = () => {
  const canvasRef = useRef(null)
  const circles = useRef([
    { x: 100, y: 100, radius: 20, color: "#FFB6C1", dx: 2, dy: 2 },
    { x: 200, y: 200, radius: 25, color: "#FFC0CB", dx: -2, dy: -2 },
    { x: 300, y: 300, radius: 30, color: "#FFA07A", dx: -2, dy: 2 },
    { x: 400, y: 400, radius: 22, color: "#FFB5C5", dx: 3, dy: -3 },
    { x: 500, y: 500, radius: 15, color: "#FFC5BB", dx: 1, dy: -2 },
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.current.forEach((circle, index) => {
        // Move circle
        circle.x += circle.dx
        circle.y += circle.dy

        // Check collisions with other circles
        for (let i = index + 1; i < circles.current.length; i++) {
          const otherCircle = circles.current[i]
          const distance = Math.sqrt(
            Math.pow(otherCircle.x - circle.x, 2) +
              Math.pow(otherCircle.y - circle.y, 2)
          )

          if (distance <= circle.radius + otherCircle.radius) {
            // Calculate collision angles and velocities
            const angle = Math.atan2(
              otherCircle.y - circle.y,
              otherCircle.x - circle.x
            )
            const magnitude1 = Math.sqrt(
              Math.pow(circle.dx, 2) + Math.pow(circle.dy, 2)
            )
            const magnitude2 = Math.sqrt(
              Math.pow(otherCircle.dx, 2) + Math.pow(otherCircle.dy, 2)
            )
            const direction1 = Math.atan2(circle.dy, circle.dx)
            const direction2 = Math.atan2(otherCircle.dy, otherCircle.dx)

            // Apply velocities after collision
            circle.dx = magnitude2 * Math.cos(direction2 - angle)
            circle.dy = magnitude2 * Math.sin(direction2 - angle)
            otherCircle.dx = magnitude1 * Math.cos(direction1 - angle)
            otherCircle.dy = magnitude1 * Math.sin(direction1 - angle)
          }
        }

        // Check collisions with walls
        if (
          circle.x - circle.radius < 0 ||
          circle.x + circle.radius > canvas.width
        ) {
          circle.dx = -circle.dx
        }
        if (
          circle.y - circle.radius < 0 ||
          circle.y + circle.radius > canvas.height
        ) {
          circle.dy = -circle.dy
        }

        // Draw circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
        ctx.fillStyle = circle.color
        ctx.fill()
      })

      // Animate next frame
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ border: "1px solid #000" }}
    />
  )
}

export default CollidingCircles
