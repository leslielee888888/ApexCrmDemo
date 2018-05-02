import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApplicationsListTableSettings } from './referral-deals.settings';
import { ReferralDealsService } from '../service/referral-deals/referral-deals.service';
import * as moment from 'moment';
import { CustomDatePickerComponent } from '../referral-table-component/custom-date-picker/custom-date-picker.component';

@Component({
  selector: 'app-referral-deals',
  templateUrl: './referral-deals.component.html',
  styleUrls: ['./referral-deals.component.scss']
})
export class ReferralDealsComponent implements OnInit {

  selectOptions: any;
  select: any;
  private ApplicationsListTableSource: LocalDataSource;
  private ApplicationsListTableSettings = ApplicationsListTableSettings;


  ngOnInit(): void {
    this.referralDealsService.getApplicantList(moment('2000-01-01').toDate(), moment().toDate())
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:no-unused-expression
        data && data.affiliates && (this.ApplicationsListTableSource = new LocalDataSource(data.affiliates));
        // if (data && data.affiliates) {
        //   this.ApplicationsListTableSource = new LocalDataSource(data.affiliates);
        // }
      })
  }

  constructor(private referralDealsService: ReferralDealsService, private modalService: NgbModal) {
    this.selectOptions = [
      {
        label: "ALL",
        startDate: '2000-01-01',
        endDate: moment().format('YYYY-MM-DD')
      },
      {
        label: `Today:${moment().format('DD-MM-YYYY')}`,
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        label: `Yesterday:${moment().add(-1, 'd').format('DD-MM-YYYY')}`,
        startDate: moment().add(-1, 'd').format('YYYY-MM-DD'),
        endDate: moment().add(-1, 'd').format('YYYY-MM-DD')
      }, {
        label: `Last 7 days:${moment().add(-7, 'd').format('DD-MM-YYYY')} ~ ${moment().format('DD-MM-YYYY')}`,
        startDate: moment().add(-7, 'd').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        label: `Last 14 days:${moment().add(-14, 'd').format('DD-MM-YYYY')} ~ ${moment().format('DD-MM-YYYY')}`,
        startDate: moment().add(-14, 'd').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        label: `Last 30 days:${moment().add(-30, 'd').format('DD-MM-YYYY')} ~ ${moment().format('DD-MM-YYYY')}`,
        startDate: moment().add(-30, 'd').format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        label: `This month:${moment(`${moment().format('YYYY-MM-')}01`).format('DD-MM-YYYY')} ~ ${moment().format('DD-MM-YYYY')}`,
        startDate: moment(`${moment().format('YYYY-MM-')}01`).format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
      }, {
        // tslint:disable-next-line:max-line-length
        label: `Last month:${moment(`${moment().format('YYYY-MM-')}01`).add(-1, 'M').format('DD-MM-YYYY')} ~ ${moment().add(-1, 'M').format('DD-MM-YYYY')}`,
        startDate: moment(`${moment().format('YYYY-MM-')}01`).add(-1, 'M').format('YYYY-MM-DD'),
        endDate: moment().add(-1, 'M').format('YYYY-MM-DD')
      }, {
        // tslint:disable-next-line:max-line-length
        label: `The month before last month:${moment(`${moment().format('YYYY-MM-')}01`).add(-2, 'M').format('DD-MM-YYYY')} ~ ${moment().add(-2, 'M').format('DD-MM-YYYY')}`,
        startDate: moment(`${moment().format('YYYY-MM-')}01`).add(-2, 'M').format('YYYY-MM-DD'),
        endDate: moment().add(-2, 'M').format('YYYY-MM-DD')
      }, {
        label: 'Custom date'
      }
    ].map((v: any, i) => ({ ...v, type: i }))
    this.select = this.selectOptions[0];
    console.log(this.selectOptions);
    
  }

  onSelect(query) {
    if (query.type !== 9) {
      this.referralDealsService.getApplicantList(moment(query.startDate).toDate(), moment(query.endDate).toDate())
        .subscribe((data) => {
          // tslint:disable-next-line:no-unused-expression
          data && data.affiliates && (this.ApplicationsListTableSource = new LocalDataSource(data.affiliates));

          // if (data && data.affiliates) {
          //   this.ApplicationsTableSource = new LocalDataSource(data.affiliates);
          // }
        })
    } else if (query.type === 9) {
      const modalRef = this.modalService.open(CustomDatePickerComponent)
        .result.then(date => {
          console.log(date);
          if (date === 'close') { return; }
          this.referralDealsService.getApplicantList(moment(date.startDate).toDate(), moment(date.endDate).toDate())
            .subscribe((data) => {
              // tslint:disable-next-line:no-unused-expression
              data && data.affiliates && (this.ApplicationsListTableSource = new LocalDataSource(data.affiliates));

            })
        })
    }

    console.log(query);
  }


  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
    if (query) {
      this.ApplicationsListTableSource.setFilter([
        // fields we want to inclue in the search
        {
          field: 'FirstName',
          search: query,
        },
        {
          field: 'SurName',
          search: query,
        },
        {
          field: 'DesiredAmount',
          search: query,
        },
      ], false);
    } else {
      this.ApplicationsListTableSource.reset();
    }

    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
