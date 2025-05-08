
import { useState } from "react";
import { motion } from "framer-motion";
import { WorkspaceLayout } from "@/components/layouts/workspace-layout";
import { Button } from "@/components/ui/button";
import { FileUploadArea } from "@/components/file-upload-area";
import { ChartContainer } from "@/components/chart-container";
import { AiChat } from "@/components/ai-chat";
import { Download, Share2, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Workspace = () => {
  const [hasData, setHasData] = useState(false);

  const handleFileUpload = (files: File[]) => {
    setHasData(true);
  };

  return (
    <WorkspaceLayout>
      <div className="h-full">
        <div className="p-4 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Financial Analysis Workspace</h1>
              <p className="text-sm text-muted-foreground">
                Upload data to start analysis
              </p>
            </div>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Export <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="flex flex-col gap-1">
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Download className="mr-2 h-4 w-4" /> PNG
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Download className="mr-2 h-4 w-4" /> CSV
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Download className="mr-2 h-4 w-4" /> PDF
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-73px)]">
          {/* Left column - Data input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="border-r p-4 lg:col-span-1 overflow-auto h-full"
          >
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Input Data</h2>
              <FileUploadArea onFileUpload={handleFileUpload} />
            </div>
            <div className="h-[calc(100%-200px)]">
              <AiChat />
            </div>
          </motion.div>

          {/* Right column - Data output */}
          {hasData ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-auto h-full"
            >
              <div className="h-[calc(50vh-73px)]">
                <ChartContainer 
                  title="Revenue Analysis" 
                  position="top-left" 
                />
              </div>
              <div className="h-[calc(50vh-73px)]">
                <ChartContainer 
                  title="Expense Breakdown" 
                  position="top-right" 
                />
              </div>
              <div className="h-[calc(50vh-73px)]">
                <ChartContainer 
                  title="Profit Margins" 
                  position="bottom-left" 
                />
              </div>
              <div className="h-[calc(50vh-73px)]">
                <ChartContainer 
                  title="Growth Projection" 
                  position="bottom-right" 
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 flex items-center justify-center p-6"
            >
              <div className="text-center max-w-md">
                <div className="rounded-full bg-muted/50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
                </div>
                <h2 className="text-xl font-semibold mb-2">No Data Available</h2>
                <p className="text-muted-foreground mb-4">
                  Upload a CSV or JSON file from the panel on the left to begin 
                  visualizing your financial data.
                </p>
                <p className="text-sm text-muted-foreground">
                  You can also ask Echo AI to generate sample data for demonstration purposes.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default Workspace;
