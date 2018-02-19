import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  members: any[];
  person:any;
  result: any;

  constructor(private personApi: PersonService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.personApi.getAll().subscribe(result => {
      this.members = result.data;
      console.log('result', this.members);
    });
  }

  getByPersNr(){
    this.personApi.getMemberId(100).subscribe(result => {
      this.person = result.data.personal[0];
      console.log('result', result);
    });
  }

  createPerson() {
    const person = {
      "persnr": "100",
      "name": "deneme bey",
      "tel": "8999999",
      "salaer": "8000",
      "chef": "1001",
      "abtnr": "1",
      "wohnort": "zürich",
      "eintrittsdatum": "2014-10-21",
      "bonus": "8000"
    };

    this.personApi.createPostPerson(person).subscribe(result => {
      console.log('result', result);
      this.result = result;
    });
  }

  deletePerson() {
    this.personApi.removePerson(100).subscribe(result => {
      console.log('result', result);
      this.result = result;
    });
  }

  updatePerson(person){
    this.personApi.updatePutPerson(person).subscribe(result => {
      console.log('result', result);
      this.result = result;
    });
  }

}
