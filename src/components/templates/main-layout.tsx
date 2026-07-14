import { Outlet } from '@tanstack/react-router'
import { SidebarProvider } from '../atoms/sidebar'
import AppSidebar from './app-sidebar'
import Header from '../organisms/header'

const MainLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header/>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}

export default MainLayout
