import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-pretavance',
  templateUrl: './pretavance.component.html',
  styleUrls: ['./pretavance.component.css']
})
export class PretavanceComponent implements OnInit {
 
  dateMaxDate = new Date(2080, 0, 1);
  dateMinDate = new Date(1900,0,1);
  dateMaxDate1 = new Date(2080, 0, 1);
  dateMinDate1 = new Date(1900,0,1);
  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,private fb1: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      dob: new FormControl(new Date()),
    });
    this.form1 = this.fb1.group({
      dob1: new FormControl(new Date()),
    });
  }
  onSubmit(): void {

    console.log(this.form.value)
    console.log(this.form1.value)

  }
  onSubmit1(): void {

    console.log(this.form1.value)

  }

  anotherFunction(event: Event ) {
    throw new Error('Function not implemented.');
  }
}
