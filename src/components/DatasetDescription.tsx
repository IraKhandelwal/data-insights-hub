import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const datasets = [
  {
    name: '1. Demographic Dataset',
    records: '1,006,029',
    columns: 6,
    columnsList: 'date, state, district, pincode, demo_age_5_17, demo_age_17+',
    uniqueStates: '58 (because of similar names)',
    uniqueDistricts: 961,
    memoryUsage: '94.8+ MB',
    description: 'Contains date-wise demographic data including age groups 5-17 and 17+ across states and districts.'
  },
  {
    name: '2. Enrolment Dataset',
    records: '2,071,700',
    columns: 7,
    columnsList: 'date, state, district, pincode, age_0_5, age_5_17, age_18_greater',
    uniqueStates: '49',
    uniqueDistricts: 964,
    memoryUsage: '53.7+ MB',
    description: 'Contains enrolment data segmented by age groups: 0-5, 5-17, and 18+.'
  },
  {
    name: '3. Biometric Dataset',
    records: '1,861,108',
    columns: 6,
    columnsList: 'date, state, district, pincode, bio_age_5_17, bio_age_17+',
    uniqueStates: '50',
    uniqueDistricts: 949,
    memoryUsage: '85.2+ MB',
    description: 'Contains biometric update data for age groups 5-17 and 17+.'
  }
];

const DatasetDescription = () => {
  return (
    <section id="dataset" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Dataset Description</h2>
          <p className="section-subtitle">
            Three primary datasets from UIDAI covering demographic, enrolment, and biometric records across Indian states and districts.
          </p>
        </motion.div>

        {/* Dataset Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {datasets.map((dataset, index) => (
            <motion.div
              key={dataset.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="stat-card p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{dataset.name}</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-muted-foreground font-medium">Records:</TableCell>
                      <TableCell className="text-foreground font-mono text-right">{dataset.records}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground font-medium">Columns:</TableCell>
                      <TableCell className="text-foreground font-mono text-right">{dataset.columns}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground font-medium">Unique States:</TableCell>
                      <TableCell className="text-foreground font-mono text-right">{dataset.uniqueStates}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground font-medium">Unique Districts:</TableCell>
                      <TableCell className="text-foreground font-mono text-right">{dataset.uniqueDistricts}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground font-medium">Memory Usage:</TableCell>
                      <TableCell className="text-foreground font-mono text-right">{dataset.memoryUsage}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">
                  <span className="text-primary font-medium">Columns:</span> {dataset.columnsList}
                </p>
                <p className="text-muted-foreground text-sm">
                  {dataset.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Post-Processing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 stat-card p-6"
        >
          <h4 className="text-lg font-bold text-primary mb-4">After Preprocessing</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-primary">38</div>
              <div className="text-sm text-muted-foreground">Unique States/UTs</div>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-primary">961</div>
              <div className="text-sm text-muted-foreground">Districts Covered</div>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-primary">4.9M+</div>
              <div className="text-sm text-muted-foreground">Total Records</div>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Data Quality</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DatasetDescription;
