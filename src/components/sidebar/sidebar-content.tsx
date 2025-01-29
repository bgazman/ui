import Button from "@components/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import SidebarItem from "@components/sidebar/sidebar-item.tsx";
import Box from "@components/box";
import {NavItem} from "@components/navigation.tsx";
import {useSidebar} from "@components/sidebar/sidebar-context.tsx";

type SidebarSectionProps = {
    section: { label: string; items: NavItem[] };
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ section }) => {
    const { openSections, toggleSection } = useSidebar();

    return (
        <Box className="space-y-1">
            <Button
                onClick={() => toggleSection(section.label)}
                className="w-full flex items-center justify-between p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-[var(--bg-alt1)]"
                style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-primary)',
                }}
            >
                {section.label}
                {openSections.has(section.label) ? (
                    <ChevronDown className="w-4 h-4" />
                ) : (
                    <ChevronRight className="w-4 h-4" />
                )}
            </Button>

            {openSections.has(section.label) && (
                <ul className="ml-4 space-y-1">
                    {section.items.map((item, itemIndex) => (
                        <SidebarItem
                            key={itemIndex}
                            item={item}
                        />
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default SidebarSection;