import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roteiro',
  templateUrl: './roteiro.component.html',
})
export class RoteiroComponent implements OnInit {
  viagemData: any;
  selectedActivities: Set<string> = new Set();

  ngOnInit(): void {
    const viagemData = localStorage.getItem('viagemData');
    if (viagemData) {
      this.viagemData = JSON.parse(viagemData);

      if (this.viagemData.activities) {
        this.selectedActivities = new Set(this.viagemData.activities.split(','));
        console.log('Atividades recuperadas:', this.selectedActivities);
      }
    }
  }
}
