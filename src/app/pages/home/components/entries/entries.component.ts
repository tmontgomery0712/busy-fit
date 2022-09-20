import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/service/contentful.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  logEntries$:Observable<any> | undefined;

  ngOnInit(): void {
    this.logEntries$ = this.contentfulService.getAllEntries();
  }

}
