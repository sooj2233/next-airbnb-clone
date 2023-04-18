"use client"

import React, { FC, useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

interface UserMenuProps {
  
}

const UserMenu: FC<UserMenuProps> = ({  }) => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
},[]);
  return (
   <div className="relative">
    <div className="flex items-center gap-3">
      <div className="hidden md:block py-2 px-4 text-sm font-semibold rounded-full hover:bg-orange-300 transition cursor-pointer"> Airbnb your name</div>
      <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
        onClick={toggle}
      >
        <AiOutlineMenu />
        <div className="hidden md:block"><Avatar/></div>
      </div>
    </div>
    {isOpen && (
          <div className=" w-[40vw] md:w-3/4 absolute top-12 right-0 bg-white overflow-hidden text-sm">
               <div className="flex flex-col cursor-pointer">
               <MenuItem onClick={function (): void {
              throw new Error('Function not implemented.')
            } } label={'Sign in'}/>
               </div>
          </div>
     )}
   </div>
  )
}

export default UserMenu;