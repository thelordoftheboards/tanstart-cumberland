import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '~/tanstart-cumberland-examples/components/home-page';

export const Route = createFileRoute('/')({
  component: HomePage,
});
