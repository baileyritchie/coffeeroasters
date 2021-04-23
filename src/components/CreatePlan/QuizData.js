const data = {
  categories: [{
    title: 'Preferences',
    questionId: 1
    },
    {
      title: 'Bean Type',
      questionId: 2
    }
  ],
  questions:[
    {
      id: 1,
      title: 'How do you drink your coffee?',
      answers: [
        {
          title: 'Capsule',
          descrip: 'Compatible with Nespresso systems and similar brewers'
        },
        {
          title: 'Filter',
          descrip: 'For pour over or drip methods like Aeropress, Chemex, and V60s'
        },
        {
          title: 'Espresso',
          descrip: 'Dense and finely ground beans for an intense, flavorful experience'
        },

      ]
    },
    {
      id: 2,
      title: 'What type of coffee?',
      answers: [
        {
          title: 'Single Origin',
          descrip: 'Distinct, high quality coffee from a specific family-owned farm'
        },
        {
          title: 'Decaf',
          descrip: 'Just like regular coffee, except the caffeine has been removed'
        },
        {
          title: 'Blended',
          descrip: 'Combination of two or three dark roasted beans of organic coffees'
        },

      ]
    },
    {
      id: 3,
      title: 'How much would you like?',
      answers: [
        {
          title: '250g',
          descrip: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
        },
        {
          title: '500g',
          descrip: 'Perfect option for a couple. Yields about 40 delectable cups.'
        },
        {
          title: '1000g',
          descrip: 'Perfect for offices and events. Yields about 90 delightful cups.'
        },

      ]
    },
    {
      id: 4,
      title: 'Want us to grind them?',
      answers: [
        {
          title: 'Wholebeans',
          descrip:'Best choice if you cherish the full sensory experience'
        },
        {
          title: 'Filter',
          descrip: 'For drip or pour-over coffee methods such as V60 or Aeropress'
        },
        {
          title: 'Cafetiere',
          descrip: 'Course ground beans specially suited for french press coffee'
        },

      ]
    },
    {
      id: 5,
      title: 'How often should we deliver?',
      answers: [
        {
          title: 'Every week',
          descrip: '$7.20 per shipment. Includes free first-class shipping.'
        },
        {
          title: 'Every 2 weeks',
          descrip: '$9.60 per shipment. Includes free priority shipping.'
        },
        {
          title: 'Every month',
          descrip: '$12.00 per shipment. Includes free priority shipping.'
        },

      ]
    }
  ]
};

export default data;