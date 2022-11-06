import React, {useContext} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    localStorage.setItem('auth', 'true')

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }

    return (
        <div>
            <form onSubmit={login} style={{maxWidth: 350, margin: 15}}>
                <h2 style={{textAlign: "center"}}>Страница для авторизации</h2>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;