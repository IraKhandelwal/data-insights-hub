import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const demographicStats = [
  { stat: '', count: '2,071,700', mean: '527,831.8', std: '197,293.3', min: '100,000', max: '855,456' },
  { stat: 'pincode', count: '2,071,700', mean: '527,831.8', std: '197,293.3', min: '100,000', max: '855,456' },
  { stat: 'demo_age_5_17', count: '2,071,700', mean: '2.35', std: '14.90', min: '0', max: '2,690' },
  { stat: 'demo_age_17+', count: '2,071,700', mean: '21.45', std: '125.25', min: '0', max: '16,166' },
];

const enrolmentStats = [
  { stat: 'count', pincode: '1,006,029', age_0_5: '1,006,029', age_5_17: '1,006,029', age_18_greater: '1,006,029' },
  { stat: 'mean', pincode: '518,641.5', age_0_5: '3.53', age_5_17: '1.71', age_18_greater: '0.17' },
  { stat: 'max', pincode: '855,456', age_0_5: '2,688', age_5_17: '1,812', age_18_greater: '855' },
];

const biometricStats = [
  { stat: 'count', pincode: '1,861,108', bio_age_5_17: '1,861,108', bio_age_17_: '1,861,108' },
  { stat: 'mean', pincode: '521,761.2', bio_age_5_17: '18.39', bio_age_17_: '19.09' },
  { stat: 'max', pincode: '855,456', bio_age_5_17: '8,002', bio_age_17_: '7,625' },
];

const statesAfterPreprocessing = [
  'ANDAMAN AND NICOBAR ISLANDS', 'ANDHRA PRADESH', 'ARUNACHAL PRADESH', 'ASSAM',
  'BIHAR', 'CHANDIGARH', 'CHHATTISGARH', 'DADRA AND NAGAR HAVELI',
  'GOA', 'GUJARAT', 'HARYANA', 'HIMACHAL PRADESH',
  'JAMMU AND KASHMIR', 'JHARKHAND', 'KARNATAKA', 'KERALA',
  'LADAKH', 'LAKSHADWEEP', 'MADHYA PRADESH', 'MAHARASHTRA',
  'MANIPUR', 'MEGHALAYA', 'MIZORAM', 'NAGALAND',
  'NCT OF DELHI', 'ODISHA', 'PUDUCHERRY', 'PUNJAB',
  'RAJASTHAN', 'SIKKIM', 'TAMIL NADU', 'TELANGANA',
  'TRIPURA', 'UTTAR PRADESH', 'UTTARAKHAND', 'WEST BENGAL'
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
          <h2 className="section-title">Exploratory Data Analysis (EDA)</h2>
          <p className="section-subtitle">
            Summary statistics, distribution analysis, and key findings from the preprocessed datasets.
          </p>
        </motion.div>

        {/* 7.1 Demographic Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">7.1 Demographic Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary"></TableHead>
                  <TableHead className="text-primary">Count</TableHead>
                  <TableHead className="text-primary">Mean</TableHead>
                  <TableHead className="text-primary">Std</TableHead>
                  <TableHead className="text-primary">Min</TableHead>
                  <TableHead className="text-primary">Max</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demographicStats.slice(1).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold text-foreground">{row.stat}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.count}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.mean}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.std}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.min}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.max}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Interpretation:</strong> The demographic dataset shows a mean of 2.35 for age group 5-17 and 21.45 for age 17+, with significant variance indicating regional disparities.
          </p>
        </motion.div>

        {/* 7.2 Enrolment Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">7.2 Enrolment Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary"></TableHead>
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

        {/* 7.3 Biometric Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-4">7.3 Biometric Dataset - Descriptive Statistics</h3>
          <div className="stat-card p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary"></TableHead>
                  <TableHead className="text-primary">pincode</TableHead>
                  <TableHead className="text-primary">bio_age_5_17</TableHead>
                  <TableHead className="text-primary">bio_age_17+</TableHead>
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

        {/* 7.4 States After Preprocessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-primary mb-4">7.4 States/UTs After Preprocessing (38 Total)</h3>
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
      </div>
    </section>
  );
};

export default EDA;
