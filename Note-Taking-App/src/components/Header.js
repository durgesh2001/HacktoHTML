import React from 'react';

const Header = ({handleToggleBtn}) => {
    return (
        <div className="header flex items-center justify-between pt-5">
            <h1 className="">Notes</h1>
            <button className="toggle bg-neutral-300 border-none
                 rounded-xl px-4 py-[2px] font-semibold
                 hover:bg-neutral-400 cursor-pointer"
                 onClick={()=> handleToggleBtn((previousDarkMode)=> !previousDarkMode)}
                 >Toggle</button>
        </div>
    )
}

export default Header;