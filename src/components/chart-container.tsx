
import { useState } from "react";
import { LineChart, BarChart, ScatterChart, AreaChart } from "recharts";
import { 
  Line, Bar, Scatter, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Sample data
const data = [
  { name: 'Jan', value: 400, value2: 240, value3: 200 },
  { name: 'Feb', value: 300, value2: 139, value3: 220 },
  { name: 'Mar', value: 200, value2: 980, value3: 290 },
  { name: 'Apr', value: 278, value2: 390, value3: 200 },
  { name: 'May', value: 189, value2: 480, value3: 280 },
  { name: 'Jun', value: 239, value2: 380, value3: 250 },
  { name: 'Jul', value: 349, value2: 430, value3: 210 },
];

type ChartType = 'line' | 'bar' | 'scatter' | 'area';

interface ChartContainerProps {
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function ChartContainer({ title, position }: ChartContainerProps) {
  const [chartType, setChartType] = useState<ChartType>('line');

  const handleDownload = () => {
    toast.success(`Downloaded ${title} chart`);
  };

  const handleShare = () => {
    toast.success(`Sharing link copied to clipboard`);
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#4285F4" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="value2" stroke="#34A853" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }} />
              <Legend />
              <Bar dataKey="value" fill="#4285F4" radius={[4, 4, 0, 0]} />
              <Bar dataKey="value2" fill="#34A853" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'scatter':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="value" name="Value 1" />
              <YAxis dataKey="value2" name="Value 2" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }} />
              <Legend />
              <Scatter name="Data Points" data={data} fill="#4285F4" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }} />
              <Legend />
              <Area type="monotone" dataKey="value" stackId="1" stroke="#4285F4" fill="#4285F4" fillOpacity={0.6} />
              <Area type="monotone" dataKey="value2" stackId="1" stroke="#34A853" fill="#34A853" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const cycleChartType = () => {
    const types: ChartType[] = ['line', 'bar', 'scatter', 'area'];
    const currentIndex = types.indexOf(chartType);
    const nextIndex = (currentIndex + 1) % types.length;
    setChartType(types[nextIndex]);
  };

  return (
    <div className="glass-card h-full flex flex-col p-4 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-sm">{title}</h3>
        <div className="flex items-center gap-1">
          <Button onClick={handleDownload} size="icon" variant="ghost" className="h-8 w-8">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
          <Button onClick={handleShare} size="icon" variant="ghost" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button onClick={cycleChartType} size="icon" variant="outline" className="h-8 w-8">
            {position.includes('top') ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            <span className="sr-only">Change chart type</span>
          </Button>
        </div>
      </div>
      <div className="flex-1">
        {renderChart()}
      </div>
    </div>
  );
}
