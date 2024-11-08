import { create } from "zustand";
import Contact from "./entities/Contact";
import sampleContacts from "./data/sampleContacts";

interface ContactsStore {
    currentContact: Contact
    contacts: Contact[]
    setCurrentContact: (contact: Contact) => void
    add: (contact: Contact) => void
    edit: (id: number,contact: Contact) => void
    delete: (id: number) => void
    onSearch: (searchInput: string) => void
}

const useContacts = create<ContactsStore>(set => ({
    currentContact: {id: 0, name: '', phone: '', email: ''},
    contacts: sampleContacts,
    setCurrentContact: (contact) => set(({currentContact: contact})),
    add: (contact) => set(store => ({contacts: [contact,...store.contacts]})),
    edit: (id,contact) => set(store => ({contacts: store.contacts.map(c => (c.id === id ? contact : c))})),
    delete: (id) => set(store => ({contacts: store.contacts.filter(c => c.id !== id)})),
    onSearch: (searchInput) => set(() => ({
        contacts: sampleContacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                contact.phone.includes(searchInput) ||
                contact.email.toLowerCase().includes(searchInput.toLowerCase())
        )
    }))
}))

export default useContacts