import { NavLink } from "react-router-dom";

export function ContactPreview({ contact, onRemoveContact }) {
    return <section className="contact-preview flex pad-10x ">
        <div className="contact-info flex column">
            <NavLink to={`/contact/edit/${contact._id}`}>
                <h3>{contact.fullname}</h3>
                <h6>{contact.email}</h6>
            </NavLink>
        </div>
        <div className="contact-action flex">
            <button onClick={() => onRemoveContact(contact._id)} >X</button>
            <button  ><NavLink to={`/contact/edit/${contact._id}`}>Edit</NavLink> </button>
        </div>

    </section>
}