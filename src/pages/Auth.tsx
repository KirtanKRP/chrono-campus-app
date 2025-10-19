import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

export default function Auth() {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    role: 'student',
    department: '',
    semester: '',
    cgpa: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(loginData.email, loginData.password);
      const storedUser = localStorage.getItem('user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      toast.success('Login successful!');
      
      // Redirect based on role
      if (user?.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signup(signupData.name, signupData.email, signupData.password);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass rounded-2xl p-8 glow-accent">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GraduationCap className="h-10 w-10 text-primary" />
            <h1 className="text-2xl font-bold">Smart Campus Hub</h1>
          </motion.div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="login">
                <motion.form
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleLogin}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="student@campus.edu"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold glow-primary-hover"
                    disabled={isLoading}
                    asChild
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </motion.button>
                  </Button>
                </motion.form>
              </TabsContent>

              <TabsContent value="signup">
                <motion.form
                  key="signup-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSignup}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="student@campus.edu"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-department">Department</Label>
                      <Input
                        id="signup-department"
                        type="text"
                        placeholder="Computer Science"
                        value={signupData.department}
                        onChange={(e) => setSignupData({ ...signupData, department: e.target.value })}
                        required
                        className="focus:ring-2 focus:ring-accent glow-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-semester">Semester</Label>
                      <Input
                        id="signup-semester"
                        type="number"
                        placeholder="5"
                        value={signupData.semester}
                        onChange={(e) => setSignupData({ ...signupData, semester: e.target.value })}
                        required
                        className="focus:ring-2 focus:ring-accent glow-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-cgpa">CGPA</Label>
                    <Input
                      id="signup-cgpa"
                      type="number"
                      step="0.01"
                      placeholder="8.5"
                      value={signupData.cgpa}
                      onChange={(e) => setSignupData({ ...signupData, cgpa: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-accent glow-accent"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold glow-primary-hover"
                    disabled={isLoading}
                    asChild
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? 'Creating account...' : 'Create Account'}
                    </motion.button>
                  </Button>
                </motion.form>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
