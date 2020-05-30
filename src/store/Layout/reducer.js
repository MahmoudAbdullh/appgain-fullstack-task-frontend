
import {

} from './actionTypes';

const initialState = {
    title: "",
    titleColor: "red",
    //layout update preview
    preview: {
        logo: "",
        logoStyle: "",//square, flexible width and rounded
        title: "",
        titleColor: "",
        titleBgColor: ""

    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DASHBOARD' :
            return{

            }

        default:
            state = { ...state };
            break;
    }
    return state;
}
