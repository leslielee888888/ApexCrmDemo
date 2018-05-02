import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

// Range datepicker Start 
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
// Range datepicker Ends

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss']
})
export class CustomDatePickerComponent implements OnInit {

  model: NgbDateStruct;
  disabledModel: NgbDateStruct = {year: parseInt(moment().format('YYYY')), month: parseInt(moment().format('MM')), day: parseInt(moment().format('DD'))};
  disabled = true;

  // Range datepicker start
  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  startDate:string = '';
  endDate:string = '';
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
    this.selectToday()
  }
  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.startDate = moment(`${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`).format('YYYY-MM-DD')
    } else if (this.fromDate && !this.toDate) {
      this.toDate = date;
      this.endDate = moment(`${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`).format('YYYY-MM-DD')
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.endDate = '';
      this.startDate = moment(`${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`).format('YYYY-MM-DD')
    }
  }
  // Selects today's date
  selectToday() {
    this.model = {year: parseInt(moment().format('YYYY')), month: parseInt(moment().format('MM')), day: parseInt(moment().format('DD'))};
  }
  
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

}
