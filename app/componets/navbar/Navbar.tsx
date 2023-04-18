
import React, { FC } from 'react'
import Container from '../Container';
import Search from './Search';
import Logo from './Logo';
import UserMenu from './UserMenu';
import Categories from './Categories';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  return (
    <div className="fixed w-full bg-white s-10 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <UserMenu/>
          </div>
        </Container>
      </div>
    <Categories/>
    </div>
  )
}

export default Navbar;