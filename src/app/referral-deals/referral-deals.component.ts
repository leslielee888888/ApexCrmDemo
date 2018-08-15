import { CommentComponent } from './../referral-table-component/comment/comment.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ApplicationsListTableSettings } from './referral-deals.settings';
import { ReferralDealsService } from '../service/referral-deals/referral-deals.service';
import * as moment from 'moment';
import { CustomDatePickerComponent } from '../referral-table-component/custom-date-picker/custom-date-picker.component';
import { EmailMeCheckRenderComponent } from '../referral-table-component/email-me-check-render/email-me-check-render.component';
import { ReferralTableEmailService } from '../service/referral-table-email/referral-table-email.service';
import { ReferralUserService } from '../service/referral-user/referral-user.service';
import { mergeMap, map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-referral-deals',
  templateUrl: './referral-deals.component.html',
  styleUrls: ['./referral-deals.component.scss']
})
export class ReferralDealsComponent implements OnInit {

  selectOptions: any;
  select: any;
  public ApplicationsListTableSource: LocalDataSource;
  public ApplicationsListTableSettings = ApplicationsListTableSettings;
  constructor(private referralDealsService: ReferralDealsService
    , private modalService: NgbModal, private userService: ReferralUserService) {
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
    

  }

  ngOnInit(): void {
    this.select = this.selectOptions[4]
    this.referralDealsService.getApplicantList(this.select.startDate, this.select.endDate).pipe(mergeMap((r) => {
      return this.userService.getProfile().pipe(map(_r => ({
        ...r, ..._r
      })))
    }))
      .subscribe(data => {
        
        // tslint:disable-next-line:no-unused-expression
        // data && data.affiliates && (this.ApplicationsListTableSource = new LocalDataSource(data.affiliates));
        // if (data && data.affiliates) {
        //   this.ApplicationsListTableSource = new LocalDataSource(data.affiliates);
        // }
        if (data && data.affiliates) {
          const _val = data.affiliates.map(r => ({ ...r, notify_all_app: data.notify_all_app }));
          
          this.ApplicationsListTableSource = new LocalDataSource(_val);
        }
      })
    this.ApplicationsListTableSettings.columns.Comment.onComponentInitFunction = (instance: CommentComponent) => {
      instance.addTotalComment.subscribe(data => {
        instance.renderValue.totalComment = Number(instance.renderValue.totalComment) + 1;
        this.ApplicationsListTableSource.refresh();
      })
      instance.delTotalComment.subscribe(data => {
        instance.renderValue.totalComment = Number(instance.renderValue.totalComment) - 1;
        this.ApplicationsListTableSource.refresh();
      })
    }
    /* this.ApplicationsListTableSettings.columns.notify.onComponentInitFunction = (instance: EmailMeCheckRenderComponent) => {
      instance.onSelected.subscribe(data => {
        this.emailService.setAppNotify(data[1]).subscribe(() => {
        });
      })
    } */
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
          
          if (date === 'close') { return; }
          this.referralDealsService.getApplicantList(moment(date.startDate).toDate(), moment(date.endDate).toDate())
            .subscribe((data) => {
              // tslint:disable-next-line:no-unused-expression
              data && data.affiliates && (this.ApplicationsListTableSource = new LocalDataSource(data.affiliates));

            })
        })
    }

    
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
