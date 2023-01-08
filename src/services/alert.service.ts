import { IAlert } from "../data-access/models/alert-model";
import { AlertRepository } from "../data-access/repository/alert.repository";


export class AlertService {
  private alertRepository: AlertRepository;

  constructor() {
    this.alertRepository = new AlertRepository();
  }

  async create(alert: IAlert): Promise<IAlert> {
    return this.alertRepository.create(alert);
  }

  async findById(id: string): Promise<IAlert | null> {
    return this.alertRepository.findById(id);
  }

  async find(page:any, limit:any,order:any) {
    let sort={ errorCategory: order }
    return this.alertRepository.findAllWithPN(page,limit,sort);
  }
  async getCount() {
    return this.alertRepository.getCount();
  }
  async update(id: string, alert: IAlert): Promise<IAlert | null> {
    return this.alertRepository.update(id, alert);
  }

  async delete(id: string): Promise<IAlert | null> {
    return this.alertRepository.delete(id);
  }
}
