import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Clock, TrendingUp } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="glass glow-accent-hover h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Today's Schedule</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5 Classes</div>
                <p className="text-xs text-muted-foreground mt-1">Next: Data Structures at 10:00 AM</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="glass glow-accent-hover h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 Events</div>
                <p className="text-xs text-muted-foreground mt-1">Tech Fest on Friday</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="glass glow-accent-hover h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Elective Status</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">Submitted</div>
                <p className="text-xs text-muted-foreground mt-1">All preferences saved</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors text-left"
            >
              <Calendar className="h-5 w-5 mb-2 text-accent" />
              <div className="font-semibold">View Timetable</div>
              <div className="text-xs text-muted-foreground">Check your weekly schedule</div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors text-left"
            >
              <BookOpen className="h-5 w-5 mb-2 text-primary" />
              <div className="font-semibold">Manage Electives</div>
              <div className="text-xs text-muted-foreground">Update your preferences</div>
            </motion.button>
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
}
