import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const isiThresholds = [
  { range: '> 1,000,000', level: 'Critical', color: 'hsl(354, 70%, 55%)', description: 'Immediate intervention required' },
  { range: '500k – 1M', level: 'High', color: 'hsl(25, 95%, 55%)', description: '18-24 month planning window' },
  { range: '100k – 500k', level: 'Moderate', color: 'hsl(45, 93%, 55%)', description: 'Preventive monitoring' },
  { range: '< 100k', level: 'Baseline', color: 'hsl(199, 89%, 48%)', description: 'Normal operations' },
];

const sectorWeighting = [
  { name: 'Transport', value: 35, color: 'hsl(199, 89%, 48%)' },
  { name: 'Water/Sanitation', value: 28, color: 'hsl(160, 84%, 40%)' },
  { name: 'Energy', value: 22, color: 'hsl(45, 93%, 55%)' },
  { name: 'Healthcare', value: 15, color: 'hsl(354, 70%, 55%)' },
];

const capacityGap = [
  { sector: 'Transport', value: 1.2, percentage: 43 },
  { sector: 'Water/Sanitation', value: 0.78, percentage: 28 },
  { sector: 'Energy', value: 0.49, percentage: 18 },
  { sector: 'Healthcare', value: 0.33, percentage: 12 },
];

const ISIMethodology = () => {
  return (
    <section id="methodology" className="py-20 md:py-32 hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-steady mb-4 inline-block">ANALYTICAL FRAMEWORK</span>
          <h2 className="section-title text-4xl md:text-5xl">ISI Methodology</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Migration-Induced Infrastructure Stress Index: Marginal Load Model
          </p>
        </motion.div>

        {/* ISI Formula */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="stat-card max-w-4xl mx-auto mb-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Infrastructure Stress Index Formula</h3>
          <div className="p-6 rounded-xl bg-secondary/50 font-mono text-lg md:text-xl mb-6">
            <span className="gradient-text font-bold">ISI</span> = (Δ Demand / Residual Capacity) × Normalization Factor
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
            <div className="p-4 rounded-lg bg-secondary/30">
              <span className="font-semibold text-primary">Δ Demand</span>
              <p className="text-muted-foreground mt-1">(Total Biometric + Total Demographic) × Migration Intensity</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30">
              <span className="font-semibold text-primary">Residual Capacity</span>
              <p className="text-muted-foreground mt-1">1 / (Baseline Capacity Utilization Rate)</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30">
              <span className="font-semibold text-primary">Migration Intensity</span>
              <p className="text-muted-foreground mt-1">(Cross-District Address Changes / Total Population)</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30">
              <span className="font-semibold text-primary">Normalization Factor</span>
              <p className="text-muted-foreground mt-1">100,000 (for scale consistency)</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ISI Thresholds */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-xl font-semibold mb-6">ISI Interpretation Thresholds</h3>
            <div className="space-y-4">
              {isiThresholds.map((threshold, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: threshold.color }}
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{threshold.level}</span>
                      <span className="font-mono text-sm text-muted-foreground">{threshold.range}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{threshold.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sectoral Weighting */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="chart-container"
          >
            <h3 className="text-xl font-semibold mb-6">Sectoral Weighting Distribution</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorWeighting}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={{ stroke: 'hsl(215, 15%, 55%)' }}
                  >
                    {sectorWeighting.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(220, 18%, 7%)', 
                      border: '1px solid hsl(220, 16%, 18%)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Example Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="stat-card max-w-4xl mx-auto glow-effect"
        >
          <h3 className="text-xl font-semibold mb-4">Example Calculation: Thane, Maharashtra</h3>
          <div className="p-6 rounded-xl bg-secondary/50 font-mono text-sm md:text-base mb-4 overflow-x-auto">
            <span className="text-primary">571K bio</span> + <span className="text-chart-critical">447K demo</span> + <span className="text-chart-success">43K enrol</span> = <span className="text-chart-high">1.06M</span> mobility signals<br/>
            × <span className="text-primary">2.01</span> intensity ratio ÷ <span className="text-chart-moderate">0.47</span> residual capacity × 100k<br/>
            = <span className="gradient-text font-bold text-xl">ISI = 2,130,472 (Critical)</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="badge-critical">Critical Threshold Exceeded</span>
            <span className="badge-high">Immediate Action Required</span>
          </div>
        </motion.div>

        {/* Investment Needs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Infrastructure Capacity Gap: Investment Requirements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capacityGap.map((sector, index) => (
              <div key={index} className="stat-card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">₹{sector.value}T</div>
                <div className="text-lg font-semibold mb-1">{sector.sector}</div>
                <div className="text-sm text-muted-foreground">{sector.percentage}% of total</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-block stat-card">
              <span className="text-muted-foreground">Total Investment Need (23 Critical Districts):</span>
              <span className="text-3xl font-bold gradient-text ml-4">₹2.8 Trillion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ISIMethodology;
