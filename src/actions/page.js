

export const SEL_ITEM = "SEL_ITEM" 

export function set_item(item){
    return dispatch => {
        dispatch({
            type : SEL_ITEM ,
            payload : item
        })
    }
}
