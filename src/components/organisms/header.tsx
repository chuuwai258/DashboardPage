import SearchBar from '../molecules/searchBar'
import Image from '#/lib/costant/images'
import '#/styles.css'
import { SidebarTrigger } from '../atoms/sidebar'

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center h-[95px] lg:h-[85px]  md:mx-10 lg:mx-15  ">
        <div className="flex items-center gap-5">
          <SidebarTrigger className='sm:hidden'/>

          <h1 className="text-primary2 text-[25px] text-primary2 font-semibold">
            Document
          </h1>
        </div>

        <div className="flex  md:flex-row lg:flex-row items-center gap-2 lg:gap-5 mb-3 lg:mb-0">
          <SearchBar />
          <img
            src={Image.headerSetting}
            alt="headeseSettingImg"
            className="bg-primary1 size-[37px] p-2 rounded-full"
          />
          <img
            src={Image.headerNoti}
            alt="headerNotiImg"
            className="bg-primary1 size-[37px] p-2 rounded-full"
          />
          <img
            src={Image.profile}
            alt="profile"
            className="size-10 lg:size-12"
          />
        </div>
      </div>
    </>
  )
}

export default Header
