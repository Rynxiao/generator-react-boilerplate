import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import MyLoadingComponent from '../components/MyLoadingComponent';

const AsyncApp = Loadable({
    loader: () => import("../containers/App"),
    loading: MyLoadingComponent
});

const AsyncApp1 = Loadable({
    loader: () => import("components/App"),
    loading: MyLoadingComponent
});

const AsyncHome = Loadable({
    loader: () => import("components/Home"),
    loading: MyLoadingComponent
});

const AsyncChild = Loadable({
    loader: () => import("components/Child"),
    loading: MyLoadingComponent
});

const AsyncGrandChild = Loadable({
    loader: () => import("components/GrandChild"),
    loading: MyLoadingComponent
});

const routes = [
    { component: AsyncApp,
        routes: [
            { path: '/',
                exact: true,
                component: AsyncApp1
            },
            { path: '/app',
                component: AsyncHome
            },
            { path: '/child/:id',
                component: AsyncChild,
                routes: [
                    { path: '/child/:id/grand-child',
                        component: AsyncGrandChild
                    }
                ]
            }
        ]
    }
];

export default routes;
