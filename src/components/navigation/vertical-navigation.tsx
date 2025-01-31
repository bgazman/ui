// vertical-navigation.tsx
import React from 'react';
import Box from '@components/box';
import VerticalNavItem from '@components/navigation/vertical-nav-item';
import { NavItem, NavigationVariant } from './navigation';

interface VerticalNavigationProps {
  navItems: NavItem[];
  className?: string;
  variant?: NavigationVariant; // Update this line
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ navItems, className, variant = 'default' }) => {
  return (
    <Box as="nav" className={`w-64 bg-[var(--bg-primary)] shadow-lg rounded-lg p-4 ${className}`}>
      <div className="space-y-2">
        {navItems.map((item, index) => (
          <VerticalNavItem key={index} item={item} variant={variant} />
        ))}
      </div>
    </Box>
  );
};

export default VerticalNavigation;