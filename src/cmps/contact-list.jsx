import { ContactPreview } from "./contact-preview"

export function ContactList({ contacts, onRemoveContact }) {
    return <section className="contact-list">
        {contacts && contacts.map(contact => {
            return <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />
        })}


    </section>
}