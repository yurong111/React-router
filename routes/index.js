import Login from 'bundle-loader?lazy&name=app-Home!../view/Login'
import Home from 'bundle-loader?lazy&name=app-Home!../view/Home'
import AboutUs from 'bundle-loader?lazy&name=app-AboutUs!../view/AboutUs'

const routes = [{
    path: '/',
    component: Home,
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/aboutUs',
            component: AboutUs,
        },
    ]
}];

export default routes;

export function renderRouters() {
    let res = buildRouters(routes);
    return res;
}

/*展开所有路由*/
function buildRouters(routes, parentRoute) {
    let routesArr = [];
    routes.map((route, i) => {
        if (parentRoute != null && parentRoute.path != '/') {
            route.path = parentRoute.path + route.path;
        }
        if (route.component)
            routesArr.push(route)
        if (route.routes)
            routesArr = [...routesArr, ...buildRouters(route.routes, route)]
    });
    return routesArr;
}