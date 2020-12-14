const initialState = {
    name: null,
    username: null,
    //email: null,
    //phone: null
    logged: false
}

const userReducer = (state = initialState, action ) => {
switch(action.type) {
    case "LOGIN":
    return {
        name: action.data.name,
        username: action.data.username,
        logged: true
    };
    case "LOGOUT": 
    return {
        name: action.data.name,
        username: action.data.username,
        logged: false
    }
    default:
        return state;
}
}

export const userLogin = (stuff) => {
    return {
        type: "LOGIN",
        data: {
            name: stuff.name,
            username: stuff.username,
            //email: stuff.email,
            //phone: stuff.phone
        }
    } 
}

export const userLogout = () => {
    return {
        type: "LOGOUT",
        data: {
            name: null,
            username: null
        }
    }
}

export default userReducer;