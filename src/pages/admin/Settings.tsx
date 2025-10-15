import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Settings() {
  const handleSave = async () => {
    // TODO: Backend integration - api.put('/settings', data)
    console.log('Saving settings...');
    toast.success('Settings saved successfully!');
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Configure system preferences</p>
        </div>

        <Card className="glass">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Input defaultValue="2024-2025" />
            </div>
            <div className="space-y-2">
              <Label>Current Semester</Label>
              <select className="w-full p-2 rounded-lg bg-card border border-border">
                <option>Fall</option>
                <option>Spring</option>
                <option>Summer</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Campus Name</Label>
              <Input defaultValue="Smart Campus University" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Timetable Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Periods per Day</Label>
              <Input type="number" defaultValue="8" />
            </div>
            <div className="space-y-2">
              <Label>Working Days</Label>
              <Input defaultValue="Monday - Saturday" />
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleSave}
          className="bg-primary text-primary-foreground font-semibold glow-primary-hover"
          asChild
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </motion.button>
        </Button>
      </motion.div>
    </DashboardLayout>
  );
}
