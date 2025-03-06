import express from 'express'
import contactCtrl from '../controllers/contact.controllers.js'

const contactRouter = express.Router()

contactRouter.route('/api/contacts')
    .get(contactCtrl.listContacts)
    .post(contactCtrl.createContact)
    .delete(contactCtrl.removeAllContacts)

contactRouter.route('/api/contacts/:contactId')
    .get(contactCtrl.readContact)
    .put(contactCtrl.updateContact)
    .delete(contactCtrl.removeContact)

contactRouter.param('contactId', contactCtrl.contactByID)

export default contactRouter
