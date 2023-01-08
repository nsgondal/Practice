import { Model, Document } from 'mongoose';

export class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    return this.model.create(item);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findAllWithPN(page:number=1, limit:number=20,sort:any) {
    
    let data=await this.model.find({}).limit(limit * 1)
      .skip((page - 1) * limit).sort(sort).exec();
    let totalPages = await this.model.countDocuments();
    return {
      totalPages,
      data
    }
  }
 
  async update(id: string, item:any) {
    return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
   
  }

  async delete(id: string): Promise<T | null> {
    return this.model.findByIdAndRemove(id).exec();
  }
}
