import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from '../page';
import routeConfig from './config';
export default props => {
    function getRoute(ele) {
        const getC = (obj, title) => {
            let Component = AllComponents[obj.component];
            title = title ? ['首页', title] : obj.title === '首页' ? ['首页'] : ['首页', obj.title];
            let navTitle = title ? [...title, obj.title] : title;
            return (
                <Route
                    exact
                    path={obj.path}
                    render={props => {
                        const WrapComponent = (
                            <DocumentTitle title={obj.title}>
                                <Component {...props} navTitle={navTitle} />
                            </DocumentTitle>
                        );
                        return WrapComponent;
                    }}
                />
            );
        };
        return ele.component ? getC(ele) : ele.subs.map(item => getC(item, ele.title));
    }
    return (
        <Suspense fallback="loading...">
            <Switch>{Object.keys(routeConfig).map(ele => routeConfig[ele].map(getRoute))}</Switch>
        </Suspense>
    );
};
