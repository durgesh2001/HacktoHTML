import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({handleSearchNote}) => {
    return (
        <div className="search flex items-center bg-[rgb(233,233,233)] rounded-lg p-1 my-5 ">
            <MdSearch className="w-7 h-7 " />
            <input onChange={(event)=> handleSearchNote(event.target.value)}
             className="bg-[rgb(233,233,233)] border-none focus:outline-none w-9/10"
              type="text" placeholder="Type to search . . ."/>
        </div>
    )
};
export default Search;