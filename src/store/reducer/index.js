import shortid from "shortid";
import format from "date-format";
import {ADD_GROUP} from '../action/types';

const initialState = {
    groups: [
        {
            id: shortid.generate(),
            name: 'Furnitures',
            createdOn: format.asString('dd-MM-yyyy, hh:mm', new Date()),
            amount: 3000,
            items: [
                {item: 'Chair', qty: '2 Pairs', amount: 2000}
            ]
        },
        {
            id: shortid.generate(),
            name: 'Vegetables',
            createdOn: format.asString('dd-MM-yyyy, hh:mm', new Date()),
            amount: 500,
            items: [
                {item: 'Potato', qty: '1 Kg', amount: 20},
                {item: 'Onion', qty: '1 Kg', amount: 50}
            ]
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GROUP:
            return {
                groups: [
                    ...state.groups,
                    action.payload
                ],
            };
        default: return state;
    }
};

export default reducer;
