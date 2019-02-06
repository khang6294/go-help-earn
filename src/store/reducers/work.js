import * as actionTypes from '../actions/actionTypes'

const initialState = {
    works: [
        {
            id: '1',
            title: 'Carry the sofa',
            date: '2018-03-27',
            fee: 15,
            category: 'help',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
            city: 'Helsinki, Finland',
            venue: "Opastinsilta 2B, 00520, Helsinki, Finland",
            postedBy: 'Ken',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            attendees: [
            {
                id: 'a',
                name: 'Kenji',
                photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
            },
            {
                id: 'b',
                name: 'Nhan',
                photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
            }
            ]
        },
        {
            id: '2',
            title: 'Clean the house',
            date: '2018-03-28',
            fee:20,
            category: 'drinks',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
            city: 'Oulu, Finland',
            venue: 'Punch & Judy, Henrietta Street, London, UK',
            postedBy: 'Joe',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            attendees: [
            {
                id: 'b',
                name: 'Nhan',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Khang',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
            ]
        }
    ],
}


const workReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CREATE_WORK:
        const works = [...state.works]
        works.push(action.payload)
        return {
            works: works
        }
        case actionTypes.UPDATE_WORK:
        const newWorks = [
            ...state.works.filter(work => work.id !== action.payload.id),
            {...action.payload}
        ]

        return {
            works: newWorks
        }
        case actionTypes.DELETE_WORK:
        return{
            ...state,
        }
        default:
        return state
    }
}

export default workReducer