import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../shared/pipes/safe-url-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-hub',
  standalone: true,
  imports: [SafeUrlPipe, CommonModule],
  templateUrl: './lesson-hub.html',
  styleUrls: ['./lesson-hub.scss']
})
export class LessonHubComponent {
  selectedVideoUrl = 'https://www.youtube.com/embed/VIDEO_ID_1';

  trainingSections = [
    { title: 'Warm-Up Drills', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
    { title: 'Footwork Fundamentals', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2' },
    { title: 'Throwing Mechanics', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3' },
    { title: 'Reading Defenses', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4' },
    { title: 'Game Situations', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5' }
  ];

  selectVideo(url: string) {
    this.selectedVideoUrl = url;
  }
}
