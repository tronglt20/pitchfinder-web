import React, {useState} from "react";
import SideBarItem from "./sideBarItem";
import AvatarMenu from "./avatarMenu";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const sideBarItems = [
    {
      name: "dashboard",
      description: "Dashboard",
    },
    {
      name: "order",
      description: "Order",
    },
    {
      name: "pitch",
      description: "Pitch",
    },
    {
      name: "customer",
      description: "Customer",
    },
    // {
    //   name: "testRedux",
    //   description: "Test Redux",
    // },
  ];

  return (
    <aside
			id="sidebar"
			className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full pt-10 px-3 pb-10 overflow-y-auto flex flex-col justify-between bg-white border-r-[1px] border-gray-200">
				<div>
					<Link to="/" className="flex items-center justify-center pl-2.5 mb-5">
						{/* <img src={logo} className="w-20 logo" alt="Logo" /> */}
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-900">
							FinJob
						</span>
					</Link>
          <ul className="space-y-2">
            {sideBarItems.map((element, index) => (
              <SideBarItem
                key={index}
                content={element.description}
                itemIndex={index}
                clickHandler={handleListItemClick}
                navigateTo={element.name}
                isSelected={index === selectedIndex}
            />
          ))}
        </ul>
				</div>
				<div className="flex justify-center">
					<AvatarMenu/>
				</div>
			</div>
		</aside>

  );
}
