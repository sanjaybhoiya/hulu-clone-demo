import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,

} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
          
          <Image
                className="object-contain"
              src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
              width={200}
            height={100}
          />

          {/* left section */}
<div className="flex flex-grow justify-end space-x-10 mx-2xl">
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
      <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
      <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
         </div>
      
      {/* right section */}

      </header>
  )
}

export default Header;