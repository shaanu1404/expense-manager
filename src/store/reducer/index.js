import {ADD_GROUP, ADD_ITEM, DELETE_ITEM} from '../action/types';

const initialState = {
    groups: [
        {
            id: 'xqc90rlY',
            name: 'Furnitures',
            createdOn: '05-03-2020, 22:06',
            amount: 3000,
            items: [
                {item: 'Chair', qty: '2 Pairs', amount: 2000}
            ]
        },
        {
            id: 'JnsclI4g9',
            name: 'Vegetables',
            createdOn: '05-03-2020, 22:06',
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
        case ADD_ITEM:
            let index = state.groups.findIndex(group => group.id === action.id);
            const newItem = {item: action.item, qty: action.qty, amount: action.amount};
            const updatedGroups = [...state.groups];
            updatedGroups[index].items.push(newItem);
            return {
                groups: updatedGroups
            };
        case DELETE_ITEM:
        // {id, index}
            let grpIndex = state.groups.findIndex(group => group.id === action.id);
            const updatedGrp = [...state.groups];
            updatedGrp[grpIndex].items.splice(action.index, 1);
            return {
                groups: updatedGrp
            };
        default:
            return state;
    }
};

export default reducer;
