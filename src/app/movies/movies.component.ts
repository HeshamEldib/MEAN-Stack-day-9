import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  searchValue: string = 'ali';
  toggleData: boolean = true;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies: any[] = [
    {
      adult: false,
      backdrop_path: '/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg',
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview:
        'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
      popularity: 4411.076,
      poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.8,
      vote_count: 1500,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/xVMtv55caCEvBaV83DofmuZybmI.jpg',
      genre_ids: [53, 28],
      id: 724209,
      original_language: 'en',
      original_title: 'Heart of Stone',
      overview:
        'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.',
      popularity: 2899.65,
      poster_path: '/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
      release_date: '2023-08-09',
      title: 'Heart of Stone',
      video: false,
      vote_average: 6.9,
      vote_count: 824,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
      genre_ids: [28, 878, 27],
      id: 615656,
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview:
        'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 3247.593,
      poster_path: '/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 6.9,
      vote_count: 828,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      genre_ids: [16, 28, 12],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 1872.207,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.4,
      vote_count: 3811,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
      genre_ids: [35, 12, 14],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview:
        'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 1869.493,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.4,
      vote_count: 3433,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview:
        'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 2030.046,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 2961,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [28, 12, 878],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 1830.716,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 7,
      vote_count: 2553,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/axIU0Ay88ZSfZHL5AlsQm64Bcb8.jpg',
      genre_ids: [16, 878, 28, 12],
      id: 1121575,
      original_language: 'en',
      original_title: 'Babylon 5: The Road Home',
      overview:
        'Travel across the galaxy with John Sheridan as he unexpectedly finds himself transported through multiple timelines and alternate realities in a quest to find his way back home. Along the way he reunites with some familiar faces, while discovering cosmic new revelations about the history, purpose, and meaning of the Universe.',
      popularity: 1635.934,
      poster_path: '/qlXLiFKf2kvJ4K2VDBC5Z048vm3.jpg',
      release_date: '2023-08-15',
      title: 'Babylon 5: The Road Home',
      video: false,
      vote_average: 6.8,
      vote_count: 40,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg',
      genre_ids: [27],
      id: 709631,
      original_language: 'en',
      original_title: 'Cobweb',
      overview:
        "Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom wall—one that his parents insist is all in his imagination. As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.",
      popularity: 1646.909,
      poster_path: '/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg',
      release_date: '2023-07-19',
      title: 'Cobweb',
      video: false,
      vote_average: 6.8,
      vote_count: 230,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg',
      genre_ids: [35, 10749],
      id: 884605,
      original_language: 'en',
      original_title: 'No Hard Feelings',
      overview:
        'On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.',
      popularity: 1362.424,
      poster_path: '/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg',
      release_date: '2023-06-15',
      title: 'No Hard Feelings',
      video: false,
      vote_average: 7.1,
      vote_count: 941,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: 'en',
      original_title: 'Fast X',
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 1479.399,
      poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      release_date: '2023-05-17',
      title: 'Fast X',
      video: false,
      vote_average: 7.3,
      vote_count: 3498,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/bz66a19bR6BKsbY8gSZCM4etJiK.jpg',
      genre_ids: [28, 27, 53],
      id: 1006462,
      original_language: 'en',
      original_title: 'The Flood',
      overview:
        'A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.',
      popularity: 1437.801,
      poster_path: '/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg',
      release_date: '2023-07-14',
      title: 'The Flood',
      video: false,
      vote_average: 6.9,
      vote_count: 170,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/1Ju8s25F6l1K1cQRU2mHaODQvzj.jpg',
      genre_ids: [28, 12, 10752],
      id: 961420,
      original_language: 'ja',
      original_title: 'キングダム2 遥かなる大地へ',
      overview:
        'It follows a young man who dreams of becoming a general and Ying Zheng, whose goal is unification.',
      popularity: 1342.266,
      poster_path: '/wE4NqJosSPjiyqStBEv67mQbR1b.jpg',
      release_date: '2022-07-15',
      title: 'Kingdom 2: Far and Away',
      video: false,
      vote_average: 7,
      vote_count: 24,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg',
      genre_ids: [27, 9648, 53],
      id: 614479,
      original_language: 'en',
      original_title: 'Insidious: The Red Door',
      overview:
        "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      popularity: 1268.898,
      poster_path: '/d07phJqCx6z5wILDYqkyraorDPi.jpg',
      release_date: '2023-07-05',
      title: 'Insidious: The Red Door',
      video: false,
      vote_average: 6.9,
      vote_count: 981,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/rbqxeMXNCCwGErcO4e6eUZA9LG1.jpg',
      genre_ids: [878, 27],
      id: 981314,
      original_language: 'en',
      original_title: 'Alien Invasion',
      overview:
        'A group of friends find a large egg, but little do they know it contains an unwelcome predator. Now they must stop it from reaching civilization.',
      popularity: 1237.098,
      poster_path: '/kaSvEH3RJvQa6NfAuEVqDMBEk5E.jpg',
      release_date: '2023-05-11',
      title: 'Alien Invasion',
      video: false,
      vote_average: 4.3,
      vote_count: 24,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/AioRI7M077BBR33VimFiyFop2Rc.jpg',
      genre_ids: [28, 12, 53],
      id: 1149381,
      original_language: 'pl',
      original_title: 'Operacja: Soulcatcher',
      overview:
        'A military contractor hired to seize a weapon that turns people into savage killers seeks revenge when his brother falls victim to the device.',
      popularity: 1344.844,
      poster_path: '/l1f9JSPjCfNftigEii1SDK1g2b3.jpg',
      release_date: '2023-08-02',
      title: 'Soulcatcher',
      video: false,
      vote_average: 6.5,
      vote_count: 150,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/ru2LECaGqWtsL3kRWWJ3EoDlF5J.jpg',
      genre_ids: [53, 28, 18],
      id: 633374,
      original_language: 'ko',
      original_title: '리멤',
      overview:
        "Pil-ju, an Alzheimer's patient in his 80s, who lost all his family during the Japanese colonial era, and devotes his lifelong revenge before his memories disappear, and a young man in his 20s who helps him.",
      popularity: 1214.986,
      poster_path: '/8y9mhh3PqGPXbZVhX7Mc25OJpHP.jpg',
      release_date: '2022-10-26',
      title: 'Remember',
      video: false,
      vote_average: 7.5,
      vote_count: 30,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/97bwlJw220Z5XE3xAHF6G8gA8g6.jpg',
      genre_ids: [27, 14, 28],
      id: 644124,
      original_language: 'it',
      original_title: 'Dampyr',
      overview:
        "Haunted by nightmares, con artist Harlan Draka wanders through the war-torn Balkan countryside, making money out of ridding superstitious villagers of imaginary monsters. But after being hired by soldiers who are under attack by actual vampires, Harlan discovers the truth: he's a Dampyr, half-human and half-vampire. While trying to stop a Master of the Night and his undead army, Harlan will have to learn to manage his newfound powers and uncover his origins.",
      popularity: 1080.303,
      poster_path: '/zAWfB7kaEUUrnTX9ZlaeySAAGgM.jpg',
      release_date: '2022-10-28',
      title: 'Dampyr',
      video: false,
      vote_average: 6.6,
      vote_count: 62,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/mXBth6deOA3XLU6HKwoNor9UivP.jpg',
      genre_ids: [27],
      id: 758769,
      original_language: 'en',
      original_title: 'Unwelcome',
      overview:
        'Londoners Maya and Jamie escape their urban nightmare to the tranquility of rural Ireland only to discover malevolent, murderous goblins lurking in the gnarled, ancient wood at the foot of their new garden. When heavily pregnant Maya’s relationship with a local family turns sour, who – or what – will come to her rescue and to what extremes will she go to protect her unborn child?',
      popularity: 1166.537,
      poster_path: '/88bGObx8YKLQDOOhcrBHHzXpiAv.jpg',
      release_date: '2023-01-27',
      title: 'Unwelcome',
      video: false,
      vote_average: 5.9,
      vote_count: 73,
      showDetails: true,
    },
    {
      adult: false,
      backdrop_path: '/lDCIQ1Qe7cRnhZ4ybQVVEbadMZ.jpg',
      genre_ids: [27, 53],
      id: 1008042,
      original_language: 'en',
      original_title: 'Talk to Me',
      overview:
        'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      popularity: 964.003,
      poster_path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
      release_date: '2023-07-26',
      title: 'Talk to Me',
      video: false,
      vote_average: 7.1,
      vote_count: 252,
      showDetails: true,
    },
  ];

  constructor() {}

  toggleDescription(movieId: number) {
    for (const movie of this.allMovies) {
      if (movie.id == movieId) {
        movie.showDetails = !movie.showDetails;
      }
    }
    // this.toggleData=!this.toggleData;
  }
}
