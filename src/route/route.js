import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from '../page';
import routeConfig from './config';
export default props => {
    function getRoute(ele) {
        const getC = obj => {
            let Component = AllComponents[obj.component];
            return (
                <Route
                    exact
                    path={obj.path}
                    render={props => {
                        const WrapComponent = 
                            <DocumentTitle title={ele.title}>
                                <Component {...props} />
                            </DocumentTitle>
                        ;
                        return WrapComponent;
                    }}
                />
            );
        };
        return ele.component ? getC(ele) : ele.subs.map(ele => getC(ele));
    }
    return (
        <Router>
            <Suspense fallback={'loading...'}>
                <Switch>{Object.keys(routeConfig).map(ele => routeConfig[ele].map(getRoute))}</Switch>
            </Suspense>
        </Router>
    );
};
