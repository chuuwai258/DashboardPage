import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div>
      <button className='flex items-center gap-2 lg:gap-4 bg-primary1 rounded-full lg:py-2 p-2 '>
        <Search  className='text-[#8BA3CB]'/>
        <input type="text" placeholder="Search for something" className='outline-none' />
      </button>
    </div>
  )
}

export default SearchBar
