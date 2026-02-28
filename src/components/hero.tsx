"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Cpu, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const springY = useSpring(y1, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20">
        {/* Grid Pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-50" />
        
        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 circuit-pattern"
        />

        {/* Floating Orbs */}
        <motion.div
          style={{ y: springY }}
          className="absolute top-20 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-500/5 rounded-full"
        />
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/5 rounded-full"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: Math.random() * 1000,
              x: Math.random() * 1000,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000],
              opacity: [0, 0.5, 0],
              scale: [0, Math.random() * 4 + 2, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-sky-400 rounded-full"
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium backdrop-blur-sm"
        >
          <Cpu className="w-4 h-4" />
          <span>Next-Gen AI Automation for Modern Businesses</span>
        </motion.div>

        {/* Main Headline with Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight glow-text"
        >
          Intelligent
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
            Solutions
          </span>
          <br />
          That Scale
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10"
        >
          AI voice agents, intelligent automation, and conversion-focused web experiences.
          Built for businesses ready to dominate their market.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Zap, text: "24/7 AI Coverage" },
            { icon: Cpu, text: "Smart Automation" },
            { icon: Shield, text: "Enterprise-Grade" },
            { icon: Globe, text: "Global Ready" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 backdrop-blur-sm"
            >
              <feature.icon className="w-4 h-4 text-sky-400" />
              <span className="font-medium text-sm">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">
              Start Your Transformation
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Solutions
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-10 border-t border-slate-800/50"
        >
          <p className="text-slate-500 text-sm mb-6">Trusted by innovative businesses across</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 font-semibold text-sm">
            {["Santa Cruz", "Monterey Bay", "San Jose", "San Francisco", "Los Angeles"].map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500/50" />
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-14 rounded-full border-2 border-sky-500/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-sky-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
