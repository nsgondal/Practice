
import { Contact, IContact } from '../models/contact-model';
import { BaseRepository } from './base.repository';

export class ContactRepository extends BaseRepository<IContact> {
  constructor() {
    super(Contact);
   /// this.displayContacts(1)
  }
  async getCount() {
    // Get the total number of contacts
    let response:any={}
    response.count =await Contact.countDocuments();
    let dcontactState=await Contact.find().distinct('contactState');
    let contactSatellite=await Contact.find().distinct('contactSatellite');
    let contactGround=await Contact.find().distinct('contactGround');
    
    response.contactSatellite=contactSatellite.length;
    response.distinctState=dcontactState.length;
    response.distinctGround=contactGround.length;
   
    return response
  }
 
}
