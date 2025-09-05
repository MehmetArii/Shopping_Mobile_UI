import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="px-4 py-2 bg-blue-50">
      <div className="flex bg-white rounded-full border px-4 py-1 pr-1 border-gray-200">
        <input className="flex-1 px-1 outline-0" placeholder="Search for Products"/>
        <div className="rounded-full p-2 bg-blue-500">
          <Search color="white"/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar