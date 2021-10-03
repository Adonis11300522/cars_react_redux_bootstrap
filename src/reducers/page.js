
import update from 'immutability-helper' ;
import { SEL_ITEM } from '../actions/page';

const initialState = {
    item : 1,
    isPrev : false ,
    isNext : true ,
    // price : 3000
}



// table <-> reducer ,    state <-> field , initialState <-> field default value
export default function page(state=initialState , action={}){

    switch(action.type){
        case SEL_ITEM :
            return update(state , {
                $merge : {
                    item : action.payload,
                    isPrev : action.payload !== 1,
                    isNext : action.payload !== 3
                }
            }) ;
        default : 
            return state ;
    }

}