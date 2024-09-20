import { BriefcaseIcon, GlobeAltIcon, PhoneIcon, PresentationChartBarIcon, UsersIcon } from '@heroicons/react/24/outline'

const Menu_Dashboard = "Dashboard";
const Menu_Users = "Alta Usuario";

const Default_Route = "/dashboard";

const MENU_ITEMS = [
    { label: Menu_Dashboard, id: 1, icon: 'presentation-chart-bar', path: '/dashboard' },
    { label: Menu_Users, id: 2, icon: 'users', path: '/users' },
];

// Mapping of hero icons
const iconMapping = {
    presentation_chart_bar: PresentationChartBarIcon,
    users: UsersIcon,
    globe_alt: GlobeAltIcon,
    briefcase: BriefcaseIcon,
    phone: PhoneIcon,
};

function getMenuItems() {
    return MENU_ITEMS;
}

function getMenuItemByLabel(label) {
    const items = MENU_ITEMS.find(menuItem => menuItem.label === label);
    return items;
}

function getMenuItemByPath(path) {
    const items = MENU_ITEMS.find(menuItem => menuItem.path === path);
    return items;
}

function getMenuIconMappingByLabel(iconName) {
    const iconNameMapping = replaceDashesWithUnderscores(iconName);
    return iconMapping[iconNameMapping];
}

function replaceDashesWithUnderscores(str) {
    return str.replace(/-/g, '_');
}

export { getMenuItems, getMenuItemByLabel, getMenuIconMappingByLabel, getMenuItemByPath, Menu_Dashboard, Menu_Users, Default_Route };