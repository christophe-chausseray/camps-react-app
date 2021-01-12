import React from 'react';
import { SidebarContext } from './SidebarContext';
import { useSidebar } from '../hooks';

type SidebarProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null;
}

function SidebarProvider({ children } : SidebarProviderProps) {
  const sidebarValue = useSidebar();

  return (
    <SidebarContext.Provider value={sidebarValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider }
