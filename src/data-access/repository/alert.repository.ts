
import { Alert, IAlert } from '../models/alert-model';
import { BaseRepository } from './base.repository';

export class AlertRepository extends BaseRepository<IAlert> {
  constructor() {
    super(Alert);
  }
  async getCount() {
    // Get the Counts
    let response:any={}
    response.count =await Alert.countDocuments();
    let errorCategory=await Alert.find().distinct('errorCategory');
    let errorSeverity=await Alert.find().distinct('errorSeverity');
    let errorMessage=await Alert.find().distinct('errorMessage');
    
    response.errorCategory=errorCategory.length;
    response.errorSeverity=errorSeverity.length;
    response.errorMessage=errorMessage.length;
   
    return response
  }
}
