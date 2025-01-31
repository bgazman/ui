import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LinkComponent from '@components/link/link';
import { NavItem, NavigationVariant } from './navigation';

interface VerticalNavItemProps {
  item: NavItem;
  variant: NavigationVariant;
}

const VerticalNavItem: React.FC<VerticalNavItemProps> = ({ item, variant }) => {
  const hasItems = item.items && item.items.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (variant === 'default') {
    return (
      <div className="w-full">
        {hasItems ? (
          <div>
            <button
              onClick={toggleAccordion}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-alt1)] hover:text-[var(--text-secondary)] rounded-md"
            >
              <span className="font-medium">{item.label}</span>
              {isOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {item.items?.map((subItem, index) => (
                  <div key={index}>
                    {subItem.items ? (
                      <VerticalNavItem item={subItem} variant={variant} />
                    ) : (
                      <LinkComponent href={subItem.href || '#'} label={subItem.label} isActive={false} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <LinkComponent href={item.href || '#'} label={item.label} isActive={false} />
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="compact-item group relative">
        {item.href ? (
          <LinkComponent href={item.href || '#'} label={item.label} isActive={false} className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors px-2 py-1 text-sm" />
        ) : (
          <span className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors px-2 py-1 text-sm">{item.label}</span>
        )}
        {hasItems && (
          <div className="compact-subitems hidden group-hover:block absolute left-0 top-full bg-[var(--bg-primary)] shadow-lg z-10">
            {item.items?.map((subItem, index) => (
              <div key={index} className="group relative">
                <VerticalNavItem item={subItem} variant={variant} />
                {subItem.items && (
                  <div className="compact-subitems hidden group-hover:block absolute left-full top-0 bg-[var(--bg-primary)] shadow-lg z-10">
                    {subItem.items.map((childItem, childIndex) => (
                      <VerticalNavItem key={childIndex} item={childItem} variant={variant} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'expanded') {
    return (
      <div className="expanded-item">
        <div className="expanded-header">
          {item.href ? (
            <LinkComponent href={item.href || '#'} label={item.label} isActive={false} />
          ) : (
            <span className="font-medium">{item.label}</span>
          )}
        </div>
        {hasItems && (
          <div className="expanded-content pl-4">
            {item.items?.map((subItem, index) => (
              <VerticalNavItem key={index} item={subItem} variant={variant} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default VerticalNavItem;