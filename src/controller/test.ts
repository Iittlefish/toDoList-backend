import {
  Body, Controller, Delete, Get, Patch, Path, Post, Route, Tags,
} from 'tsoa';
import { testTypeorm } from '@/service/test';

@Tags('test')
@Route('testRoute')
export class TestClass{
  @Get()
  public testFunct(){
  let obj = testTypeorm.getInstance().create();
  console.log(obj);
  return obj;
}
}
