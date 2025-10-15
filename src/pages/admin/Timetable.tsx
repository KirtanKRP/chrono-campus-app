import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function TimetableManagement() {
  const [isDraft, setIsDraft] = useState(false);

  const handleGenerateDraft = async () => {
    // TODO: Backend integration - api.post('/timetable/generate')
    console.log('Generating draft timetable...');
    setIsDraft(true);
    toast.success('Draft timetable generated!');
  };

  const handleConfirmPublish = async () => {
    // TODO: Backend integration - api.post('/timetable/publish')
    console.log('Publishing timetable...');
    setIsDraft(false);
    toast.success('Timetable published successfully!');
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Timetable Generation</h1>
          <p className="text-muted-foreground">Generate and manage campus timetables</p>
        </div>

        {isDraft && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass border-2 border-accent/50 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-5 w-5 text-accent" />
              <h3 className="font-bold text-lg text-accent">DRAFT MODE</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Review the generated timetable below. Click "Confirm & Publish" to make it live.
            </p>
            <Button
              onClick={handleConfirmPublish}
              className="bg-primary text-primary-foreground font-semibold glow-primary-hover"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm & Publish
              </motion.button>
            </Button>
          </motion.div>
        )}

        <Card className="glass">
          <CardContent className="p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Generation Settings</h3>
              <p className="text-muted-foreground">
                Configure constraints and preferences for timetable generation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Academic Year</label>
                <select className="w-full p-2 rounded-lg bg-card border border-border">
                  <option>2024-2025</option>
                  <option>2025-2026</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Semester</label>
                <select className="w-full p-2 rounded-lg bg-card border border-border">
                  <option>Fall</option>
                  <option>Spring</option>
                </select>
              </div>
            </div>

            {!isDraft && (
              <Button
                onClick={handleGenerateDraft}
                className="bg-accent text-accent-foreground font-semibold glow-accent-hover w-full"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Generate Draft Timetable
                </motion.button>
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Generation Statistics</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">48</div>
                <div className="text-sm text-muted-foreground">Total Subjects</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Classes</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">28</div>
                <div className="text-sm text-muted-foreground">Rooms Available</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/10">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-muted-foreground">Faculty Members</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
}
