import { Injectable } from '@angular/core';
import {CardModel} from './card.model';
import {VideoModel} from './video.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userLoggedIn: boolean = false;
  isDarkTheme: boolean = false;
  searchedCourse: String;
  clickedCourse: CardModel;
  mathVideos:VideoModel[] = [
    {
      video: 'Fractions',
      link: 'https://www.youtube.com//embed/1thX9Qml0Ks'
    },
    {
      video: 'Decimals',
      link: 'https://www.youtube.com//embed/RHUl4kZDD6c'
    },
    {
      video: 'Areas',
      link: 'https://www.youtube.com//embed/d_6XOBpoDz4'
    },
    {
      video: 'Integers',
      link: 'https://www.youtube.com//embed/u69pYSdwugo'
    },
    {
      video: 'Polygons',
      link: 'https://www.youtube.com//embed/EkWSlcsWCUM'
    }
  ]
  englishVideos:VideoModel[] = [
    {
      video: 'Parts of House',
      link: 'https://www.youtube.com//embed/R9intHqlzhc'
    },
    {
      video: 'Dialogues',
      link: 'https://www.youtube.com//embed/8irSFvoyLHQ'
    },
    {
      video: 'May I take your Order?',
      link: 'https://www.youtube.com//embed/49QFHWIky-k'
    },
    {
      video: 'Weather Song',
      link: 'https://www.youtube.com//embed/-bBqBV0bcA4'
    },
    {
      video: 'Opposite Words',
      link: 'https://www.youtube.com//embed/LF3crlV28xA'
    }
  ]
  scienceVideos:VideoModel[] = [
    {
      video: 'Digestive System',
      link: 'https://www.youtube.com//embed/VwrsL-lCZYo'
    },
    {
      video: 'Black Hole',
      link: 'https://www.youtube.com//embed/IRZYMimUET8'
    },
    {
      video: 'Heart',
      link: 'https://www.youtube.com//embed/tg_ObDJEaGo'
    },
    {
      video: 'Respiratory System',
      link: 'https://www.youtube.com//embed/mOKmjYwfDGU'
    },
    {
      video: 'Planet Earth',
      link: 'https://www.youtube.com//embed/dk8zDjQT0aE'
    }
  ]
  computerVideos:VideoModel[] = [
    {
      video: "Do's and Dont's of a Computer",
      link: 'https://www.youtube.com//embed/wHGfCn9yZGM'
    },
    {
      video: 'Computer Basics',
      link: 'https://www.youtube.com//embed/HrbQ6XvtLFo'
    },
    {
      video: 'Computer Parts',
      link: 'https://www.youtube.com//embed/XTGmkr1IOaA'
    },
    {
      video: 'The Mouse',
      link: 'https://www.youtube.com//embed/ZX4Mt7wJyjg'
    },
    {
      video: 'Switching On and Off the Computer',
      link: 'https://www.youtube.com//embed/ev-99L1rUu0'
    }
  ]
  courses:CardModel[] = [{
    cardtitle: 'Maths',
    cardsubtitle: 'Introduction',
    cardimage: '../assets/images/math.png',
    intro: 'Students apply their understanding of fractions and fraction models to represent the addition and subtraction of fractions',
    routerLink: 'Maths',
    videos: this.mathVideos,
    liked: false,
    },
    {
      cardtitle: 'English',
      cardsubtitle: 'Introduction',
      cardimage: '../assets/images/english.jpg',
      intro: 'Compare and contrast stories in the same genre (e.g., mysteries and adventure stories) on their approaches to similar themes and topics.',
      routerLink: 'English',
      videos: this.englishVideos,
      liked: false,
      },
      {
        cardtitle: 'Science',
        cardsubtitle: 'Introduction',
        cardimage: '../assets/images/science1.png',
        intro: 'Students will be able to identify the four lobes of the brain. Students will be able to identify the function of the four lobes of the brain.',
        videos: this.scienceVideos,
        routerLink: 'Science',
        liked: false,
        },
        {
          cardtitle: 'Computers',
          cardsubtitle: 'Introduction',
          cardimage: '../assets/images/computer1.png',
          intro: 'Students will learn spreadsheet vocabulary such as rows,columns, cells, data, values, and formulas.',
          videos: this.computerVideos,
          routerLink: 'Computers',
          liked: false,
          }]
          
  changeTheme(): void {
    if (this.isDarkTheme) {
      
       this.isDarkTheme = false;
       console.log(this.isDarkTheme);
    } else {
       this.isDarkTheme = true;
       console.log(this.isDarkTheme);
    }
  }
}
