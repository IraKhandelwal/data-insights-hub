import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="badge-steady text-sm tracking-widest">UIDAI DATA HACKATHON 2026</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-foreground">Urban</span>{' '}
            <span className="gradient-text">Pulse</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Data Analytics Project Report
          </p>
          
          <p className="text-lg text-muted-foreground/70 mb-12 max-w-2xl mx-auto">
            Aadhaar-Driven Migration & Infrastructure Stress Analytics for Evidence-Based SDG 9 Planning
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            <div className="stat-card text-center">
              <div className="metric-value">4.9M+</div>
              <div className="metric-label">Total Records</div>
            </div>
            <div className="stat-card text-center">
              <div className="metric-value">3</div>
              <div className="metric-label">Datasets Analyzed</div>
            </div>
            <div className="stat-card text-center">
              <div className="metric-value">961</div>
              <div className="metric-label">Districts Covered</div>
            </div>
            <div className="stat-card text-center">
              <div className="metric-value">38</div>
              <div className="metric-label">States/UTs</div>
            </div>
          </motion.div>
          
          {/* Interactive Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-3">For better visualization:</p>
            <a 
              href="https://urban-pulsee.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/50 rounded-full text-primary hover:bg-primary/30 transition-colors"
            >
              <span>Visit Interactive Dashboard</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#abstract" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
