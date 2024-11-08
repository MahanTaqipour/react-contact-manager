// import Contact from "../entities/Contact"

// interface AddContact {
//     type: 'ADD'
//     contact: Contact
// }

// interface EditContact {
//     type: 'EDIT'
//     contact: Contact
// }

// interface DeleteContact {
//     type: 'DELETE'
//     id: number
// }

// type ContactAction = AddContact | EditContact | DeleteContact

// const contactReducer = (contacts: Contact[], action: ContactAction): Contact[] => {
//     switch(action.type){
//         case 'ADD': 
//             return [action.contact,...contacts]
//         case 'EDIT':
//             return contacts.map(contact =>
//                 contact.id === action.contact.id ? action.contact : contact
//             )
//         case 'DELETE':
//             return contacts.filter(t => action.id !== t.id)
//     }
// }

// export default contactReducer