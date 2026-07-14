import { Link } from '@tanstack/react-router'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../components/atoms/sidebar'
import {
  BadgeDollarSign,
  BanknoteArrowUpIcon,
  BarChart3,
  HandCoinsIcon,
  House,
  Lightbulb,
  Settings,
  User2,
  WrenchIcon,
} from 'lucide-react'
const dashboardItems = [
  { name: 'Dashboard', url: '/dashboard', icon: House },
  { name: 'Transactions', url: '/transactions', icon: BadgeDollarSign },
  { name: 'Accounts', url: '/account', icon: User2 },
  { name: 'Investments', url: '/investments', icon: BarChart3 },
  { name: 'Credit Cards', url: '/creditCard', icon: BanknoteArrowUpIcon },
  { name: 'Loans', url: '/loans', icon: HandCoinsIcon },
  { name: 'Services', url: '/services', icon: WrenchIcon },
  { name: 'My Provilleges', url: '/myPrivileges', icon: Lightbulb },
  { name: 'Setting', url: '/setting', icon: Settings },
]

const AppSidebarContent = () => {
  return (
    <>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupAction></SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className=" mt-3 md:space-y-8 lg:space-y-5  ">
              
  {dashboardItems.map((item) => (
    <SidebarMenuItem key={item.name}>
      <SidebarMenuButton className="m-0 bg-none hover:bg-transparent">
        <Link
          to={item.url}
          className="text-foreground flex items-center gap-4 text-[16px] relative w-full"
          activeProps={{
            className: 'text-primary5 font-bold ',
          }}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-2 top-0 bottom-0 w-[5px] h-[25px] bg-primary5 rounded-md " />
              )}

              <item.icon size={20} />
              <span className='md:text-2xl lg:text-xl '>{item.name}</span>
            </>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))}
</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}

export default AppSidebarContent
