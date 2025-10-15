import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminElectives() {
  const [confirmText, setConfirmText] = useState('');

  const handleRunAllocation = async () => {
    if (confirmText !== 'ALLOCATE') {
      toast.error('Please type ALLOCATE to confirm');
      return;
    }

    // TODO: Backend integration - api.post('/electives/allocate')
    console.log('Running elective allocation...');
    toast.success('Allocation started successfully!');
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Elective Allocation</h1>
          <p className="text-muted-foreground">Run the allocation algorithm for student preferences</p>
        </div>

        <Card className="glass border-destructive/50">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Critical Action Warning</h3>
                <p className="text-muted-foreground">
                  Running the allocation algorithm will permanently assign students to electives based on their preferences. 
                  This action cannot be undone easily.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Type <span className="text-destructive font-bold">ALLOCATE</span> to confirm
                </label>
                <Input
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="Type ALLOCATE"
                  className="max-w-md focus:ring-2 focus:ring-destructive"
                />
              </div>

              <Button
                onClick={handleRunAllocation}
                disabled={confirmText !== 'ALLOCATE'}
                className="bg-destructive text-destructive-foreground font-bold text-lg px-8 py-6"
                asChild
              >
                <motion.button
                  whileHover={confirmText === 'ALLOCATE' ? { scale: 1.05 } : {}}
                  whileTap={confirmText === 'ALLOCATE' ? { scale: 0.98 } : {}}
                >
                  RUN ALLOCATION
                </motion.button>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Allocation Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">234</div>
                <div className="text-sm text-muted-foreground">Total Submissions</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">Available Electives</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-muted-foreground">Students per Elective (avg)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
}
