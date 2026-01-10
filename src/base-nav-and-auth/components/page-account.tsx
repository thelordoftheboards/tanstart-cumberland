import { Loader2 } from 'lucide-react';
import { Separator } from '~/components/ui/separator';
import { useSessions } from '../hooks/user-hooks';
import CardUser from './card-user';
import { OrganizationCard } from './organization-card';

export function PageAccount() {
  const { data, isLoading, error } = useSessions();

  if (isLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="text-center">
          <p className="mb-2 text-destructive text-sm">Error loading settings</p>
          <p className="text-muted-foreground text-xs">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-8 py-6">
      <div className="space-y-2 pl-16">
        <h1 className="font-bold text-3xl tracking-tight">Account</h1>
        <p className="text-muted-foreground">Manage your account, organization, and security settings</p>
      </div>

      <Separator />

      <div className="grid gap-8">
        <section className="space-y-4">
          <div className="mx-2 space-y-1">
            <h2 className="font-semibold text-xl">Organization</h2>
            <p className="text-muted-foreground text-sm">Manage your organization settings and member access</p>
          </div>
          <OrganizationCard activeOrganization={data?.organization?.data} session={data?.session?.data || null} />
        </section>

        <Separator />

        <section className="space-y-4">
          <div className="mx-2 space-y-1">
            <h2 className="font-semibold text-xl">Account</h2>
            <p className="text-muted-foreground text-sm">
              Manage your personal account settings and security preferences
            </p>
          </div>
          <CardUser activeSessions={data?.sessions?.data || []} />
        </section>
      </div>
    </div>
  );
}
