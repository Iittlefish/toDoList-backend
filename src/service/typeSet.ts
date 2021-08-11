import { ToDo } from "@/entry";
import { Repository } from "typeorm";

export function typeSet(target:Function,repo:Repository<any>){
  target.repo = repo;
}

Repository
