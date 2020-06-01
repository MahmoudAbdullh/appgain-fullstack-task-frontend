import {
    SET_PREVIEW_DATA,
    GET_INIT_LAYOUT_DATA,
    CLEAR_PREVIEW_DATA
} from './actionTypes'
import Request from '../Request'
export const SetPreviewData = (data)=>{
    return dispatch=>(
        dispatch({
            type: SET_PREVIEW_DATA,
            payload: data
        })
    )
}
export const ReSetPreviewData = ()=>{
    return dispatch=>(
        dispatch({
            type: CLEAR_PREVIEW_DATA,
            payload: {}
        })
    )
}

export const getInitialDataLayout = ()=>{
    return dispatch=>{
        Request.get('/')
        .then(({data})=>{
            const {data:layout, success} = data;

            if(success){
                return (
                    dispatch({
                        type: GET_INIT_LAYOUT_DATA,
                        payload: layout
                    })
                )
            }else{
                throw("Error")
            }
        })

    }
}
/**
 * update
 */
export const UpdateLayout = (data)=>{
    return dispatch=>(
        Request.put('/',data)
        .then(({data})=>{
            const {data:layout, success} = data;

            if(success){
                return (
                    dispatch({
                        type: GET_INIT_LAYOUT_DATA,
                        payload: layout
                    })
                )
            }
        })
    )

}