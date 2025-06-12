import React from 'react'; 
import NavMain from '../../Components/Navbar/NavMain'; 

const NavDashBoard = () => {
  return (
    <NavMain
      title="Skill Census . AI "
      showHostDropdown={false}
      showJoinDropdown={false}
      extraMenuOptions={["Logout"]} 
    />
  );
};

export default NavDashBoard;