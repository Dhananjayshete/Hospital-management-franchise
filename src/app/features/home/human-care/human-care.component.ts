import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-human-care',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './human-care.component.html',
  styleUrls: ['./human-care.component.scss']
})
export class HumanCareComponent implements AfterViewInit {

  @ViewChild('statsSection') statsSection!: ElementRef;

  stats = [
    { label: 'Years of Experience', value: 23, current: 0 },
    { label: 'Hospitals', value: 49, current: 0 },
    { label: 'Doctors', value: 3000, current: 0 },
    { label: 'Beds', value: 14000, current: 0 },
    { label: 'Serving Cities', value: 24, current: 0 },
    { label: 'Million Lives Touched', value: 60, current: 0 }
  ];

  hasAnimated = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.startCount();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.statsSection.nativeElement);
  }

  startCount() {
    this.stats.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 100);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          stat.current = end;
          clearInterval(interval);
        } else {
          stat.current = start;
        }
      }, 20);
    });
  }
}