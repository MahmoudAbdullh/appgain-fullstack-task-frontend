
import {
    SET_PREVIEW_DATA,
    GET_INIT_LAYOUT_DATA,
    CLEAR_PREVIEW_DATA
} from './actionTypes';

const initialState = {
    logo: "https://res.cloudinary.com/appgain/image/upload/v1534373384/appgain/logo.png",
    logoStyle: "flexible",//square, flexible width and rounded
    title: "Appgain Title",
    titleColor: "red",
    titleBgColor: "#DDD",
    slides: [
        {
            src: "/slider/hongkonga1280x800.jpg",
            altText: "hongkonga1280x800.jpg"
        },
        {
            src: "/slider/nyc1280x800.jpg",
            altText: "nyc1280x800.jpg"
        }
    ],
    //layout update preview
    preview: {
        logo: "https://res.cloudinary.com/appgain/image/upload/v1534373384/appgain/logo.png",
        logoStyle: "flexible",//square, flexible width and rounded
        title: "Appgain Title",
        titleColor: "red",
        titleBgColor: "#DDD",
        slides: [
            {
                src: "/slider/hongkonga1280x800.jpg",
                altText: "hongkonga1280x800.jpg"
            },
            {
                src: "/slider/nyc1280x800.jpg",
                altText: "nyc1280x800.jpg"
            }
        ],
        isPreview: false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PREVIEW_DATA :
            return{
                ...state,
                preview: {...action.payload , isPreview: true}
            }
        case CLEAR_PREVIEW_DATA :
            return{
                ...state,
                preview: {...state.preview , isPreview: false}
            }
        case GET_INIT_LAYOUT_DATA :
            return{
                ...state,
                ...action.payload
            }

        default:
            state = { ...state };
            break;
    }
    return state;
}
