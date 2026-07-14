import MainLayout from '#/components/templates/main-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: MainLayout,
})
