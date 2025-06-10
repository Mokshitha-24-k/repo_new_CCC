import React from 'react';
import SidebarLayout from './Components/Sidebar/SidebarLayout';
import NavLayout from './Components/Navbar/NavLayout';
import FilterBarLayout from './Components/FilterBar/FilterBarLayout';
import BodyLayout from './Components/Body/BodyLayout';
function Layout() {
  
  return (
    <div className="app-layout">
      <NavLayout />
      

      <div style={{ display: 'flex', marginTop: '64px', height: 'calc(100vh - 64px)' }}>
        <div style={{ width: '285px', backgroundColor: '#e0f7fa' }}>
          <SidebarLayout />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: '#f5f5f5'}}>
            <FilterBarLayout />
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            <BodyLayout />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
