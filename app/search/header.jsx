"use client" // This file is client-side only
import { useState } from "react"
import SearchBar from "./components/SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false); // Set the initial state of the header to be collapsed

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded); // If the previous state is true, set it to false, and vice versa
  }

  const headerContainerClasses = clsx(
    "container",
    "mx-auto",
    "flex",
    "justify-between",
    "bg-white",
    "py-8",
    {
      "h-[7.5rem]" : !isExpanded,
      "h-[13rem]" : isExpanded
    }
  )

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "rounded-full",
    "p-4",
    "justify-center",
    "items-center",
    "border",
    "drop-shadow-md",
    "bg-white",
    {
      "border-b-0" : !isExpanded,
      "border-b-8" : isExpanded,
    }
  );



  // COmments about the several functions : 
  // ######## Header ########
  // container : This is a Tailwind CSS utility class that centers the content and sets a maximum width.
  // fixed : This is a Tailwind CSS utility class that fixes the header to the top of the screen.
  // px-4: This class adds padding on the left and right.
  // top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2: These classes center the icon within the div by translating it by half of its own width and height.

  return (
    <header className="flex border-b bg-white z-50 fixed w-full"> 
      <div className={headerContainerClasses}>
        <div className="text-red-500">airbnb</div>
        {isExpanded ? (
          <SearchBar />
        ) : (
          <button
            onClick={toggleExpanded}
            className={searchContainerClasses}
          >
            <div className="input flex items-center border-r bg-white text-black">
              <p>Anywhere</p>
            </div>
            <div className="input flex items-center border-r bg-white text-black">
              <p>Anydate</p>
            </div>
            <div className="input flex items-center border-r bg-white text-black">
              <p>Add Guest</p>
            </div>
            <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">
              <MagnifyingGlassIcon className="h-4 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </button>
        )}
        <div>user</div>
      </div>
    </header>
  )
}