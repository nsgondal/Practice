import { IContact } from "../data-access/models/contact-model";
import { ContactRepository } from "../data-access/repository/contact.repository";


export class ContactService {
  private contactRepository: ContactRepository;

  constructor() {
    this.contactRepository = new ContactRepository();
  }

  async create(contact: IContact): Promise<IContact> {
    return this.contactRepository.create(contact);
  }

  async findById(id: string): Promise<IContact | null> {
    return this.contactRepository.findById(id);
  }
  async getCount() {
    return this.contactRepository.getCount();
  }
  async find(page:any, limit:any,order:any) {
    let sort={ contactName: order }
    return this.contactRepository.findAllWithPN(page,limit,sort);
  }

  async update(id: string, contact: IContact): Promise<IContact | null> {
    return this.contactRepository.update(id, contact);
  }

  async delete(id: string): Promise<IContact | null> {
    return this.contactRepository.delete(id);
  }
}
