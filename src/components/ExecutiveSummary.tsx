import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const keyFindingsData = [
  { name: 'Migration-Driven Load', value: 72, label: '65-78%' },
  { name: 'High-Risk Districts', value: 120, label: '120+' },
  { name: 'Critical Districts', value: 23, label: '23' },
  { name: 'Investment Need', value: 85, label: '₹2.8T' },
];

const districtCategories = [
  { name: 'Critical', value: 23, percentage: '3%', color: 'hsl(354, 70%, 55%)' },
  { name: 'High', value: 97, percentage: '13%', color: 'hsl(25, 95%, 55%)' },
  { name: 'Baseline + Moderate', value: 630, percentage: '84%', color: 'hsl(199, 89%, 48%)' },
];

const ExecutiveSummary = () => {
  return (
    <section id="executive-summary" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-steady mb-4 inline-block">KEY INSIGHTS</span>
          <h2 className="section-title text-4xl md:text-5xl">Executive Summary</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Evidence-based insights for resilient urban infrastructure planning
          </p>
        </motion.div>

        {/* Key Finding Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="stat-card max-w-4xl mx-auto mb-16 text-center glow-effect"
        >
          <span className="badge-critical mb-4 inline-block">KEY FINDING</span>
          <p className="text-xl md:text-2xl text-foreground font-medium">
            Migration-driven load contributes <span className="gradient-text font-bold">65–78%</span> of observed infrastructure stress across high-risk districts.
          </p>
        </motion.div>

        {/* District Categories Chart */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="chart-container"
          >
            <h3 className="text-xl font-semibold mb-6">District Distribution by Risk Level</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={districtCategories} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 18%)" />
                  <XAxis type="number" stroke="hsl(215, 15%, 55%)" />
                  <YAxis type="category" dataKey="name" stroke="hsl(215, 15%, 55%)" width={120} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(220, 18%, 7%)', 
                      border: '1px solid hsl(220, 16%, 18%)',
                      borderRadius: '8px',
                      color: 'hsl(210, 20%, 95%)'
                    }}
                    formatter={(value: number, name: string, props: any) => [
                      `${value} districts (${props.payload.percentage})`,
                      'Count'
                    ]}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {districtCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-8">Intervention Priority Levels</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold" style={{ background: 'hsl(354, 70%, 55% / 0.2)', color: 'hsl(354, 70%, 55%)' }}>
                  23
                </div>
                <div>
                  <div className="text-lg font-semibold">Critical Districts</div>
                  <div className="text-muted-foreground text-sm">Immediate intervention required (ISI &gt; 1M)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold" style={{ background: 'hsl(25, 95%, 55% / 0.2)', color: 'hsl(25, 95%, 55%)' }}>
                  97
                </div>
                <div>
                  <div className="text-lg font-semibold">High Priority</div>
                  <div className="text-muted-foreground text-sm">18-24 month implementation window</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold" style={{ background: 'hsl(199, 89%, 48% / 0.2)', color: 'hsl(199, 89%, 48%)' }}>
                  630
                </div>
                <div>
                  <div className="text-lg font-semibold">Baseline + Moderate</div>
                  <div className="text-muted-foreground text-sm">Preventive monitoring active</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="stat-card text-center">
            <div className="text-4xl font-bold text-chart-critical mb-2">120+</div>
            <div className="metric-label">High-Risk Districts</div>
          </div>
          <div className="stat-card text-center">
            <div className="text-4xl font-bold text-chart-high mb-2">₹2.8T</div>
            <div className="metric-label">Investment Needed</div>
          </div>
          <div className="stat-card text-center">
            <div className="text-4xl font-bold text-chart-moderate mb-2">65-78%</div>
            <div className="metric-label">Migration Load</div>
          </div>
          <div className="stat-card text-center">
            <div className="text-4xl font-bold text-chart-success mb-2">48hrs</div>
            <div className="metric-label">Decision Cycle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
