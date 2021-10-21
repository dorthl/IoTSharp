import { Component, Input, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { AppMessage } from '../../common/AppMessage';

@Component({
  selector: 'app-rulesdownlink',
  templateUrl: './rulesdownlink.component.html',
  styleUrls: ['./rulesdownlink.component.less'],
})
export class RulesdownlinkComponent implements OnInit {
  rule = -1;
  columns: STColumn[] = [
    { title: '', index: 'id', type: 'checkbox' },
    { title: 'id', index: 'id' },
    { title: '名称', index: 'name', render: 'name' },
    { title: '设备类型', index: 'email' },
    { title: '所有者', index: 'phone' },
    { title: '租户', index: 'country' },
    { title: '客户', index: 'province' },
  ];
  constructor(private http: _HttpClient) {}
  @Input()
  params: any = {
    dev: [],
  };
  rules: any[];
  url = 'api/rules/index';
  ngOnInit(): void {
    this.http.post(this.url, {}).subscribe(
      (x) => {
        this.rules = x.data.rows;
      },
      (y) => {},
      () => {},
    );

    this.http
      .post<AppMessage>(this.url, {
        offset: 0,
        limit: 100,
      })
      .subscribe(
        (x) => {},
        (y) => {},
        () => {},
      );
  }

  selectchanged($event) {}

  downlink() {
    this.http
      .post('api/rules/binddevice', {
        rule: this.rule,
        dev: this.params.dev.map((x) => x.id),
      })
      .subscribe(
        (next) => {},
        (error) => {},
        () => {},
      );
  }
}
