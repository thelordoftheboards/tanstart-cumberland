import { createFileRoute } from '@tanstack/react-router';
import { LayoutWithSidebar } from '~/main-sidebar/components/layout-with-sidebar';

export const Route = createFileRoute('/(authenticated)/dashboard')({
  component: LayoutWithSidebar,
});
