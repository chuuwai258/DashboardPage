import AppSidebarHeader from '../../features/sidebar/sidebarHeader'
import AppSidebarContent from '../../features/sidebar/sidebarContent'
import { Sidebar } from '../atoms/sidebar'

export default function AppSidebar() {
  return (
    <Sidebar >
      {/* header */}
      <AppSidebarHeader />

      {/* Content */}
      <AppSidebarContent />

    </Sidebar>
  )
}
