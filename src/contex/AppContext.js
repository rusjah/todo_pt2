import { createContext, useContext, useEffect, useState } from "react";
import Backendless from "backendless";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [todos, settodos] = useState([])
    // const [todayTodos, setTodayTodos] = useState([])
    const [doFirst, setDoFirst] = useState([])
    const [delegate, setDelegate] = useState([])
    const [eliminate, setEliminate] = useState([])
    const [doLater, setDoLater] = useState([])
    const [typeList, setTypeList] = useState('doFirst')
    const [editStatus, setEditStatus] = useState(false)
    
    const navigate = useNavigate()
    const [authorization, setAuthorization] = useState(false)

    const heading = {
        doFirst: 'Urgant and Import',
        delegate: 'Not urgent but import',
        eliminate: 'Neither Urgen or importent',
        doLater: 'Urgent but not importent'
    }

    //work with backendless
    const API_KEY = process.env.REACT_APP_API_KEY;
    const APL_ID = process.env.REACT_APP_APL_ID;

    Backendless.serverURL = "https://eu-api.backendless.com"
    Backendless.initApp( APL_ID, API_KEY );

    function registration(formData) {
        var user = new Backendless.User();
        user.email = formData.email;
        user.name = formData.name;
        user.password = formData.password;

        Backendless.UserService.register( user )
            .then( res => {
                setAuthorization(i => true)
                navigate('/todoList')
                console.log('registar', res);
            } )
            .catch( err => {
                if (err.code === 3033) {
                    toast("You already have account! Please, Log In");
                    navigate('/login')
                }
            });
    }

    function logoutUser() {
        Backendless.UserService.logout()
        .then( res => {
            setAuthorization(i => false)
            navigate('/')
        } )
        .catch( err => console.log(err));
    }

    function loginUser(userData) {
        const email = userData.email
        const password = userData.password
        Backendless.UserService.login( `${email}`, `${password}`, true )
        .then( res => {
            setAuthorization(i => true)
            navigate('/todoList')
            console.log(res);
        } )
        .catch( err => {console.log(err)} );
    }

    useEffect(() => {
        Backendless.UserService.isValidLogin()
        .then( res =>  setAuthorization(i => res) )
        .catch( err => console.log(err));

    }, [])
    
    //to do
    function addTodo(obj) {
        Backendless.Data.of( "todos" ).save( obj )
            .then(res => {
                settodos(i => [...i, obj])
            })
            .catch(err => console.log(err));

    }

    function getList() {
        Backendless.Data.of('todos').find()
            .then(res => {
                console.log(res);
                settodos(res)
            })
            .catch(err => console.log(err))
    }

    function deleteTodo(id) {
        Backendless.Data.of( "todos" ).remove(  {objectId:`${id}`} )
        .then(res => {
            getList();
            console.log('success')
        })
        .catch( err => console.log(err));
    }

    function updateTodo() {
        alert('hi')
    }

    function displayTodo(type) {
        switch (type) {
            case 'doFirst':
                return doFirst
            case 'doLater':
                return doLater
            case 'delegate':
                return delegate
            case 'eliminate':
                return eliminate
            default:
                return todos
        }
    }

    function typeOfList(type) {
        setTypeList(i => type)
        navigate(`/${type}`)
    }

    useEffect(() => {
        const doFirst = todos.filter(i => i.type == 'doFirst');
        const doLater = todos.filter(i => i.type === 'doLater')
        const delegate = todos.filter(i => i.type === 'delegate')
        const eliminate = todos.filter(i => i.type === 'eliminate')

        setDoFirst(i => doFirst)
        setDoLater(i => doLater)
        setDelegate(i => delegate)
        setEliminate(i => eliminate)

    }, [todos])

    useEffect(() => {
        getList()
    },[])

    return <AppContext.Provider value={{
        authorization, setAuthorization,
        registration, logoutUser, loginUser,
        addTodo, displayTodo,
        typeList, typeOfList, heading,
        getList, deleteTodo, updateTodo
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});