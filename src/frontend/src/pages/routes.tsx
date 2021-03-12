import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

import Login from './login/Login';
import UserTemp from './UserTemp';

function CustomRoute({ isPrivate, ...rest }: any) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact patch="/login" component={Login} />
            <CustomRoute isPrivate exact patch="/users" component={UserTemp} />
        </Switch>
    );
}