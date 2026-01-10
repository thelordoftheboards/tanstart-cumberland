import { type ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { NavAppSidebar } from './nav-app-sidebar';

export function LayoutWithSidebar({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <NavAppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
