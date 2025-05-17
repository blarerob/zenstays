import React from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import { NAVBAR_HEIGHT } from "../lib/constants";
import Navbar from "../components/Navbar";
const DashboardLayout = ({ children }) => {
    return (<SidebarProvider>
    <div className='min-h-screen w-full bg-primary-100'>
      <Navbar />
      <div style={{ paddingTop: `${NAVBAR_HEIGHT}px }}` }}>
        <main className="flex">
            <div className='flex-grow trainstion-all duration-300'>
                {children}
            </div>
        </main>
      </div>
  </div>
      </SidebarProvider>);
};
export default DashboardLayout;
