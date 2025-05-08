
import { ReactNode, useState } from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, FileText, PieChart, Settings, LogOut, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

interface SidebarItemProps {
  icon: typeof Home;
  label: string;
  href: string;
  isCollapsed: boolean;
}

function SidebarItem({ icon: Icon, label, href, isCollapsed }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive ? 
          "bg-sidebar-accent text-sidebar-accent-foreground" : 
          "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
}

export function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="flex min-h-screen">
      <div 
        className={cn(
          "bg-sidebar border-r border-border transition-all duration-300",
          isCollapsed ? "w-[60px]" : "w-[240px]"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <PieChart className="h-5 w-5 text-white" />
              </div>
              {!isCollapsed && <span className="font-semibold">Fenty</span>}
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto" 
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              <SidebarItem 
                icon={Home} 
                label="Dashboard" 
                href="/dashboard" 
                isCollapsed={isCollapsed} 
              />
              <SidebarItem 
                icon={FileText} 
                label="Workspace" 
                href="/workspace" 
                isCollapsed={isCollapsed} 
              />
              <SidebarItem 
                icon={PieChart} 
                label="Reports" 
                href="/reports" 
                isCollapsed={isCollapsed} 
              />
              <SidebarItem 
                icon={Users} 
                label="About" 
                href="/about" 
                isCollapsed={isCollapsed} 
              />
              <SidebarItem 
                icon={Settings} 
                label="Settings" 
                href="/settings" 
                isCollapsed={isCollapsed} 
              />
            </nav>
          </div>
          <div className="border-t p-2">
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium">JS</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium">John Smith</div>
                    <div className="text-muted-foreground">Pro Plan</div>
                  </div>
                </div>
              )}
              <div className={cn("ml-auto flex items-center gap-2", isCollapsed && "mx-auto")}>
                {!isCollapsed && <ThemeToggle />}
                <Button variant="ghost" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
