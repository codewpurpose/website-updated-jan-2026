"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import createGlobe from "cobe"

const MARKERS: { location: [number, number]; size: number }[] = [
  // North America
  { location: [37.77, -122.42], size: 0.05 }, // San Francisco
  { location: [40.71, -74.01], size: 0.05 }, // New York
  { location: [41.85, -87.65], size: 0.04 }, // Chicago
  { location: [34.05, -118.24], size: 0.04 }, // Los Angeles
  { location: [43.65, -79.38], size: 0.04 }, // Toronto
  { location: [19.43, -99.13], size: 0.04 }, // Mexico City
  { location: [45.5, -73.57], size: 0.03 }, // Montreal
  { location: [47.61, -122.33], size: 0.03 }, // Seattle
  // South America
  { location: [-23.55, -46.63], size: 0.05 }, // São Paulo
  { location: [-34.6, -58.38], size: 0.04 }, // Buenos Aires
  { location: [4.71, -74.07], size: 0.04 }, // Bogotá
  { location: [-12.05, -77.04], size: 0.03 }, // Lima
  { location: [-33.45, -70.67], size: 0.03 }, // Santiago
  { location: [10.49, -66.88], size: 0.03 }, // Caracas
  // Europe
  { location: [51.51, -0.13], size: 0.05 }, // London
  { location: [48.85, 2.35], size: 0.04 }, // Paris
  { location: [52.52, 13.4], size: 0.04 }, // Berlin
  { location: [40.42, -3.7], size: 0.03 }, // Madrid
  { location: [41.9, 12.5], size: 0.03 }, // Rome
  { location: [52.37, 4.9], size: 0.03 }, // Amsterdam
  { location: [59.33, 18.07], size: 0.03 }, // Stockholm
  { location: [50.06, 19.94], size: 0.03 }, // Kraków
  { location: [50.45, 30.52], size: 0.03 }, // Kyiv
  { location: [38.72, -9.14], size: 0.03 }, // Lisbon
  { location: [55.75, 37.62], size: 0.04 }, // Moscow
  // Africa
  { location: [6.52, 3.38], size: 0.05 }, // Lagos
  { location: [-26.2, 28.04], size: 0.04 }, // Johannesburg
  { location: [-1.29, 36.82], size: 0.04 }, // Nairobi
  { location: [30.06, 31.25], size: 0.04 }, // Cairo
  { location: [5.56, -0.2], size: 0.03 }, // Accra
  { location: [9.02, 38.75], size: 0.03 }, // Addis Ababa
  { location: [-4.32, 15.32], size: 0.03 }, // Kinshasa
  // Middle East
  { location: [25.2, 55.27], size: 0.04 }, // Dubai
  { location: [24.69, 46.72], size: 0.03 }, // Riyadh
  { location: [31.77, 35.22], size: 0.03 }, // Jerusalem
  { location: [41.01, 28.98], size: 0.04 }, // Istanbul
  { location: [33.34, 44.4], size: 0.03 }, // Baghdad
  // Asia
  { location: [28.61, 77.21], size: 0.05 }, // New Delhi
  { location: [19.07, 72.88], size: 0.05 }, // Mumbai
  { location: [12.97, 77.59], size: 0.04 }, // Bangalore
  { location: [22.57, 88.36], size: 0.04 }, // Kolkata
  { location: [39.91, 116.39], size: 0.05 }, // Beijing
  { location: [31.22, 121.46], size: 0.05 }, // Shanghai
  { location: [35.69, 139.69], size: 0.05 }, // Tokyo
  { location: [37.57, 126.98], size: 0.04 }, // Seoul
  { location: [-6.21, 106.85], size: 0.04 }, // Jakarta
  { location: [14.6, 120.98], size: 0.04 }, // Manila
  { location: [21.03, 105.85], size: 0.03 }, // Hanoi
  { location: [3.14, 101.69], size: 0.03 }, // Kuala Lumpur
  { location: [33.72, 73.04], size: 0.04 }, // Islamabad
  { location: [23.72, 90.41], size: 0.04 }, // Dhaka
  { location: [6.93, 79.84], size: 0.03 }, // Colombo
  { location: [27.7, 85.31], size: 0.03 }, // Kathmandu
  // Oceania
  { location: [-33.87, 151.21], size: 0.04 }, // Sydney
  { location: [-36.86, 174.77], size: 0.03 }, // Auckland
]

/** ~9k samples: much lighter GPU load than 20k with minimal visual difference */
const MAP_SAMPLES = 9000

function GlobeCanvas({ widthCss }: { widthCss: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phiRef = useRef(0)
  const widthRef = useRef(widthCss)

  useEffect(() => {
    widthRef.current = widthCss
  }, [widthCss])

  useEffect(() => {
    if (!canvasRef.current) return
    let phi = phiRef.current
    let globe: ReturnType<typeof createGlobe>

    const canvas = canvasRef.current
    const dpr = Math.min(window.devicePixelRatio, widthCss > 520 ? 1.5 : 2)

    globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: widthCss * dpr,
      height: widthCss * dpr,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.4,
      mapSamples: MAP_SAMPLES,
      mapBrightness: 5.5,
      baseColor: [0.97, 0.95, 0.92],
      markerColor: [0.11, 0.17, 0.23],
      glowColor: [0.97, 0.95, 0.92],
      markers: MARKERS,
      onRender(state) {
        if (!pointerInteracting.current) {
          phi += 0.004
        }
        state.phi = phi + pointerInteractionMovement.current
        state.width = widthRef.current * dpr
        state.height = widthRef.current * dpr
        phiRef.current = phi
      },
    })

    canvas.style.width = `${widthCss}px`
    canvas.style.height = `${widthCss}px`

    return () => globe.destroy()
  }, [widthCss])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: widthCss, height: widthCss, cursor: "grab" }}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current
        ;(e.target as HTMLCanvasElement).style.cursor = "grabbing"
      }}
      onPointerUp={() => {
        pointerInteracting.current = null
        ;(canvasRef.current as HTMLCanvasElement).style.cursor = "grab"
      }}
      onPointerOut={() => {
        pointerInteracting.current = null
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current
          pointerInteractionMovement.current = delta * 0.01
        }
      }}
    />
  )
}

export function SpinningGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [size, setSize] = useState(600)
  const resizeDebounce = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const measure = useCallback(() => {
    const w = Math.min(window.innerWidth * 0.9, 680)
    setSize(w)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { rootMargin: "120px", threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    measure()
    const onResize = () => {
      if (resizeDebounce.current) clearTimeout(resizeDebounce.current)
      resizeDebounce.current = setTimeout(measure, 120)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("resize", onResize)
      if (resizeDebounce.current) clearTimeout(resizeDebounce.current)
    }
  }, [measure])

  return (
    <div
      ref={containerRef}
      className="flex min-h-[min(90vw,680px)] w-full items-center justify-center"
      aria-hidden={!inView}
    >
      {inView ? <GlobeCanvas widthCss={size} /> : <div style={{ width: size, height: size }} className="rounded-full bg-[#EBE5E0]" />}
    </div>
  )
}
