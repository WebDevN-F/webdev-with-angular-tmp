import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { DocumentInfo } from '../models/document.model';
import { v4 as uuidv4 } from 'uuid';
import { uniqueNamesGenerator, Config, starWars, languages } from 'unique-names-generator';

const config: Config = {
  dictionaries: [languages]
}

const documents: DocumentInfo[] = [
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
  { id: uuidv4(), losId: (Math.random() * 1000000 |0), cif: (Math.random()*100000000|0), fullName: uniqueNamesGenerator(config), timeStore: 12, sealCode: `SEAL${(Math.random()*1000|0)}`, stack: 1, track: 2, crown: (Math.random()*10000|0), sealCrown: (Math.random()*1000000|0), status: 1},
]
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBranchs() {
    return of([
      {
        value: null,
        label: ' -- '
      },
      {
        value: 1,
        label: '001'
      },
      {
        value: 2,
        label: '002'
      },
      {
        value: 3,
        label: '003'
      },
      {
        value: 4,
        label: '004'
      }
    ]);
  }

  getDocuments() {
    return of(documents);
  }
}
