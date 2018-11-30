import { Injectable } from '@angular/core';
import { CardModel } from './card.model';
import { VideoModel } from './video.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public snackBar: MatSnackBar, private router: Router) { }
  userLoggedIn: boolean = false;
  isDarkTheme: boolean = false;
  searchedCourse: String;
  username: String;
  clickedCourse: CardModel;
  mathVideos: VideoModel[] = [
    {
      video: 'Fractions',
      link: 'https://www.youtube.com//embed/1thX9Qml0Ks',
      text: 'A fraction represents a part of a whole or, more generally, any number of equal parts. '
    },
    {
      video: 'Decimals',
      link: 'https://www.youtube.com//embed/RHUl4kZDD6c',
      text: 'A fraction whose denominator is a power of ten and whose numerator is expressed by figures placed to the right of a decimal point.'
    },
    {
      video: 'Areas',
      link: 'https://www.youtube.com//embed/d_6XOBpoDz4',
      text: 'The extent or measurement of a surface or piece of land.'
    },
    {
      video: 'Integers',
      link: 'https://www.youtube.com//embed/u69pYSdwugo',
      text: 'An integer is a number that can be written without a fractional component. '
    },
    {
      video: 'Polygons',
      link: 'https://www.youtube.com//embed/EkWSlcsWCUM',
      text: ' Polygon is a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed polygonal chain or circuit.'
    }
  ]
  englishVideos: VideoModel[] = [
    {
      video: 'Parts of House',
      link: 'https://www.youtube.com//embed/R9intHqlzhc',
      text: 'Learn about different parts of a house'
    },
    {
      video: 'Dialogues',
      link: 'https://www.youtube.com//embed/8irSFvoyLHQ',
      text: 'Learn how sentences are formed'
    },
    {
      video: 'May I take your Order?',
      link: 'https://www.youtube.com//embed/49QFHWIky-k',
      text: 'An example of a dialogue'
    },
    {
      video: 'Weather Song',
      link: 'https://www.youtube.com//embed/-bBqBV0bcA4',
      text: 'Learn about the Weather'
    },
    {
      video: 'Opposite Words',
      link: 'https://www.youtube.com//embed/LF3crlV28xA',
      text: 'Learn about opposite words'
    }
  ]
  scienceVideos: VideoModel[] = [
    {
      video: 'Digestive System',
      link: 'https://www.youtube.com//embed/VwrsL-lCZYo',
      text: 'The gastrointestinal tract is an organ system within humans and other animals which takes in food, digests it to extract and absorb energy and nutrients, and expels the remaining waste as feces.'
    },
    {
      video: 'Black Hole',
      link: 'https://www.youtube.com//embed/IRZYMimUET8',
      text: 'A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—not even particles and electromagnetic radiation such as light—can escape from inside it. '
    },
    {
      video: 'Heart',
      link: 'https://www.youtube.com//embed/tg_ObDJEaGo',
      text: 'The heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system. '
    },
    {
      video: 'Respiratory System',
      link: 'https://www.youtube.com//embed/mOKmjYwfDGU',
      text: 'The respiratory system is a biological system consisting of specific organs and structures used for gas exchange in animals and plants.'
    },
    {
      video: 'Planet Earth',
      link: 'https://www.youtube.com//embed/dk8zDjQT0aE',
      text: 'From the frozen tundra in the north to the dry forests of the equator, Sir David Attenborough narrates a compelling view of the planet. '
    }
  ]
  computerVideos: VideoModel[] = [
    {
      video: "Do's and Dont's of a Computer",
      link: 'https://www.youtube.com//embed/wHGfCn9yZGM',
      text: 'The computer plays an important role for user to store data such as videos'
    },
    {
      video: 'Computer Basics',
      link: 'https://www.youtube.com//embed/HrbQ6XvtLFo',
      text: 'Control unit, arithmetic logic unit and memory are together called the central processing unit or CPU.'
    },
    {
      video: 'Computer Parts',
      link: 'https://www.youtube.com//embed/XTGmkr1IOaA',
      text: 'Computer devices like keyboard, mouse, printer, etc. that we can see and touch are the hardware components of a computer'
    },
    {
      video: 'The Mouse',
      link: 'https://www.youtube.com//embed/ZX4Mt7wJyjg',
      text: 'A computer mouse is an input device that is most often used with a personal computer.'
    },
    {
      video: 'Switching On and Off the Computer',
      link: 'https://www.youtube.com//embed/ev-99L1rUu0',
      text: 'To switch the computer off the right way, click the Start menu and then choose Shut down. '
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
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
  clickvideo(video) {
    if (this.userLoggedIn == true) {
      this.clickedCourse = video;
      this.router.navigateByUrl('videos');
    }
    else {
      this.openSnackBar('Please login to check the courses', 'Click Log In/Sign Up');
    }
  }
}
