import { Injectable } from '@angular/core';
import { CardModel } from './card.model';
import { VideoModel } from './video.model';
import { MatSnackBar, MatSnackBarConfig,  MatSnackBarVerticalPosition } from '@angular/material';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public snackBar: MatSnackBar, private router: Router) { }
  userLoggedIn: boolean = false;
  isDarkTheme: boolean = false;
  searchedCourse: String;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  username: String;
  playingVideoname: String;
  clickedCourse: CardModel;
  previousId: number;
  mathVideos: VideoModel[] = [
    {
      id : '1',
      video: 'Fractions',
      link: 'https://www.youtube.com//embed/1thX9Qml0Ks',
      text: 'A fraction represents a part of a whole or, more generally, any number of equal parts. ',
      playing: false
    },
    {
      id : '2',
      video: 'Decimals',
      link: 'https://www.youtube.com//embed/RHUl4kZDD6c',
      text: 'A fraction whose denominator is a power of ten and whose numerator is expressed by figures placed to the right of a decimal point.',
      playing: false
    },
    {
      id : '3',
      video: 'Areas',
      link: 'https://www.youtube.com//embed/d_6XOBpoDz4',
      text: 'The extent or measurement of a surface or piece of land.',
      playing: false
    },
    {
      id : '4',
      video: 'Integers',
      link: 'https://www.youtube.com//embed/u69pYSdwugo',
      text: 'An integer is a number that can be written without a fractional component. ',
      playing: false
    },
    {
      id : '5',
      video: 'Polygons',
      link: 'https://www.youtube.com//embed/EkWSlcsWCUM',
      text: ' Polygon is a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed polygonal chain or circuit.',
      playing: false
    }
  ]
  englishVideos: VideoModel[] = [
    {
      id : '1',
      video: 'Parts of House',
      link: 'https://www.youtube.com//embed/R9intHqlzhc',
      text: 'Learn about different parts of a house',
      playing: false
    },
    {
      id : '2',
      video: 'Dialogues',
      link: 'https://www.youtube.com//embed/8irSFvoyLHQ',
      text: 'Learn how sentences are formed',
      playing: false
    },
    {
      id : '3',
      video: 'May I take your Order?',
      link: 'https://www.youtube.com//embed/49QFHWIky-k',
      text: 'An example of a dialogue',
      playing: false
    },
    {
      id : '4',
      video: 'Weather Song',
      link: 'https://www.youtube.com//embed/-bBqBV0bcA4',
      text: 'Learn about the Weather',
      playing: false

    },
    {
      id : '5',
      video: 'Opposite Words',
      link: 'https://www.youtube.com//embed/LF3crlV28xA',
      text: 'Learn about opposite words',
      playing: false
    }
  ]
  scienceVideos: VideoModel[] = [
    {
      id : '1',
      video: 'Digestive System',
      link: 'https://www.youtube.com//embed/VwrsL-lCZYo',
      text: 'The gastrointestinal tract is an organ system within humans and other animals which takes in food, digests it to extract and absorb energy and nutrients, and expels the remaining waste as feces.',
      playing: false
    },
    {
      id : '2',
      video: 'Black Hole',
      link: 'https://www.youtube.com//embed/IRZYMimUET8',
      text: 'A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—not even particles and electromagnetic radiation such as light—can escape from inside it. ',
      playing: false
    },
    {
      id : '3',
      video: 'Heart',
      link: 'https://www.youtube.com//embed/tg_ObDJEaGo',
      text: 'The heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system. ',
      playing: false
    },
    {
      id : '4',
      video: 'Respiratory System',
      link: 'https://www.youtube.com//embed/mOKmjYwfDGU',
      text: 'The respiratory system is a biological system consisting of specific organs and structures used for gas exchange in animals and plants.',
      playing: false
    },
    {
      id : '5',
      video: 'Planet Earth',
      link: 'https://www.youtube.com//embed/dk8zDjQT0aE',
      text: 'From the frozen tundra in the north to the dry forests of the equator, Sir David Attenborough narrates a compelling view of the planet. ',
      playing: false
    }
  ]
  computerVideos: VideoModel[] = [
    {
      id : '1',
      video: "Do's and Dont's of a Computer",
      link: 'https://www.youtube.com//embed/wHGfCn9yZGM',
      text: 'The computer plays an important role for user to store data such as videos',
      playing: false
    },
    {
      id : '2',
      video: 'Computer Basics',
      link: 'https://www.youtube.com//embed/HrbQ6XvtLFo',
      text: 'Control unit, arithmetic logic unit and memory are together called the central processing unit or CPU.',
      playing: false
    },
    {
      id : '3',
      video: 'Computer Parts',
      link: 'https://www.youtube.com//embed/XTGmkr1IOaA',
      text: 'Computer devices like keyboard, mouse, printer, etc. that we can see and touch are the hardware components of a computer',
      playing: false
    },
    {
      id : '4',
      video: 'The Mouse',
      link: 'https://www.youtube.com//embed/ZX4Mt7wJyjg',
      text: 'A computer mouse is an input device that is most often used with a personal computer.',
      playing: false
    },
    {
      id : '5',
      video: 'Switching On and Off the Computer',
      link: 'https://www.youtube.com//embed/ev-99L1rUu0',
      text: 'To switch the computer off the right way, click the Start menu and then choose Shut down. ',
      playing: false
    }
  ]
  courses: CardModel[] = [{
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
  openSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.duration = 4000;
    this.snackBar.open(message, action,config);
  }
  clickvideo(video) {
     this.clickedCourse = video;
     this.router.navigate(["videos"],{
       queryParams:{'course':JSON.stringify(this.clickedCourse)}
      });
  }
}
