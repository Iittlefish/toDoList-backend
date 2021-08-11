import {
  DeleteResult, getRepository, InsertResult, Repository, UpdateResult,
} from 'typeorm';

import { ToDo } from '@/entry';

export class todoService{
  private static INCTENCE : todoService;
  private todoRepo : Repository<ToDo>;

  public static init():todoService{
    if (this.INCTENCE ===undefined){
      this.INCTENCE=new todoService;
    }
    return this.INCTENCE;
  }

  public static getInctence():todoService{
    return this.INCTENCE;
  }

  public constructor(){
    this.todoRepo= getRepository(ToDo);
  }
  
}
