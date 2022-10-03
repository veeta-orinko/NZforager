exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('edible_plants').insert([
    {
      id: 1,
      plant_name: 'Bidibid / Piripiri',
      other_names: 'Acaena anserinifolia, Hutiwai',
      edible_parts: 'Leaves',
      image_url: './images/bidibid',
      description:
        'Perennial herb with slender woody stems, sticky crawling leaves, with a round and barbed seed head. Piripiri leaves have been noted for their medicinal use by Māori - the leaves brewed as tea are used as a natural remedy for kidney, bladder, and stomach issues and rheumatism. Leaves boiled or steeped in hot water, are also applied to open wounds.',
      tags: 'Medicinal',
    },

    {
      id: 2,
      plant_name: 'Cape Gooseberry',
      other_names: 'Dodonaea Viscosa',
      edible_parts: 'Berry',
      image_url: './images/capegooseberry.png',
      description: `Cape gooseberries are juicy berries encased in a 'lantern'. The berries are best eaten raw`,
      tags: 'Edible, Berries, Berry',
    },

    {
      id: 3,
      plant_name: 'Chickweed',
      other_names: '',
      edible_parts: 'Flowers, Leaves',
      image_url: './images/chickweed.png',
      description:
        'Chickweed flowers and leaves can be eaten raw and cooked. They have a light, mild, and pleasant taste and are great in salads or pesto. ',
      tags: '',
    },

    {
      id: 4,
      plant_name: 'Dandelion',
      other_names: '',
      edible_parts: './images/dandelion.png',
      image_url: '',
      description: '',
      tags: 'medicinal',
    },

    {
      id: 5,
      plant_name: 'Banana Passionfruit',
      other_names: '',
      edible_parts: 'Fruit',
      image_url: './images/banana_passionfruit.png',
      description:
        'Banana passionfruit are banned from sale, propogation and distribution in New Zealand due to being an invasive species. Inside the fruit is a sweet and edible pulp with seeds, similar to passionfruit. It can be used in pies, cakes, ice cream and juices.',
      tags: '',
    },

    // {
    //   id: 6,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 7,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 8,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 9,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 10,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 11,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 12,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 13,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 14,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 15,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 16,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 17,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 18,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 19,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 20,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 21,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 22,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 23,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 24,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 25,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 26,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 27,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 28,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 29,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 30,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 31,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 32,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 33,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 34,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 35,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 36,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 37,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 38,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 39,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 40,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 41,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 42,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 43,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 44,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 45,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 46,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 47,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 48,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 49,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 50,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 51,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 52,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 53,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 54,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 55,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 56,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 57,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 58,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 59,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 60,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 61,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 62,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 63,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 64,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 65,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 66,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 67,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 68,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 69,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 70,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 71,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 72,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 73,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 74,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 75,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 76,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 77,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 78,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 79,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 80,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 81,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 82,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 83,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 84,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 85,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 86,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 87,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 88,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 89,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 90,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 91,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 92,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 93,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 94,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 95,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 96,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 97,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 98,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 99,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 100,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 101,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 102,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 103,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 104,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 105,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 106,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 107,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 108,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 109,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 110,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 111,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 112,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 113,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 114,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 115,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 116,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 117,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 118,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 119,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 120,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 121,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 122,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 123,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 124,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 125,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 126,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 127,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 128,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 129,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 130,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 131,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 132,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 133,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 134,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 135,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 136,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 137,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 138,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 139,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 140,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 141,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 142,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 143,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 144,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 145,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 146,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 147,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 148,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 149,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 150,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 151,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 152,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 153,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 154,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 155,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 156,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 157,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 158,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 159,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 160,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 161,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 162,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 163,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 164,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 165,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 166,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 167,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 168,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 169,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 170,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 171,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 172,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 173,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 174,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 175,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 176,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 177,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 178,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 179,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 180,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 181,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 182,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 183,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 184,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 185,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 186,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 187,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 188,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 189,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 190,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 191,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 192,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 193,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 194,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 195,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 196,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 197,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 198,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 199,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 200,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 201,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 202,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 203,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 204,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 205,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 206,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 207,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 208,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 209,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 210,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 211,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 212,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 213,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 214,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 215,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },

    // {
    //   id: 216,
    //   plant_name: '',
    //   other_names: '',
    //   edible_parts: '',
    //   image_url: '',
    //   description: '',
    //   tags: '',
    // },
  ])
}
