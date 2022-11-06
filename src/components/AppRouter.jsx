import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publickPages, privatePages} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privatePages.map( route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />)
                }
            </Routes>

            :
            <Routes>
                {publickPages.map( route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />)
                }
            </Routes>




    );
};

export default AppRouter;