/** biome-ignore-all lint/suspicious/noArrayIndexKey: The breadcrumbs are not expected to dynamically change */
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { Separator } from '~/components/ui/separator';
import { SidebarTrigger } from '~/components/ui/sidebar';

export function NavHeaderBreadcrumbs({ arrBreadcrumbs }: { arrBreadcrumbs: Array<{ title: string; url?: string }> }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator className="mr-2 data-[orientation=vertical]:h-4" orientation="vertical" />

        <Breadcrumb>
          <BreadcrumbList>
            {arrBreadcrumbs.map((breadcrumb, ix) => (
              <Fragment key={ix}>
                <BreadcrumbItem className="hidden md:block">
                  {breadcrumb.url ? (
                    <BreadcrumbLink href={breadcrumb.url}>{breadcrumb.title}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink>{breadcrumb.title}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {arrBreadcrumbs.length - 1 > ix && <BreadcrumbSeparator className="hidden md:block" />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
