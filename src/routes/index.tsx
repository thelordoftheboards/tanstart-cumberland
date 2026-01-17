import { createFileRoute } from '@tanstack/react-router';
import { PageHome } from '~/tantsart-barren-examples/components/page-home';

export const Route = createFileRoute('/')({
  component: PageHome,
});
