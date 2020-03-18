import { lazy } from 'react';
export default {
    Home: lazy(() => import('./Home'))
    // Buttons: lazy(import('./Buttons')),
    // Icons: lazy(import('./Icons')),
    // Loading: lazy(import('./Loading')),
    // Modals: lazy(import('./Modals')),
    // Notifications: lazy(import('./Notifications')),
    // Tabs: lazy(import('./Tabs')),
    // Banners: lazy(import('./Banners')),
    // Slate: lazy(import('./Slate')),
};
