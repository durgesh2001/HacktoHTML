import { MdAddCircleOutline } from 'react-icons/md'

const Sidebar = () => {

  const colors = ['bg-fuchsia-400', 'bg-rose-400', 'bg-emerald-400', 'bg-purple-400', 'bg-sky-500'];
   
    return(
      <div>
        <MdAddCircleOutline className="w-7 h-7 mr-1"/>
                <ul>
                    {colors.map((index, items) => (
                        <li
                            key={index}
                            className={`flex flex-rows items-center colorlist ${items}`}
                        />
                    ))}
                </ul>
      </div>
    );
}

export default Sidebar;