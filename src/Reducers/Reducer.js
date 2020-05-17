import Data from '../components/data/contactList';

const iState = {
    list: Data,
};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "pushList":
            return {
                "list": [...state.list, {
                    id: (state.list.length === 0) ? 1 : state.list[state.list.length - 1].id + 1,
                    name: action.payload.name, phone: (action.payload.phone),
                    address: action.payload.address, company: action.payload.company, email: action.payload.email
                }]
            };
        case "deleteListById":
            let result = Object.entries(action.payload.id);
            let array = result.map((val) => {
                return val[0]
            });

            // filter array with array of object
            return {
                "list": state.list.filter(f => !array.includes(f.id.toString()))
            };
        case "editListById":
            const editedValue = state.list.map(item => {
                if (item.id === action.payload.id) {
                    // eslint-disable-next-line
                    item.name = action.payload.name, item.phone = action.payload.phone,
                        item.address = action.payload.address, item.company = action.payload.company,
                        item.email = action.payload.email
                    return item;
                }
                else
                    return item;
            });
            return {
                "list": editedValue
            }
        case "searchData":
            let filteredData = ''
            if (action.payload.searchInput) {
                filteredData = state.list.filter(value => {
                    return value.name
                        .toString()
                        .toLowerCase()
                        .includes(action.payload.searchInput.toLowerCase())
                })
                return {
                    "list": filteredData
                }
            }
            else {
                return { "list": Data }
            }
        default:
            return state;
    }
}

export default reducer;