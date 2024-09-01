import React from 'react'
import SearchBar from './SearchBar'

export const NavHeader = () => {
  return (
    <div className="nav-header  flex flex-row w-full items-center  border-box lg:px-8">
      <img className="header-content" src="/assets/logo.svg" alt="logo-img" />
      <div className="search-box-container w-full">
        <div className="w-fit mx-auto">

       <SearchBar/>
        </div>
      </div>
      <img
        className="header-content hamburger  mr-2 lg:hidden"
        src="./assets/menu.svg"
        alt="menu-button"
      />
    </div>
  )
}
