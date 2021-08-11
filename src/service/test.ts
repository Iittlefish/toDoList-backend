import { Repository, getRepository } from 'typeorm';
import { ToDo } from '@/entry';


export class testTypeorm {
  private static INSTANCE: testTypeorm;
  private todoRepo: Repository<ToDo>;

  public static init() {
    if (this.INSTANCE === undefined) {
      this.INSTANCE = new testTypeorm;
    }
    return this.INSTANCE;
  }

  public static getInstance(): testTypeorm {
    return this.INSTANCE;
  }

  constructor() {
    this.todoRepo = getRepository(ToDo);
  }

  public create(){
    let testObj = this.todoRepo.create();
    console.log(testObj);
  }

}
