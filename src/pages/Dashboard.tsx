
import { motion } from "framer-motion";
import { WorkspaceLayout } from "@/components/layouts/workspace-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, TrendingUp, ChevronRight, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const reports = [
  {
    id: 1,
    title: "Q2 Financial Analysis",
    date: "2 days ago",
    status: "Completed",
    insights: 4,
  },
  {
    id: 2,
    title: "Revenue Projection 2025",
    date: "1 week ago",
    status: "Completed",
    insights: 7,
  },
  {
    id: 3,
    title: "Cost Optimization Study",
    date: "2 weeks ago",
    status: "Completed",
    insights: 3,
  }
];

const Dashboard = () => {
  return (
    <WorkspaceLayout>
      <div className="p-6">
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's an overview of your financial analysis workspace
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Active Reports",
              value: "3",
              trend: "+2 this month",
              icon: FileText,
              color: "text-blue-500",
            },
            {
              title: "Total Insights",
              value: "14",
              trend: "+5 from last month",
              icon: TrendingUp,
              color: "text-green-500",
            },
            {
              title: "Recent Activity",
              value: "Today",
              trend: "Last edit: 2 hours ago",
              icon: Clock,
              color: "text-amber-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                    </div>
                    <div className={`${stat.color} bg-muted/50 p-3 rounded-full h-fit`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Reports</h2>
            <Button variant="outline" size="sm">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Link to={`/report/${report.id}`}>
                  <Card className="glass-card h-full cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-muted/50 h-32 rounded-lg mb-4 flex items-center justify-center">
                        <FileText className="h-10 w-10 text-muted-foreground/50" />
                      </div>
                      <h3 className="font-medium mb-1">{report.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{report.date}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                          {report.status}
                        </span>
                        <span>{report.insights} insights</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link to="/workspace">
                <Card className="border-dashed h-full flex items-center justify-center hover:bg-muted/50 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-muted/50 p-4 mb-4">
                      <PlusCircle className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-1">Create New Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload data and start analyzing
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default Dashboard;
