import { useState } from "react";
import { Counter } from "./Counter";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Set the initial state of the search bar to be collapsed
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleSelect = (ranges) => {
    if (ranges.selection.startDate !== startDate) { // If the start date is not equal to the current start date
      setStartDate(ranges.selection.startDate);
    }
    if (ranges.selection.endDate !== endDate) {
      setEndDate(ranges.selection.endDate);
    }

    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const toggleExpanded = () => {
    setIsSearchFocused((prevIsSearchFocused) => !prevIsSearchFocused); // If the previous state is true, set it to false, and vice versa
  }

  // ######## Comments about the serveral css
  // self-center: Aligns the container to the center.
  // mt-8: Adds a top margin.
  // w-3/4: Sets the width to three-quarters of the container.
  // px-4: Padding on the x-axis.

  return (
    <div className="flex flex-row self-center rounded-full border p-2 mt-8">
      <button
        className="border-r px-4 text-left"
        onClick={() => setIsSearchFocused(true)}
      >
        <p className="font-bold text-black">Where</p>
        {
          isSearchFocused ? (
            <input type="text" placeholder="Search Destinations" className="text-slate-800 bg-transparent border-none outline-none" />
          ) :
            (<p className="text-slate-600">Search Destination</p>)
        }
      </button>
      <div className="dropdown dropwdown-end px-4 border-r">
        <label tabIndex={1}>
          <p className="font-bold text-black">Dates</p>
          <p className="text-slate-600">Select Ranged</p>
        </label>
        <div tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-white">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FF385C"]}
          />
        </div>
      </div>
      <div className="dropdown dropwdown-end px-4 flex flex-row gap-3 ">
        <label tabIndex={2}>
          <p className="font-bold text-black">Who</p>
          <p className="text-slate-600">Add Guests</p>
        </label>
        <div
          tabIndex={2}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Counter label="Adults" />
        </div>
      </div>
      <Link
        href="/search/results"
        className="px-4 text-white rounded-full bg-primary p-3 flex justifiy-center gap-3 flex-row"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span>Search</span>
      </Link>
    </div>
  )
};

export default SearchBar;