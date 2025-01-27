import React, { createContext, useCallback, useContext, useState } from "react";

            const LayoutContext = createContext<{
              layout: string | null;
              dynamicLayout: string | null;
              isOpen: boolean;
              setLayout: React.Dispatch<React.SetStateAction<string | null>>;
              setDynamicLayout: React.Dispatch<React.SetStateAction<string | null>>;
              onToggle: () => void;
            } | undefined>(undefined);

            export const useLayout = () => {
              const context = useContext(LayoutContext);
              if (!context) throw new Error('useLayout must be used within LayoutProvider');
              return context;
            };

            export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
              const [isOpen, setIsOpen] = useState(false);
              const [layout, setLayout] = useState<string | null>(null);
              const [dynamicLayout, setDynamicLayout] = useState<string | null>(null);
              const onToggle = useCallback(() => {
                setIsOpen(prev => !prev);
              }, []);

              return (
                  <LayoutContext.Provider
                      value={{
                        layout,
                        dynamicLayout,
                        isOpen,
                        setLayout,
                        setDynamicLayout,
                        onToggle,
                      }}
                  >
                    <div data-layout={layout}>
                      {children}
                    </div>
                  </LayoutContext.Provider>
              );
            };