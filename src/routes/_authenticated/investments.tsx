import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/investments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/investments"!</div>
}
