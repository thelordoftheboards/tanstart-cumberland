import { NavHeaderBreadcrumbs } from '~/base-nav-and-auth/components/nav-header-breadcrumbs';

export function PageExampleLayout() {
  return (
    <>
      <NavHeaderBreadcrumbs
        arrBreadcrumbs={[
          { title: 'Website', url: '/' },
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'Layout' },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
