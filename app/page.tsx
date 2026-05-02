"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  Calendar
} from "lucide-react";

const features = [
  {
    title: "Holistic Healing",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    description: "Mind, body & soul healing therapies tailored to you."
  },
  {
    title: "Personalised Care",
    icon: <Heart className="w-6 h-6 text-primary" />,
    description: "Tailored sessions to support your unique journey."
  },
  {
    title: "15+ Years Experience",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    description: "Trusted complementary therapist since 2011."
  },
  {
    title: "Virtual Sessions",
    icon: <Clock className="w-6 h-6 text-primary" />,
    description: "Akashic Records Reading available online."
  }
];

const therapies = [
  { 
    name: "Reiki", 
    icon: "/images/reiki.png",
    subtitle: "Energy Healing",
    description: "Energy healing to restore balance and harmony.",
    fullDescription: "Harness the power of universal life force energy to heal your body, mind, and spirit. Reiki promotes deep relaxation and accelerates natural healing.",
    benefits: ["Stress relief", "Energy balance", "Emotional healing"],
    duration: "60 mins"
  },
  { 
    name: "Reflexology", 
    icon: "/images/reflexology.png",
    subtitle: "Pressure Point Therapy",
    description: "Pressure point therapy for holistic wellness.",
    fullDescription: "Ancient foot and hand therapy that stimulates reflex points to activate your body's natural healing mechanisms.",
    benefits: ["Pain relief", "Improved circulation", "Detoxification"],
    duration: "50 mins"
  },
  { 
    name: "Massage", 
    icon: "/images/massage.png",
    subtitle: "Therapeutic Touch",
    description: "Therapeutic touch to release tension and stress.",
    fullDescription: "Professional therapeutic massage designed to release muscular tension, improve flexibility, and restore vitality.",
    benefits: ["Muscle relaxation", "Tension relief", "Improved mobility"],
    duration: "60 mins"
  },
  { 
    name: "QHHT", 
    subtitle: "Quantum Healing Hypnosis", 
    icon: "/images/qhht.png",
    description: "Deep subconscious exploration and healing.",
    fullDescription: "Access your subconscious mind to uncover root causes of issues and facilitate profound personal transformation and healing.",
    benefits: ["Deep insight", "Root cause healing", "Personal growth"],
    duration: "90 mins"
  },
  {
    name: "Akashic Records",
    subtitle: "Soul-Level Guidance",
    icon: "/images/akashic.png",
    description: "Soul-level insights and cosmic guidance.",
    fullDescription: "Access your soul's wisdom through the Akashic Records for spiritual guidance and life-changing insights. Virtual sessions only.",
    benefits: ["Spiritual clarity", "Life purpose", "Soul guidance"],
    duration: "45 mins",
    isVirtual: true
  }
];

const testimonials = [
  {
    quote: "A deeply calming experience that brought clarity and peace. I felt supported every step of the way. The session opened doors I didn't know existed.",
    author: "Sarah M.",
    role: "Holistic Client"
  },
  {
    quote: "The reiki session was transformative. I left feeling lighter, more grounded, and reconnected with myself. I highly recommend Soul Reflection's services.",
    author: "Emma L.",
    role: "Wellness Enthusiast"
  },
  {
    quote: "After years of tension and stress, I finally found relief through reflexology. The care and attention to detail was remarkable. I'm a regular now!",
    author: "Michael J.",
    role: "Therapeutic Client"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Therapies", href: "#therapies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Navigation - Enhanced Header */}
      <header className="relative left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-primary/10 shadow-sm">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <motion.div 
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Soul Reflection logo"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-serif text-lg leading-tight tracking-wider text-primary font-bold block">
                  SOUL
                </span>
                <span className="font-serif text-sm leading-tight tracking-wider text-primary font-semibold">
                  REFLECTION
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] font-semibold text-charcoal hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-charcoal p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-primary/10 p-6 lg:hidden flex flex-col gap-3 shadow-2xl"
            >
              <div className="space-y-2 mb-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-charcoal hover:text-primary px-4 py-3 rounded-lg hover:bg-primary/5 transition-all block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <motion.a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                className="bg-primary text-white text-center px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                Book a Session
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section 
          id="home"
          className="relative min-h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden"
        >
           {/* Background Image with Enhanced Overlay */}
           <div className="absolute inset-0 z-0">
             <img 
               src="/images/hero-image-t.png" 
               alt="Serene background" 
               className="w-full h-full object-cover"
             />
             {/* Gradient Overlay - White to Blue gradient for better visual appeal */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-blue-300/30 to-blue-500/20" />
             <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 via-white/10 to-blue-400/30" />
           </div>

          {/* Content */}
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
            >
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full px-6 py-3 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-charcoal uppercase tracking-widest">Welcome to Healing</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="heading-primary text-charcoal mb-6 leading-tight drop-shadow-lg"
              >
                Transform Your Mind, <span className="text-primary">Body & Soul</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-charcoal/90 mb-4 leading-relaxed drop-shadow-md font-serif"
              >
                Experience the power of holistic healing through personalized therapy sessions designed for your unique wellness journey.
              </motion.p>

              {/* Quote */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-charcoal/70 mb-10 italic drop-shadow-md font-serif"
              >
                "Your path to inner peace and wellness begins here"
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-4 flex-wrap justify-center md:justify-start"
              >
                <motion.a 
                  href="#therapies"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 group"
                >
                  Explore Therapies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 text-primary px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:bg-white transition-all flex items-center gap-2 group"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </motion.a>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-12 pt-8 border-t border-charcoal/20"
              >
                <p className="text-charcoal/70 text-sm uppercase tracking-widest mb-4">Trusted by hundreds of clients</p>
                <div className="flex items-center justify-center md:justify-start gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <p className="text-xs text-charcoal/60 uppercase">Years Experience</p>
                  </div>
                  <div className="w-px h-12 bg-charcoal/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">5</div>
                    <p className="text-xs text-charcoal/60 uppercase">Therapies</p>
                  </div>
                  <div className="w-px h-12 bg-charcoal/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <p className="text-xs text-charcoal/60 uppercase">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/60 text-xs uppercase tracking-widest">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-gradient-to-br from-white via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Section */}
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img 
                    src="/images/about-icon.png" 
                    alt="Soul Reflection Practitioner" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                className="space-y-10 order-1 lg:order-2"
              >
                {/* Header with Badge */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 w-fit"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Story</span>
                  </motion.div>
                  <h2 className="heading-secondary text-charcoal mb-2">About Soul Reflection</h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-light rounded-full" />
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <p className="text-lg text-slate leading-relaxed font-serif italic">
                    "Your wellness journey is sacred. I'm here to guide you with compassion, expertise, and profound respect for your individual path."
                  </p>
                  
                  <p className="text-base text-slate leading-relaxed">
                    With over <span className="font-bold text-primary">15 years of experience</span> as a trusted complementary therapist, I am deeply passionate 
                    about facilitating self-healing and guiding individuals toward a deeper understanding 
                    of their true essence. My mission is to create transformative experiences that restore balance, 
                    clarity, and vitality to every aspect of your being.
                  </p>

                  <p className="text-base text-slate leading-relaxed">
                    My holistic approach integrates <span className="font-bold text-primary">traditional ancient wisdom</span> with 
                    <span className="font-bold text-primary"> modern therapeutic techniques</span>, creating a safe and nurturing space 
                    for your complete transformation. Whether you're seeking physical relief, emotional healing, 
                    or spiritual clarity, every session is thoughtfully tailored to honor your unique needs and wellness goals.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-5 pt-6">
                  {features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(45, 103, 184, 0.1)" }}
                      className="flex gap-4 items-start p-6 rounded-2xl bg-gradient-to-br from-white to-primary/5 hover:from-primary/5 hover:to-accent/10 transition-all duration-300 border border-primary/15 hover:border-primary/40 shadow-sm hover:shadow-md"
                    >
                      <div className="mt-1 flex-shrink-0 text-primary">{feature.icon}</div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-charcoal text-sm">{feature.title}</h4>
                        <p className="text-xs text-slate leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Book Your Journey
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Therapies Section */}
        <section id="therapies" className="section-padding bg-surface relative overflow-hidden">
          <div className="section-container">
            <div className="text-center mb-20">
              <motion.div {...fadeIn} viewport={{ once: true }}>
                <h2 className="heading-secondary text-charcoal mb-6">Therapies Offered</h2>
                <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive range of healing modalities, each carefully designed to nurture your mind, body, and spirit. Every therapy is personalized to meet your unique needs and wellness goals.
                </p>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {therapies.map((therapy, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-surface border border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                        <img 
                          src={therapy.icon} 
                          alt={therapy.name} 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      {therapy.isVirtual && (
                        <div className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-md">
                          Virtual
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-primary transition-colors">
                      {therapy.name}
                    </h3>

                    {/* Subtitle */}
                    {therapy.subtitle && (
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                        {therapy.subtitle}
                      </p>
                    )}

                    {/* Short Description */}
                    <p className="text-sm text-slate leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {therapy.fullDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mt-auto mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-semibold text-charcoal mb-2 uppercase tracking-widest">Benefits:</p>
                      <ul className="space-y-1">
                        {therapy.benefits?.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-slate flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-primary/10 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate uppercase tracking-widest font-semibold">
                          {therapy.duration}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section removed as requested */}
          </div>

          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />
        </section>

        {/* Testimonials - Carousel */}
        <section id="testimonials" className="py-16 md:py-20 bg-charcoal text-white relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="text-center mb-10">
              <motion.div {...fadeIn} viewport={{ once: true }}>
                <Heart className="w-12 h-12 text-accent mx-auto mb-4 opacity-50" />
                <h2 className="heading-secondary text-white mb-2">Kind Words</h2>
                <p className="text-lg text-white/70">Hear from our valued clients</p>
              </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="max-w-4xl mx-auto">
              <div className="relative h-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <blockquote>
                      <Heart className="w-8 h-8 text-accent/30 mx-auto mb-4" />
                      <p className="text-2xl md:text-3xl leading-relaxed font-serif mb-6 text-white">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      <footer className="space-y-1">
                        <div className="text-accent font-bold text-lg">
                          — {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-white/60 text-sm uppercase tracking-widest">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </footer>
                    </blockquote>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-accent w-8"
                          : "bg-white/30 w-3 hover:bg-white/50"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48" />
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="bg-white relative overflow-hidden">
          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
            </div>
            
            <div className="section-container relative z-10 py-16 md:py-20">
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="heading-secondary text-white mb-6">Ready to Begin Your Healing Journey?</h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                  Book your personalized session today and experience the transformative power of holistic therapy. 
                  Your path to wellness and inner peace awaits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Session
                  </motion.button>
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-white/20 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-white/30 transition-all border border-white/30 backdrop-blur-sm"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="section-container py-20" id="contact-form">
            <div className="text-center mb-16">
              <motion.div {...fadeIn} viewport={{ once: true }}>
                <h2 className="heading-secondary text-charcoal mb-4">Get In Touch</h2>
                <p className="text-lg text-slate max-w-2xl mx-auto">Multiple ways to connect with Soul Reflection and start your transformation</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Location Card */}
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-surface to-white border border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="text-primary w-8 h-8" />
                </div>
                <h3 className="heading-tertiary text-charcoal mb-3">Location</h3>
                <p className="text-slate text-base leading-relaxed mb-4">
                  Based in Cardiff, United Kingdom
                </p>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-slate">Serving clients locally and virtually worldwide</p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-surface to-white border border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="text-primary w-8 h-8" />
                </div>
                <h3 className="heading-tertiary text-charcoal mb-3">Call Us</h3>
                <div className="space-y-3 mb-4">
                  <a 
                    href="tel:07708689589" 
                    className="text-base text-primary hover:text-primary-dark font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>07708 689589</span>
                  </a>
                  <a 
                    href="tel:07901228370" 
                    className="text-base text-primary hover:text-primary-dark font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>07901 228370</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-slate">Available for consultations</p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                {...fadeIn}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-surface to-white border border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="text-primary w-8 h-8" />
                </div>
                <h3 className="heading-tertiary text-charcoal mb-3">Email</h3>
                <a 
                  href="mailto:info@soulreflection.co.uk" 
                  className="text-base text-primary hover:text-primary-dark font-semibold transition-colors block mb-4"
                >
                  info@soulreflection.co.uk
                </a>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-slate">Respond within 24 hours</p>
                </div>
              </motion.div>
            </div>

            {/* Business Hours & Info */}
            <motion.div 
              {...fadeIn}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-10 text-center"
            >
              <h3 className="heading-tertiary text-charcoal mb-4">Why Choose Soul Reflection?</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-slate">Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <p className="text-sm text-slate">Therapy Modalities</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-slate">Client Satisfaction</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-slate">Support Available</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="bg-charcoal text-white border-t border-primary/20">
            <div className="section-container py-12">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {/* Brand Column */}
                <motion.div {...fadeIn} viewport={{ once: true }} className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/logo.png" alt="Soul Reflection" className="w-10 h-10" />
                    <span className="font-serif font-bold text-lg">Soul Reflection</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Holistic healing for mind, body, and soul. Your journey to wellness starts here.
                  </p>
                </motion.div>

                {/* Services Links */}
                <motion.div {...fadeIn} viewport={{ once: true }}>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#therapies" className="text-white/70 hover:text-accent transition-colors text-sm">Reiki</a></li>
                    <li><a href="#therapies" className="text-white/70 hover:text-accent transition-colors text-sm">Reflexology</a></li>
                    <li><a href="#therapies" className="text-white/70 hover:text-accent transition-colors text-sm">Massage</a></li>
                    <li><a href="#therapies" className="text-white/70 hover:text-accent transition-colors text-sm">QHHT</a></li>
                  </ul>
                </motion.div>

                {/* Quick Links */}
                <motion.div {...fadeIn} viewport={{ once: true }}>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">About</h4>
                  <ul className="space-y-2">
                    <li><a href="#about" className="text-white/70 hover:text-accent transition-colors text-sm">About Us</a></li>
                    <li><a href="#testimonials" className="text-white/70 hover:text-accent transition-colors text-sm">Testimonials</a></li>
                    <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors text-sm">Contact</a></li>
                    <li><a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">Blog</a></li>
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div {...fadeIn} viewport={{ once: true }}>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
                    <li><a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">Terms of Service</a></li>
                    <li><a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">Disclaimer</a></li>
                    <li><a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">Contact</a></li>
                  </ul>
                </motion.div>
              </div>

              {/* Footer Bottom */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-sm text-white/60">
                    © {new Date().getFullYear()} Soul Reflection. All rights reserved. | Proudly serving the holistic wellness community.
                  </p>
                  <div className="flex gap-6">
                    <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm uppercase tracking-widest font-semibold">
                      Instagram
                    </a>
                    <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm uppercase tracking-widest font-semibold">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
