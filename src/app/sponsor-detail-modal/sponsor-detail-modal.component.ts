import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sponsor } from '../models/sponsor.model';

@Component({
  selector: 'app-sponsor-detail-modal',
  templateUrl: './sponsor-detail-modal.component.html',
  styleUrls: ['./sponsor-detail-modal.component.scss']
})
export class SponsorDetailModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Sponsor) { }
}
