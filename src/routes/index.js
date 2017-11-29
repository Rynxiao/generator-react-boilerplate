import asyncTemplate from './async.template';

const AsyncApp = asyncTemplate(() => import("../containers/App"));
const AsyncHome = asyncTemplate(() => import("components/Home"));
const AsyncChild = asyncTemplate(() => import("components/Child"));
const AsyncGrandChild = asyncTemplate(() => import("components/GrandChild"));

const routes = [
    {
        component: AsyncApp,
        routes: [
            {
                path: '/home',
                component: AsyncHome
            },
            {
                path: '/child/:id',
                component: AsyncChild,
                routes: [
                    {
                        path: '/child/:id/grand-child',
                        component: AsyncGrandChild
                    }
                ]
            }
        ]
    }
];

export default routes;
