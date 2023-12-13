import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ReactNode } from 'react';

interface HideTabsProps {
  children: ReactNode;
}

const HideTabs: React.FC<HideTabsProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    console.log('this is location:', location);
  }, [location]);

  return ( children )
};

export default HideTabs;