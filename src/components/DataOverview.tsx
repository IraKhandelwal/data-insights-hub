import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const datasetComposition = [
  { name: 'Biometric Records', value: 32.4, color: 'hsl(199, 89%, 48%)' },
  { name: 'Demographic Updates', value: 15.2, color: 'hsl(354, 70%, 55%)' },
  { name: 'Enrollment Records', value: 1.2, color: 'hsl(160, 84%, 40%)' },
];

const pipelineData = [
  { stage: 'CSV Ingestion', input: 48.2, output: 48.2, time: '8-12h' },
  { stage: 'Deduplication', input: 48.2, output: 46.6, time: '4-6h' },
  { stage: 'Aggregation', input: 46.6, output: 0.75, time: '2-3h' },
  { stage: 'ISI Calculation', input: 750, output: 750, time: '0.5h' },
];

const qualityMetrics = [
  { metric: 'Total Records', raw: 48.2, clean: 47.6, unit: 'M' },
  { metric: 'Duplicates Removed', value: 3.4, unit: '%' },
  { metric: 'Anomalies Detected', value: 2.1, unit: '%' },
  { metric: 'Final Dataset', value: 98.8, unit: '%' },
];

const DataOverview = () => {
  return (
    <section id="data-overview" className="py-20 md:py-32 hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-steady mb-4 inline-block">DATA PROCESSING</span>
          <h2 className="section-title text-4xl md:text-5xl">Dataset & Pipeline Overview</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive data ingestion and quality assurance framework
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Dataset Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="chart-container"
          >
            <h3 className="text-xl font-semibold mb-6">Dataset Composition (Million Records)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={datasetComposition}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${value}M`}
                    labelLine={{ stroke: 'hsl(215, 15%, 55%)' }}
                  >
                    {datasetComposition.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    verticalAlign="bottom"
                    formatter={(value) => <span style={{ color: 'hsl(215, 15%, 55%)' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Data Quality Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-xl font-semibold mb-6">Data Quality Metrics</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-primary">48.2M</div>
                  <div className="text-sm text-muted-foreground">Raw Records</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-chart-success">47.6M</div>
                  <div className="text-sm text-muted-foreground">Post-Cleaning</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Duplicates Removed</span>
                  <span className="font-semibold text-chart-high">3.4%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Anomalies Detected</span>
                  <span className="font-semibold text-chart-moderate">2.1%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Final Dataset Quality</span>
                  <span className="font-semibold text-chart-success">98.8%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                  <span className="text-muted-foreground">Geographic Coverage</span>
                  <span className="font-semibold text-primary">750/750 Districts</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Processing Pipeline Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="table-container"
        >
          <h3 className="text-xl font-semibold p-6 border-b border-border">Data Processing Pipeline</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Pipeline Stage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Input Volume</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Processing Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Output Records</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="px-6 py-4 font-medium">CSV Batch Ingestion</td>
                  <td className="px-6 py-4 text-muted-foreground">48.2M rows</td>
                  <td className="px-6 py-4"><span className="badge-steady">8–12 hours</span></td>
                  <td className="px-6 py-4 text-primary font-medium">48.2M</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-6 py-4 font-medium">Deduplication & Validation</td>
                  <td className="px-6 py-4 text-muted-foreground">48.2M</td>
                  <td className="px-6 py-4"><span className="badge-steady">4–6 hours</span></td>
                  <td className="px-6 py-4 text-primary font-medium">46.6M</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-6 py-4 font-medium">District-Level Aggregation</td>
                  <td className="px-6 py-4 text-muted-foreground">46.6M</td>
                  <td className="px-6 py-4"><span className="badge-steady">2–3 hours</span></td>
                  <td className="px-6 py-4 text-primary font-medium">750 districts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">ISI Calculation & Ranking</td>
                  <td className="px-6 py-4 text-muted-foreground">750 districts</td>
                  <td className="px-6 py-4"><span className="badge-steady">0.5 hours</span></td>
                  <td className="px-6 py-4 text-primary font-medium">750 ISI scores</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-border bg-secondary/20">
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">End-to-End Processing:</span>
                <span className="font-semibold text-primary ml-2">14–21 hours</span>
              </div>
              <div>
                <span className="text-muted-foreground">Data Reduction Ratio:</span>
                <span className="font-semibold text-chart-success ml-2">64,267:1 compression</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataOverview;
