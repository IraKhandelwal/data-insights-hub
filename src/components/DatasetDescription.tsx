import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const datasets = [
  {
    name: 'Demographic Dataset',
    records: '2,071,700',
    columns: 6,
    uniqueStates: 58,
    uniqueDistricts: 961,
    memoryUsage: '94.8+ MB',
    description: 'Contains date-wise demographic data including age groups 5-17 and 17+ across states and districts'
  },
  {
    name: 'Enrolment Dataset',
    records: '1,006,029',
    columns: 7,
    uniqueStates: 49,
    uniqueDistricts: 964,
    memoryUsage: '53.7+ MB',
    description: 'Contains enrolment data segmented by age groups: 0-5, 5-17, and 18+'
  },
  {
    name: 'Biometric Dataset',
    records: '1,861,108',
    columns: 6,
    uniqueStates: 50,
    uniqueDistricts: 949,
    memoryUsage: '85.2+ MB',
    description: 'Contains biometric update data for age groups 5-17 and 17+'
  }
];

const demographicColumns = [
  { column: 'date', description: 'Date of record (object type)' },
  { column: 'state', description: 'State/UT name' },
  { column: 'district', description: 'District name' },
  { column: 'pincode', description: 'PIN code (6-digit)' },
  { column: 'demo_age_5_17', description: 'Demographic count for age 5-17' },
  { column: 'demo_age_17_', description: 'Demographic count for age 17+' },
];

const enrolmentColumns = [
  { column: 'date', description: 'Date of record' },
  { column: 'state', description: 'State/UT name' },
  { column: 'district', description: 'District name' },
  { column: 'pincode', description: 'PIN code' },
  { column: 'age_0_5', description: 'Enrolment count for age 0-5' },
  { column: 'age_5_17', description: 'Enrolment count for age 5-17' },
  { column: 'age_18_greater', description: 'Enrolment count for age 18+' },
];

const biometricColumns = [
  { column: 'date', description: 'Date of record' },
  { column: 'state', description: 'State/UT name' },
  { column: 'district', description: 'District name' },
  { column: 'pincode', description: 'PIN code' },
  { column: 'bio_age_5_17', description: 'Biometric updates for age 5-17' },
  { column: 'bio_age_17_', description: 'Biometric updates for age 17+' },
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
            Three primary datasets from UIDAI covering demographic, enrolment, and biometric records
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
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Records:</span>
                  <span className="text-foreground font-mono">{dataset.records}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Columns:</span>
                  <span className="text-foreground font-mono">{dataset.columns}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unique States:</span>
                  <span className="text-foreground font-mono">{dataset.uniqueStates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unique Districts:</span>
                  <span className="text-foreground font-mono">{dataset.uniqueDistricts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Memory:</span>
                  <span className="text-foreground font-mono">{dataset.memoryUsage}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4 pt-4 border-t border-border">
                {dataset.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Column Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Demographic Columns */}
          <div className="stat-card p-6">
            <h4 className="text-lg font-bold text-primary mb-4">Demographic Dataset Columns</h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Column Name</TableHead>
                    <TableHead className="text-primary">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demographicColumns.map((col) => (
                    <TableRow key={col.column}>
                      <TableCell className="font-mono text-foreground">{col.column}</TableCell>
                      <TableCell className="text-muted-foreground">{col.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Enrolment Columns */}
          <div className="stat-card p-6">
            <h4 className="text-lg font-bold text-primary mb-4">Enrolment Dataset Columns</h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Column Name</TableHead>
                    <TableHead className="text-primary">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrolmentColumns.map((col) => (
                    <TableRow key={col.column}>
                      <TableCell className="font-mono text-foreground">{col.column}</TableCell>
                      <TableCell className="text-muted-foreground">{col.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Biometric Columns */}
          <div className="stat-card p-6">
            <h4 className="text-lg font-bold text-primary mb-4">Biometric Dataset Columns</h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Column Name</TableHead>
                    <TableHead className="text-primary">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {biometricColumns.map((col) => (
                    <TableRow key={col.column}>
                      <TableCell className="font-mono text-foreground">{col.column}</TableCell>
                      <TableCell className="text-muted-foreground">{col.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>

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
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Null Values</div>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Duplicate Records</div>
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
