import { lazy } from 'react';
export default {
    Home: lazy(() => import('./Home')),
    Animate: lazy(() => import('./Animate')),
    Buttons: lazy(() => import('./Buttons')),
    EditorCustom: lazy(() => import('./EditorCustom'))
};
