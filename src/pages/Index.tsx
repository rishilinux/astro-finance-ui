
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { PieChart, ArrowRight, BarChart3, GitBranch, Database, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-indigo-950">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary p-1">
            <PieChart className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold">Fenty</span>
          <span className="text-xs text-muted-foreground">Numbers to Strategy</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <a href="#echo-ai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Echo AI
            </a>
            <Link to="/pricing" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Explore premium
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:from-primary dark:to-indigo-400">
            Transforming Financial Data Into Strategic Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Introducing a revolutionary Retrieval-Augmented Generation (RAG) system
            designed to transform financial data analysis in enterprises.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="rounded-full px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/workspace">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Try Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 py-12 relative z-10"
        >
          <div className="glass-card p-4 md:p-8 overflow-hidden">
            <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-blue-100/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-muted-foreground">Interactive demo preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solution leverages powerful tools and open-source frameworks to deliver
            real-time insights, natural language querying, and scalable integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Database className="h-8 w-8 text-primary" />,
              title: "Data Integration",
              description: "Connect and analyze data from multiple sources with our powerful integration tools."
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-primary" />,
              title: "Advanced Visualization",
              description: "Transform complex data into clear, actionable visualizations."
            },
            {
              icon: <Bot className="h-8 w-8 text-primary" />,
              title: "AI-Powered Analysis",
              description: "Leverage our Echo AI to get insights and recommendations from your data."
            },
            {
              icon: <GitBranch className="h-8 w-8 text-primary" />,
              title: "Collaboration Tools",
              description: "Share insights and work together with your team in real-time."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="echo-ai" className="bg-gradient-to-b from-primary/5 to-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Echo AI</h2>
              <p className="text-muted-foreground mb-6">
                Our AI assistant helps you understand your financial data, identify trends,
                and make better decisions. Simply upload your data or ask questions in
                natural language.
              </p>
              <ul className="space-y-2">
                {[
                  "Natural language data queries",
                  "Automated trend detection",
                  "Predictive financial modeling",
                  "Custom report generation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/workspace">
                  <Button>Try Echo AI Now</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="glass-card p-6 rounded-2xl overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="glass-card p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Echo AI</span>
                    </div>
                    <p className="text-sm">
                      I've analyzed your quarterly financial data and noticed a 15% increase in operational costs
                      compared to the previous quarter. Would you like me to investigate the main contributors?
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground p-4 rounded-2xl max-w-[80%]">
                      <p className="text-sm">
                        Yes, please show me the top expense categories that increased the most.
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Echo AI</span>
                    </div>
                    <p className="text-sm mb-3">
                      Here are the top 3 expense categories with the highest increases:
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      1. Marketing: +28% ($245,000)<br />
                      2. Cloud Infrastructure: +22% ($180,000)<br />
                      3. Employee Benefits: +18% ($120,000)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <PieChart className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">Fenty</span>
              <span className="text-xs text-muted-foreground">© 2025</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
