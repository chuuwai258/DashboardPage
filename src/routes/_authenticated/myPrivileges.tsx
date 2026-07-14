import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/myPrivileges')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/myPrivileges"!</div>
}
