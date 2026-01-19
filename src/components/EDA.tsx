import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const demographicStats = [
  { stat: 'count', pincode: '2,071,700', demo_age_5_17: '2,071,700', demo_age_17_: '2,071,700' },
  { stat: 'mean', pincode: '527,831.8', demo_age_5_17: '2.35', demo_age_17_: '21.45' },
  { stat: 'std', pincode: '197,293.3', demo_age_5_17: '14.90', demo_age_17_: '125.25' },
  { stat: 'min', pincode: '100,000', demo_age_5_17: '0', demo_age_17_: '0' },
  { stat: '25%', pincode: '396,469', demo_age_5_17: '0', demo_age_17_: '2' },
  { stat: '50%', pincode: '524,322', demo_age_5_17: '1', demo_age_17_: '6' },
  { stat: '75%', pincode: '695,507', demo_age_5_17: '2', demo_age_17_: '15' },
  { stat: 'max', pincode: '855,456', demo_age_5_17: '2,690', demo_age_17_: '16,166' },
];

const enrolmentStats = [
  { stat: 'count', pincode: '1,006,029', age_0_5: '1,006,029', age_5_17: '1,006,029', age_18_greater: '1,006,029' },
  { stat: 'mean', pincode: '518,641.5', age_0_5: '3.53', age_5_17: '1.71', age_18_greater: '0.17' },
  { stat: 'std', pincode: '205,636.0', age_0_5: '17.54', age_5_17: '14.37', age_18_greater: '3.22' },
  { stat: 'min', pincode: '100,000', age_0_5: '0', age_5_17: '0', age_18_greater: '0' },
  { stat: '25%', pincode: '363,641', age_0_5: '1', age_5_17: '0', age_18_greater: '0' },
  { stat: '50%', pincode: '517,417', age_0_5: '2', age_5_17: '0', age_18_greater: '0' },
  { stat: '75%', pincode: '700,104', age_0_5: '3', age_5_17: '1', age_18_greater: '0' },
  { stat: 'max', pincode: '855,456', age_0_5: '2,688', age_5_17: '1,812', age_18_greater: '855' },
];

const biometricStats = [
  { stat: 'count', pincode: '1,861,108', bio_age_5_17: '1,861,108', bio_age_17_: '1,861,108' },
  { stat: 'mean', pincode: '521,761.2', bio_age_5_17: '18.39', bio_age_17_: '19.09' },
  { stat: 'std', pincode: '198,162.7', bio_age_5_17: '83.70', bio_age_17_: '88.07' },
  { stat: 'min', pincode: '110,001', bio_age_5_17: '0', bio_age_17_: '0' },
  { stat: '25%', pincode: '391,175', bio_age_5_17: '1', bio_age_17_: '1' },
  { stat: '50%', pincode: '522,401', bio_age_5_17: '3', bio_age_17_: '4' },
  { stat: '75%', pincode: '686,636.2', bio_age_5_17: '11', bio_age_17_: '10' },
  { stat: 'max', pincode: '855,456', bio_age_5_17: '8,002', bio_age_17_: '7,625' },
];

const statesAfterPreprocessing = [
  'ANDAMAN AND NICOBAR ISLANDS', 'ANDHRA PRADESH', 'ARUNACHAL PRADESH', 'ASSAM',
  'BIHAR', 'CHANDIGARH', 'CHHATTISGARH', 'DADRA AND NAGAR HAVELI',
  'DADRA AND NAGAR HAVELI AND DAMAN AND DIU', 'DAMAN AND DIU', 'GOA', 'GUJARAT',
  'HARYANA', 'HIMACHAL PRADESH', 'JAMMU AND KASHMIR', 'JHARKHAND',
  'KARNATAKA', 'KERALA', 'LADAKH', 'LAKSHADWEEP',
  'MADHYA PRADESH', 'MAHARASHTRA', 'MANIPUR', 'MEGHALAYA',
  'MIZORAM', 'NAGALAND', 'NCT OF DELHI', 'ODISHA',
  'PUDUCHERRY', 'PUNJAB', 'RAJASTHAN', 'SIKKIM',
  'TAMIL NADU', 'TELANGANA', 'TRIPURA', 'UTTAR PRADESH',
  'UTTARAKHAND', 'WEST BENGAL'
];

const EDA = () => {
  return (
    <section id="eda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Exploratory Data Analysis</h2>
          <p className="section-subtitle">
            Summary statistics, distribution analysis, and key findings from the preprocessed datasets
          </p>
        </motion.div>

        {/* Demographic Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">Demographic Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary">Statistic</TableHead>
                  <TableHead className="text-primary">pincode</TableHead>
                  <TableHead className="text-primary">demo_age_5_17</TableHead>
                  <TableHead className="text-primary">demo_age_17_</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demographicStats.map((row) => (
                  <TableRow key={row.stat}>
                    <TableCell className="font-semibold text-foreground">{row.stat}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.pincode}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.demo_age_5_17}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.demo_age_17_}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Interpretation:</strong> The demographic dataset shows a mean of 2.35 for age group 5-17 and 21.45 for age 17+, with significant variance indicating regional disparities.
          </p>
        </motion.div>

        {/* Enrolment Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">Enrolment Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary">Statistic</TableHead>
                  <TableHead className="text-primary">pincode</TableHead>
                  <TableHead className="text-primary">age_0_5</TableHead>
                  <TableHead className="text-primary">age_5_17</TableHead>
                  <TableHead className="text-primary">age_18_greater</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrolmentStats.map((row) => (
                  <TableRow key={row.stat}>
                    <TableCell className="font-semibold text-foreground">{row.stat}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.pincode}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.age_0_5}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.age_5_17}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.age_18_greater}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Interpretation:</strong> Enrolment data shows highest activity in the 0-5 age group (mean: 3.53), indicating consistent new enrolments across districts.
          </p>
        </motion.div>

        {/* Biometric Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">Biometric Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary">Statistic</TableHead>
                  <TableHead className="text-primary">pincode</TableHead>
                  <TableHead className="text-primary">bio_age_5_17</TableHead>
                  <TableHead className="text-primary">bio_age_17_</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {biometricStats.map((row) => (
                  <TableRow key={row.stat}>
                    <TableCell className="font-semibold text-foreground">{row.stat}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.pincode}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.bio_age_5_17}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.bio_age_17_}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Interpretation:</strong> Biometric updates show similar patterns across age groups with mean values around 18-19, with maximum values reaching 8,002 in high-activity districts.
          </p>
        </motion.div>

        {/* States After Preprocessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-primary mb-4">States/UTs After Preprocessing (38 Total)</h3>
          <div className="stat-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {statesAfterPreprocessing.map((state, index) => (
                <motion.div
                  key={state}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  className="text-sm text-muted-foreground py-1 px-2 bg-background/50 rounded border border-border/30 hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {state}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">Key EDA Findings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stat-card p-6">
              <h4 className="font-semibold text-foreground mb-3">Data Quality</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• No null values in critical columns after cleaning</li>
                <li>• All duplicates removed from datasets</li>
                <li>• Geographic identifiers unified across all data silos</li>
              </ul>
            </div>
            <div className="stat-card p-6">
              <h4 className="font-semibold text-foreground mb-3">Processing Outcomes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 806 regional clusters identified for predictive momentum</li>
                <li>• 480 accelerating districts categorized</li>
                <li>• Policy interventions mapped to high-pressure districts</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EDA;
