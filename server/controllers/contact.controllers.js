import Contact from '../models/contact.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const createContact = async (req, res) => { 
    const contact = new Contact(req.body) 
    try {
        await contact.save()
        return res.status(200).json({ 
            message: "Successfully added contact!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}

const listContacts = async (req, res) => { 
    try {
        let contacts = await Contact.find().select('name email phone updated created') 
        res.json(contacts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}

const contactByID = async (req, res, next, id) => { 
    try {
        let contact = await Contact.findById(id) 
        if (!contact)
            return res.status('400').json({ 
                error: "Contact not found"
            })
        req.profile = contact 
        next()
    } catch (err) {
        return res.status('400').json({ 
            error: "Could not retrieve contact"
        }) 
    }
}

const readContact = (req, res) => {
    return res.json(req.profile) 
}

const updateContact = async (req, res) => { 
    try {
        let contact = req.profile
        contact = extend(contact, req.body) 
        contact.updated = Date.now() 
        await contact.save()
        res.json(contact) 
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}

const removeContact = async (req, res) => { 
    try {
        let contact = req.profile
        let deletedContact = await contact.deleteOne() 
        res.json(deletedContact) 
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}

const removeAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany({})
        res.status(200).json({
            message: "All contacts removed"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {   createContact, contactByID, readContact, listContacts, removeContact, updateContact, removeAllContacts }

