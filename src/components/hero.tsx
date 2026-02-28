"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Cpu, Zap, Shield, TrendingUp, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 200])
  const y2 = useTransform(scrollY, [0, 600], [0, -100])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.95])
  
  const springY = useSpring(y1, { stiffness: 80, damping: 25 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 circuit-grid opacity-40" />
      
      {/* Animated Orbs */}
      <motion.div
        style={{ y: springY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full" />
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-600 to-sky-500 rounded-full" />
      </motion.div>

      {/* Rotating Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="w-[700px] h-[700px] border border-sky-500/10 rounded-full" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-sky-400/10 rounded-full" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              "--tx": `${(Math.random() - 0.5) * 100}px`,
              "--ty": `${-Math.random() * 200}px`,
              "--duration": `${Math.random() * 6 + 4}s`,
              "--delay": `${Math.random() * 3}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Mouse Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 40%)`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block max-w-3xl"
          >
            <img
              src="/images/tribecode-logo.svg"
              alt="TribeCode AI - Intelligent Solutions"
              className="w-full h-auto max-w-2xl mx-auto"
              width="800"
              height="200"
              priority
            />
          </motion.div>
        </motion.div>
        </motion.div>

        {/* H1 - Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight font-display"
        >
          Automate the
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
              Impossible
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 blur-md"
              initial={{ scaleX: 0 }}
              animate={loaded ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
          <br />
          Into Reality
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI voice agents that never sleep. Automation that scales infinitely.
          <span className="text-slate-300 font-medium"> Built for businesses ready to dominate.</span>
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Zap, text: "24/7 AI Coverage", color: "from-yellow-500 to-orange-500" },
            { icon: Cpu, text: "Neural Networks", color: "from-sky-500 to-cyan-500" },
            { icon: Shield, text: "Enterprise Security", color: "from-emerald-500 to-green-500" },
            { icon: TrendingUp, text: "Measurable ROI", color: "from-purple-500 to-pink-500" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 transition-all"
            >
              <div className={`w-5 h-5 rounded bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full px-10 h-14 text-lg font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 shimmer-overlay" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 h-14 text-lg font-semibold border-slate-700 hover:bg-slate-800/50 group"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Play className="w-5 h-5 mr-2 fill-current" />
            See How It Works
          </Button>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="pt-12 border-t border-slate-800/50"
        >
          <p className="text-slate-500 text-sm mb-6 font-mono">TRUSTED BY INNOVATORS ACROSS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["Santa Cruz", "Silicon Valley", "San Francisco", "Los Angeles", "New York"].map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 10 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 glow-text-primary" />
                <span className="text-slate-400 font-medium">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-sky-500/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-gradient-to-b from-sky-400 to-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
