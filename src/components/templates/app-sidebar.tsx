import AppSidebarHeader from '../organisms/Sidebar/sidebarHeader'
import AppSidebarContent from '../organisms/Sidebar/sidebarContent'
import { Sidebar } from '../atoms/sidebar'

export default function AppSidebar() {
  return (
    <Sidebar>
      {/* header */}
      <AppSidebarHeader />

      {/* Content */}
      <AppSidebarContent />
    </Sidebar>
  )
}
