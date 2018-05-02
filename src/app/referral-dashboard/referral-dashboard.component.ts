import { EmailMeCheckRenderComponent } from './../referral-table-component/email-me-check-render/email-me-check-render.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { RecentApplicationUpdateTableSettings, ApplicationsTableSettings } from './referral-dashboard.settings';
import { HttpService } from '../service/http.service';
import { RefferalDashboardService } from '../service/referral-dashboard/refferal-dashboard.service';
import { LocalDataSource } from 'ng2-smart-table';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerComponent } from '../referral-table-component/custom-date-picker/custom-date-picker.component';
import { DateRenderComponent } from '../referral-table-component/date-render-component/date-render-component.component';
import { FullNameRenderComponent } from '../referral-table-component/full-name-render-component/full-name-render-component.component';
import { LoanAmountRenderComponent } from '../referral-table-component/loan-amount-render-component/loan-amount-render-component.component';
import { ViewAppFormRenderComponent } from '../referral-table-component/view-app-form-render/view-app-form-render.component';

@Component({
  selector: 'app-referral-dashboard',
  templateUrl: './referral-dashboard.component.html',
  styleUrls: ['./referral-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReferralDashboardComponent implements OnInit {
  select: any;
  selectOptions: any[];

  private RecentApplicationUpdateTableSettings = RecentApplicationUpdateTableSettings;
  private ApplicationsTableSettings = ApplicationsTableSettings;
  private ApplicationsTableSource: LocalDataSource;
  private RecentApplicationsTableSource: LocalDataSource;

  constructor(private service: RefferalDashboardService, private modalService: NgbModal) {
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

    this.ApplicationsTableSettings.columns.notify.onComponentInitFunction = (instance: EmailMeCheckRenderComponent) => {
      instance.onSelected.subscribe(data => {
        console.log(data);
        console.log(this.service);
        this.service.setAppNotify(data[1]).subscribe(() => {
        });
      })
    }
  }



  ngOnInit() {
    this.service.getApplicants(moment('2000-01-01').toDate(), moment().toDate())
      .subscribe((data) => {
        if (data && data.affiliates) {
          this.ApplicationsTableSource = new LocalDataSource(data.affiliates);
        }
      })
    this.service.getRecentApplication(moment('2000-01-01').toDate(), moment().toDate())
      .subscribe((data) => {
        if (data && data.affiliates) {
          this.RecentApplicationsTableSource = new LocalDataSource(data.affiliates);
        }
      })

  }

  onSelect(query) {
    // tslint:disable-next-line:triple-equals
    if (query.type != 9) {
      this.service.getApplicants(moment(query.startDate).toDate(), moment(query.endDate).toDate())
        .subscribe((data) => {
          if (data && data.affiliates) {
            this.ApplicationsTableSource = new LocalDataSource(data.affiliates);
          }
        })
    // tslint:disable-next-line:triple-equals
    } else if (query.type == 9) {
      const modalRef = this.modalService.open(CustomDatePickerComponent)
        .result.then(date => {
          console.log(date);
          // tslint:disable-next-line:triple-equals
          if (date == 'close') { return; }
          this.service.getApplicants(moment(date.startDate).toDate(), moment(date.endDate).toDate())
            .subscribe((data) => {
              if (data && data.affiliates) {
                this.ApplicationsTableSource = new LocalDataSource(data.affiliates);
              }
            })
        })
    }

    console.log(query);
  }


  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
    if (query) {
      this.ApplicationsTableSource.setFilter([
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
      this.ApplicationsTableSource.reset();
    }

    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }


}
