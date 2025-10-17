import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Calendar, BookOpen, Clock, ArrowRight, Users, Shield, Zap, ChevronDown, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, MouseEvent } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Magnetic shimmer button component
  const MagneticShimmerButton = ({ children, onClick, size = "lg", className = "" }: any) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <Button
        ref={buttonRef}
        onClick={onClick}
        size={size}
        className={`relative overflow-hidden ${className}`}
        onMouseMove={handleMouseMove}
        asChild
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3), transparent)`,
            }}
          />
          {children}
        </motion.button>
      </Button>
    );
  };

  // Animated counter component
  const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = target;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, [target, hasAnimated]);

    return (
      <div ref={counterRef} className="text-5xl md:text-6xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
    );
  };

  const titleWords = ['Your', 'Entire', 'Campus,', 'Unified.'];
  
  const features = [
    {
      icon: Calendar,
      title: 'Timetable Management',
      description: 'AI-powered timetable generation with conflict detection and optimization for seamless scheduling.',
      details: 'Automatically detect conflicts and optimize room allocation',
    },
    {
      icon: BookOpen,
      title: 'Campus Events & Clubs',
      description: 'Discover, create, and manage campus events and club activities in one unified platform.',
      details: 'Real-time event updates and RSVP management',
    },
    {
      icon: Clock,
      title: 'Elective Selection',
      description: 'Streamlined elective selection with intelligent allocation algorithms and preference ranking.',
      details: 'Fair allocation based on student preferences',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      quote: 'This platform transformed how I manage my schedule. Everything I need is in one place!',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Student Council President',
      quote: 'Event management has never been easier. Our club participation doubled this semester.',
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Academic Administrator',
      quote: 'The timetable generation saves us countless hours. It\'s a game-changer for administration.',
    },
  ];

  const faqs = [
    {
      question: 'Is this free for students?',
      answer: 'Yes! Smart Campus Hub is completely free for all students. We believe in accessible education technology.',
    },
    {
      question: 'How is my data used?',
      answer: 'Your data is encrypted and only used to provide you with personalized campus services. We never sell your information.',
    },
    {
      question: 'Can I access this on mobile?',
      answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices.',
    },
    {
      question: 'What if I need help?',
      answer: 'Our support team is available 24/7 via email and chat to assist with any questions or issues.',
    },
  ];

  const universities = ['MIT', 'Stanford', 'Harvard', 'Berkeley', 'Oxford', 'Cambridge'];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Aurora Background Effect - Placeholder for Animated SVG */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/30 to-accent/30 rounded-full blur-3xl"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Streamline your campus operations with intelligent scheduling, elective management, and seamless event coordination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
            className="flex gap-4 justify-center"
          >
            <MagneticShimmerButton
              onClick={() => navigate('/auth')}
              size="lg"
              className="bg-primary text-primary-foreground font-semibold glow-primary-hover group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </MagneticShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold glow-accent-hover"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Learn More
              </motion.button>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-12 px-4 border-y border-border/50"
      >
        <div className="container mx-auto">
          <h3 className="text-center text-muted-foreground text-sm font-medium mb-8">
            Trusted by Leading Campus Groups
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {universities.map((uni, i) => (
              <motion.div
                key={uni}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors"
              >
                {uni}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why This Hub Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-destructive">The Problem</h2>
              <p className="text-muted-foreground text-lg">
                Students and administrators struggle with fragmented systems, conflicting schedules, 
                and inefficient communication channels. Important information gets lost, events are 
                missed, and valuable time is wasted navigating multiple platforms.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-primary">The Solution</h2>
              <div className="space-y-4">
                {[
                  'Unified platform that brings all campus operations together',
                  'AI-powered scheduling that eliminates conflicts automatically',
                  'Real-time updates and notifications for seamless communication',
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Feature Demo */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4 bg-secondary/20"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">See It In Action</h2>
          <motion.div
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="glass p-8 rounded-2xl max-w-4xl mx-auto glow-accent-hover"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mini Timetable */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-background/50 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Today's Schedule
                </h3>
                <div className="space-y-2">
                  {['Data Structures', 'Web Development', 'Algorithms'].map((subject, i) => (
                    <motion.div
                      key={subject}
                      whileHover={{ x: 5, backgroundColor: 'hsl(var(--accent) / 0.1)' }}
                      className="p-2 rounded text-sm"
                    >
                      {subject}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mini Events */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-background/50 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Upcoming Events
                </h3>
                <div className="space-y-2">
                  {['Tech Fest', 'Club Meeting', 'Workshop'].map((event, i) => (
                    <motion.div
                      key={event}
                      whileHover={{ x: 5, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                      className="p-2 rounded text-sm"
                    >
                      {event}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage your campus efficiently
            </p>
          </motion.div>

          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="glass p-8 rounded-2xl glow-accent-hover transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4"
                >
                  <feature.icon className="h-6 w-6 text-accent" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-2">{feature.description}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-sm text-accent"
                >
                  {feature.details}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4 bg-secondary/20"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="glass p-6 rounded-2xl glow-accent-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-2"
            >
              <AnimatedCounter target={5000} suffix="+" />
              <p className="text-xl text-muted-foreground">Students Connected</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-2"
            >
              <AnimatedCounter target={100} suffix="+" />
              <p className="text-xl text-muted-foreground">Campus Events Managed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-2"
            >
              <AnimatedCounter target={98} suffix="%" />
              <p className="text-xl text-muted-foreground">User Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4"
      >
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' }}
        className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Simplify Your Campus Life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students and administrators who have transformed their campus experience.
          </p>
          <MagneticShimmerButton
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-primary text-primary-foreground font-bold text-lg px-12 py-6 glow-primary-hover"
          >
            Create Your Free Account Now
          </MagneticShimmerButton>
        </div>
      </motion.section>

      {/* Detailed Footer */}
      <footer className="bg-secondary/30 border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Smart Campus Hub</h3>
              <p className="text-muted-foreground text-sm">
                Unifying campus operations for a better educational experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Smart Campus Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
