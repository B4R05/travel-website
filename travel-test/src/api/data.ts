const DATA = {
  featured: [
    {
      id: 'winter-tour-gothenburg',
      title: 'Gothenburg winter guided tours',
      body:
        'Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Ã„lvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.\n\nâ€“Exciting 5-hour tour\nâ€“ Track and find wild moose\nâ€“ Hike through boreal forest\nâ€“ Eat by a secluded forest lake\nâ€“ Chance to see wolves, foxes and lynx',
      media: {
        large: {
          url:
            'https://webdev-exercise.netlify.com/assets/main-adventure-1.png',
          width: 1280,
          height: 550
        },
        small: {
          url:
            'https://webdev-exercise.netlify.com/assets/small-adventure-1.png',
          width: 375,
          height: 587
        }
      },
      price: {
        value: 65,
        currencyCode: 'GBP',
        unit: 'per person'
      }
    },
    {
      id: 'moose-safari-sweden',
      title: 'Moose safari in Central Sweden',
      body:
        'â€“ Exciting 5-hour tour\nâ€“ Track and find wild moose\nâ€“ Hike through boreal forest\nâ€“ Eat by a secluded forest lake\nâ€“ Chance to see wolves, foxes and lynx',
      media: {
        large: {
          url:
            'https://webdev-exercise.netlify.com/assets/main-adventure-2.png',
          width: 437,
          height: 418
        },
        small: {
          url:
            'https://webdev-exercise.netlify.com/assets/small-adventure-2.png',
          width: 335,
          height: 320
        }
      },
      price: {
        value: 150,
        currencyCode: 'GBP',
        unit: 'per person'
      }
    },
    {
      id: 'brunch-gothenburg-archipelagos',
      title: 'Brunch at the archipelagos of Gothenburg',
      body:
        'Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Ã„lvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.',
      media: {
        large: {
          url:
            'https://webdev-exercise.netlify.com/assets/main-adventure-3.png',
          width: 743,
          height: 418
        },
        small: {
          url:
            'https://webdev-exercise.netlify.com/assets/small-adventure-3.png',
          width: 335,
          height: 335
        }
      },
      price: {
        value: 45,
        currencyCode: 'GBP',
        unit: 'per person'
      }
    }
  ],
  carousel: {
    items: [
      {
        id: 'stockholm-archipelago',
        title: 'Stockholm archipelago',
        media: {
          small: {
            url: 'https://webdev-exercise.netlify.com/assets/carousel-1.png',
            width: 285,
            height: 171
          }
        },
        guidedTour: false,
        price: {
          value: 50,
          currencyCode: 'GBP',
          unit: 'per person'
        }
      },
      {
        id: 'destination-stockholm',
        title: 'Destination Stockholm',
        media: {
          small: {
            url: 'https://webdev-exercise.netlify.com/assets/carousel-2.png',
            width: 285,
            height: 171
          }
        },
        guidedTour: true,
        price: {
          value: 50,
          currencyCode: 'GBP',
          unit: 'per person'
        }
      },
      {
        id: 'southern-sweden',
        title: 'Southern Sweden',
        media: {
          small: {
            url: 'https://webdev-exercise.netlify.com/assets/carousel-3.png',
            width: 285,
            height: 171
          }
        },
        guidedTour: true,
        price: {
          value: 50,
          currencyCode: 'GBP',
          unit: 'per person'
        }
      },
      {
        id: 'destination-gotland',
        title: 'Destination Gotland',
        media: {
          small: {
            url: 'https://webdev-exercise.netlify.com/assets/carousel-4.png',
            width: 285,
            height: 171
          }
        },
        guidedTour: false,
        price: {
          value: 120,
          currencyCode: 'GBP',
          unit: 'per person'
        }
      }
    ]
  }
};

export default DATA;
