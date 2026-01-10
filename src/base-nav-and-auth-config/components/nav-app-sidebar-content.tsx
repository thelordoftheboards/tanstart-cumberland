import { BookOpen, Bot, Frame, Map as IconMap, PieChart, Settings2, SquareTerminal } from 'lucide-react';
import { SidebarContent } from '~/components/ui/sidebar';
import { NavMain } from '../../base-nav-and-auth/components/nav-main';
import { NavProjects } from '../../base-nav-and-auth/components/nav-projects';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Cumberland',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Website Index',
          url: '/',
        },
        {
          title: 'Dashboard Index',
          url: '/dashboard/',
        },
        {
          title: 'Layout Example',
          url: '/dashboard/cumberland/example-layout',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: IconMap,
    },
  ],
};

export function NavAppSidebarContent() {
  return (
    <SidebarContent>
      <NavMain items={data.navMain} />
      <NavProjects projects={data.projects} />
    </SidebarContent>
  );
}
