'use strict'

import { storageService } from '../services/async-stoarge.service'

const STORAGE_KEY = 'contactsDB'

export const contactService = {
    query,
    getById,
    remove,
    save,
    getEmptyContact
}

async function query() {
    var contacts = await storageService.query(STORAGE_KEY)
    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        console.log(contacts)
        await storageService.insert(STORAGE_KEY, contacts)
    }
    return contacts
}

async function getById(contactId) {
    return await storageService.get(STORAGE_KEY, contactId)
}

async function remove(id) {
    return await storageService.remove(STORAGE_KEY, id)
}

async function save(contact) {
    if (contact._id) {

        return await storageService.put(STORAGE_KEY, contact)
    } else {
        return await storageService.post(STORAGE_KEY, contact)
    }

}

function getEmptyContact() {
    return {
        "name": "",
        "email": "",
    }
}

function _createDefaultContacts() {
    return [{
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 352-1483"
    },
    {
        "_id": "5a5664fs0269f443a5d64b32ca",
        "name": "Pikahu pompe",
        "email": "Pikahufdg@renovize.com",
        "phone": "+1 (687) 593-1685"
    },
    {
        "_id": "5a566402fsa69f443a5d64b32ca",
        "name": "Rinat Hmayde",
        "email": "Rinat_h@renovize.com",
        "phone": "+1 (546) 535-3864"
    },
    {
        "_id": "5a56640269fas443a5d64b32ca",
        "name": "Bali bamba",
        "email": "Bali_mashu@renovize.com",
        "phone": "+1 (354) 592-3524"
    },
    {
        "_id": "5a56640269f4fsa43a5d64b32ca",
        "name": "Goni misHyde",
        "email": "Goniasi@renovize.com",
        "phone": "+1 (489) 593-3824"
    }]
}
