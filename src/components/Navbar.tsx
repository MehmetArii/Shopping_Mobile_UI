import { Menu, User, Waves } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 bg-white">
      <Menu />
      <div className="flex items-center gap-2">
        <Waves color="#1111ff"/>
        <span className="font-bold text-2xl">WoodMart.</span>
      </div>
      <User />
    </div>
  );
}

export default Navbar