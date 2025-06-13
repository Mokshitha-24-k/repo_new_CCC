import React from 'react';
import NavMain from '../../Components/Navbar/NavMain';

const Home = () => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#f5f5f5',
  };

  const buttonBaseStyle = {
    height: '48px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s ease',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    border: 'none',
    boxShadow: '0px 1px 4px rgba(0,0,0,0.1)',
  };

  const leftButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#1976d2',
    color: 'white',
    borderTopLeftRadius: '999px',
    borderBottomLeftRadius: '999px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    position: 'relative',
    paddingRight: '60px', // space for inner
    zIndex: 1,
  };

  const innerButtonStyle = {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '36px',
    padding: '0 12px',
    backgroundColor: 'white',
    color: '#1976d2',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '1px solid #1976d2',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  };

  const rightButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: 'white',
    color: '#1976d2',
    border: '2px solid #1976d2',
    borderRadius: '999px',
    marginLeft: '-30px',
    zIndex: 2, 
  };

  return (
    <div>
      <NavMain />
      <div style={containerStyle}>
        {/* Left Button */}
        <div style={{ position: 'relative' }}>
          <button style={leftButtonStyle}>
            For Organizers <span style={{ fontWeight: 'bold' }}>→</span>
          </button>
          {/* Inner pill inside left button */}
          <div style={innerButtonStyle}>hi</div>
        </div>

        {/* Right Button overlaps inner pill */}
        <button style={rightButtonStyle}>
          For Participants <span style={{ fontWeight: 'bold' }}>→</span>
        </button>
      </div>
    </div>
  );
};

export default Home;