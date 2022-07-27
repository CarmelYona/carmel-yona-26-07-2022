import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { contactService } from "../services/contact.service"
import { saveContact } from "../store/action/contact.actions"


export const ContactEdit = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [contact, setContact] = useState(null)

    useEffect(() => {
        onLoadContact()
    }, [])

    const onLoadContact = async () => {
        const { _id } = params
        if (_id) {
            console.log(_id)
            const contact = await contactService.getById(_id)
            console.log(contact)
            setContact(contact)
        } else {
            setContact({
                fullname: '',
                email: ''
            })
        }
    }

    const onSubmit = async (ev) => {
        console.log('hi')
        ev.preventDefault()
        await dispatch(saveContact(contact))
        navigate('/contact')
    }

    const handelChange = ({ target }) => {
        const val = target.value
        const field = target.name
        setContact({ ...contact, [field]: val })
    }
    return <section className="edit-user">
        {<h1> edit user</h1>}
        {contact?.fullname && <h1>{contact.fullname}</h1>}
        {contact?.email && <h1>{contact.email}</h1>}
        <form onSubmit={onSubmit} className="flex ">
            <input onChange={handelChange} type="text" name="fullname" placeholder="Full Name" value={contact?.fullname} id="" />
            <input onChange={handelChange} type="text" name="email" placeholder="Email" value={contact?.email} id="" />
            <button>Save</button>
        </form>
    </section>
}