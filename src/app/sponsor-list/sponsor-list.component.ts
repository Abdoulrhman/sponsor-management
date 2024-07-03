// sponsor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorService } from '../sponsor.service';
import { Sponsor } from '../models/sponsor.model';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SponsorDetailModalComponent } from '../sponsor-detail-modal/sponsor-detail-modal.component';

@Component({
  selector: 'app-sponsor-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule],
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {
  sponsors: Sponsor[] = [];
  isLoading: boolean = true;

  constructor(private sponsorService: SponsorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchSponsors();
  }

  private fetchSponsors(): void {
    this.sponsorService.getSponsors().subscribe({
      next: (response) => {
        this.sponsors = response.data.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching sponsors:', error);
        this.isLoading = false;
      }
    });
  }

  openDetailModal(sponsor: Sponsor): void {
    this.dialog.open(SponsorDetailModalComponent, {
      width: '400px',
      data: sponsor
    });
  }
}
