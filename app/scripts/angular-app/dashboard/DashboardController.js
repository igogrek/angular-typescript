var DashboardController = 
 function ($scope,$interval) {
        $scope.myItems = [
  {
    "_id": "55fc15d7e1a7d5980ac6f6cb",
    "index": 0,
    "guid": "7ab112a8-aeb1-4cb2-9fdd-fb3bbffe1220",
    "isActive": false,
    "balance": "$2,227.22",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "blue",
    "name": {
      "first": "Mills",
      "last": "Horne"
    },
    "company": "BOLAX",
    "email": "mills.horne@bolax.com",
    "phone": "+1 (837) 437-3578",
    "address": "649 Strauss Street, Cressey, Virginia, 1916",
    "about": "Proident aliqua magna do magna ut elit minim adipisicing amet qui deserunt officia. Id voluptate eu sit consectetur excepteur. Lorem aliquip culpa do do voluptate sunt aliquip laboris occaecat ad eu laborum eiusmod. Velit aute dolor irure ad exercitation. Voluptate aliqua esse proident Lorem cillum amet Lorem tempor quis Lorem ullamco veniam anim culpa. Tempor ex deserunt exercitation tempor nisi minim est enim excepteur nisi sunt laborum. Lorem Lorem duis officia laboris commodo consectetur.",
    "registered": "Thursday, February 27, 2014 5:04 AM",
    "latitude": "-54.099809",
    "longitude": "-29.961575",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Mills! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d8d6757dacd959a7cd",
    "index": 1,
    "guid": "e27157e7-bd0a-46de-9641-bf5848183d24",
    "isActive": false,
    "balance": "$1,133.11",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Lillie",
      "last": "Little"
    },
    "company": "MIXERS",
    "email": "lillie.little@mixers.biz",
    "phone": "+1 (842) 570-3241",
    "address": "159 Lake Street, Masthope, Tennessee, 979",
    "about": "Velit enim excepteur cupidatat sunt excepteur incididunt irure velit laboris pariatur qui ea dolor elit. Non voluptate sit cupidatat fugiat ex ullamco incididunt dolor qui. Pariatur cupidatat sint magna dolor ex esse laboris laboris. Ea ipsum dolor quis nulla anim mollit dolor aliqua aute amet. Ex cupidatat duis laborum deserunt sint ad. Amet in nostrud ea officia laborum elit dolore culpa tempor ad. Eiusmod laboris ex laboris laboris incididunt incididunt nulla nostrud officia amet.",
    "registered": "Saturday, June 6, 2015 2:09 AM",
    "latitude": "24.89179",
    "longitude": "-69.597432",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Lillie! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d83eaa11297d26c493",
    "index": 2,
    "guid": "e76dc0c7-4ee1-49c2-b411-6e14d36e8e48",
    "isActive": true,
    "balance": "$1,944.51",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": {
      "first": "Mcdonald",
      "last": "Flowers"
    },
    "company": "EARTHWAX",
    "email": "mcdonald.flowers@earthwax.io",
    "phone": "+1 (912) 472-3411",
    "address": "626 Granite Street, Westboro, West Virginia, 2132",
    "about": "Reprehenderit tempor velit sunt voluptate commodo duis commodo. Eiusmod ipsum ea do excepteur eu excepteur adipisicing occaecat. Sit veniam occaecat ipsum laborum veniam deserunt. Deserunt incididunt minim duis culpa duis et ullamco amet cupidatat in cillum veniam ipsum.",
    "registered": "Saturday, February 22, 2014 2:01 PM",
    "latitude": "-13.280921",
    "longitude": "171.053515",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Mcdonald! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d84761df1d0a5c2458",
    "index": 3,
    "guid": "abbcfb0a-8fd4-40ba-b47d-e66629c01075",
    "isActive": true,
    "balance": "$2,124.00",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": {
      "first": "Douglas",
      "last": "Wolfe"
    },
    "company": "GEEKKO",
    "email": "douglas.wolfe@geekko.ca",
    "phone": "+1 (912) 443-2915",
    "address": "346 Albemarle Terrace, Suitland, Kansas, 4231",
    "about": "Officia eiusmod ad nulla dolor nostrud aliquip voluptate quis non. Cupidatat in labore in tempor irure officia. Sint sint et excepteur ea duis excepteur pariatur magna irure exercitation pariatur sunt qui proident.",
    "registered": "Friday, August 15, 2014 5:18 AM",
    "latitude": "6.868466",
    "longitude": "11.934101",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Douglas! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d82767c6da0aea4650",
    "index": 4,
    "guid": "24425446-b525-4183-8851-3312c2067fd2",
    "isActive": false,
    "balance": "$1,470.21",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": {
      "first": "Sharron",
      "last": "Glover"
    },
    "company": "COMCUBINE",
    "email": "sharron.glover@comcubine.co.uk",
    "phone": "+1 (804) 430-3976",
    "address": "831 Douglass Street, Chamizal, Indiana, 898",
    "about": "Qui non ipsum ipsum pariatur laboris. Laborum amet commodo et aute eu. Elit commodo culpa ea dolore eu anim ullamco aute id proident minim sunt est ipsum. Reprehenderit nisi nulla laborum aliqua elit duis irure proident laboris cillum amet magna aliqua. Aute magna duis ullamco mollit. Sit nisi anim Lorem fugiat commodo ut non magna labore mollit voluptate quis mollit exercitation. Officia est cillum in nisi voluptate minim esse commodo ea.",
    "registered": "Saturday, February 22, 2014 11:22 PM",
    "latitude": "89.963148",
    "longitude": "137.565852",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Sharron! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d88cf9e8fea9a92679",
    "index": 5,
    "guid": "10be1aea-1d90-452c-92b0-aefc870e4d4b",
    "isActive": false,
    "balance": "$3,622.88",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": {
      "first": "Adams",
      "last": "Stark"
    },
    "company": "HELIXO",
    "email": "adams.stark@helixo.us",
    "phone": "+1 (837) 548-2375",
    "address": "978 Woodbine Street, Macdona, Federated States Of Micronesia, 3542",
    "about": "Amet culpa reprehenderit reprehenderit ullamco aliqua eu qui. Officia incididunt laborum cillum pariatur pariatur dolore mollit proident sit labore. Amet mollit ex eu aliquip proident qui eu tempor consequat.",
    "registered": "Tuesday, December 30, 2014 7:45 PM",
    "latitude": "12.330993",
    "longitude": "142.658234",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Adams! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d882c8ed5ee3bc4ec4",
    "index": 6,
    "guid": "98e5b7d0-68fc-4c1d-a588-89c357ebc8d6",
    "isActive": true,
    "balance": "$3,738.54",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": {
      "first": "Sargent",
      "last": "Ramos"
    },
    "company": "COMVENE",
    "email": "sargent.ramos@comvene.net",
    "phone": "+1 (925) 405-3332",
    "address": "169 Oakland Place, Groveville, Pennsylvania, 3439",
    "about": "Deserunt sint irure amet veniam ex ut quis officia enim anim dolore occaecat officia velit. Adipisicing occaecat labore laborum eu. Adipisicing aliquip nostrud nisi incididunt dolor nostrud culpa in. Et excepteur duis aliquip qui consectetur culpa laborum nulla duis id. Aliqua aliquip pariatur deserunt non.",
    "registered": "Saturday, July 25, 2015 1:43 PM",
    "latitude": "19.550482",
    "longitude": "110.585452",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Sargent! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d835570a42610aa957",
    "index": 7,
    "guid": "db79e802-ffda-40a3-91f7-dbd2e95327c4",
    "isActive": true,
    "balance": "$1,520.97",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": {
      "first": "Forbes",
      "last": "Pace"
    },
    "company": "ZENSUS",
    "email": "forbes.pace@zensus.me",
    "phone": "+1 (832) 471-2412",
    "address": "738 Gem Street, Veyo, South Dakota, 2308",
    "about": "Elit reprehenderit enim dolor reprehenderit ullamco eiusmod amet aliqua pariatur nulla. Aliqua aliquip fugiat deserunt nisi ad eu dolor ex occaecat ad. Cillum sint est ad aute dolore aliquip. Occaecat esse mollit minim qui duis laborum aliquip laboris nisi. Nulla eu cillum duis velit enim cupidatat aliqua. Id qui aliqua officia pariatur officia nostrud.",
    "registered": "Wednesday, February 18, 2015 5:18 AM",
    "latitude": "-13.286677",
    "longitude": "-55.810538",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Forbes! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d862a1ccf7a21f7778",
    "index": 8,
    "guid": "26173730-ca7a-40da-8ae2-6b53954ee431",
    "isActive": false,
    "balance": "$2,031.88",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Caitlin",
      "last": "English"
    },
    "company": "BLURRYBUS",
    "email": "caitlin.english@blurrybus.name",
    "phone": "+1 (803) 569-2429",
    "address": "592 Lefferts Avenue, Roderfield, Nebraska, 5416",
    "about": "Adipisicing consequat ullamco excepteur qui nostrud veniam dolor culpa culpa ipsum fugiat consequat sunt proident. Enim consectetur quis dolor esse adipisicing non dolore laboris in Lorem eu elit. Aliqua Lorem veniam ea reprehenderit culpa ea cillum minim voluptate eu amet. Excepteur culpa ullamco eiusmod consequat id do exercitation aute duis.",
    "registered": "Wednesday, March 5, 2014 9:38 PM",
    "latitude": "-20.807832",
    "longitude": "-178.985863",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Caitlin! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d8341d72fd4539d1cf",
    "index": 9,
    "guid": "bb6102e3-0aea-4d31-801f-79aeaed12215",
    "isActive": true,
    "balance": "$3,566.80",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": {
      "first": "Duffy",
      "last": "Carrillo"
    },
    "company": "GOKO",
    "email": "duffy.carrillo@goko.info",
    "phone": "+1 (990) 491-3150",
    "address": "383 College Place, Callaghan, Wisconsin, 4383",
    "about": "Qui ad dolor laboris laborum tempor labore. Laborum labore consectetur eiusmod laboris officia exercitation. Eiusmod aliqua velit proident commodo exercitation labore. Cupidatat nulla laboris et laboris labore elit reprehenderit qui consequat. Ipsum do incididunt voluptate in anim aliquip. Ut excepteur est deserunt elit ipsum. Velit incididunt do incididunt laboris.",
    "registered": "Thursday, July 17, 2014 11:31 PM",
    "latitude": "56.663875",
    "longitude": "-105.279369",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Duffy! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d8675caeeb32a4607a",
    "index": 10,
    "guid": "47958086-e3ce-44ed-9e53-d08876db3b64",
    "isActive": false,
    "balance": "$2,051.62",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Antoinette",
      "last": "Ford"
    },
    "company": "INSECTUS",
    "email": "antoinette.ford@insectus.org",
    "phone": "+1 (911) 479-2985",
    "address": "806 Albemarle Road, Fowlerville, Michigan, 7539",
    "about": "Aliquip laboris pariatur quis deserunt occaecat Lorem non cupidatat consequat in ut culpa. Aliqua adipisicing irure veniam nostrud in commodo dolore esse. Tempor consequat nisi pariatur incididunt minim id. Dolore commodo culpa tempor incididunt. Nisi exercitation duis exercitation qui Lorem culpa.",
    "registered": "Saturday, June 21, 2014 5:17 PM",
    "latitude": "53.235541",
    "longitude": "160.147339",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Antoinette! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d8108710def02f1a63",
    "index": 11,
    "guid": "81cb92e4-f86e-4d39-b06d-9b61e4f61f04",
    "isActive": true,
    "balance": "$1,946.26",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "green",
    "name": {
      "first": "Jennifer",
      "last": "Gill"
    },
    "company": "DANCITY",
    "email": "jennifer.gill@dancity.tv",
    "phone": "+1 (954) 550-2812",
    "address": "973 Boerum Street, Alafaya, Massachusetts, 842",
    "about": "Enim commodo duis non qui id adipisicing pariatur irure culpa aliqua. Ut labore veniam voluptate consectetur Lorem pariatur cillum. Deserunt aliquip adipisicing tempor veniam labore reprehenderit labore duis ea exercitation cillum do laborum.",
    "registered": "Monday, February 17, 2014 3:35 PM",
    "latitude": "50.822431",
    "longitude": "93.94944",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Jennifer! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d942e94b06e93bb4eb",
    "index": 12,
    "guid": "29f6876f-2ddf-48b8-8930-2fbfc6ae1b95",
    "isActive": true,
    "balance": "$3,811.52",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Gallegos",
      "last": "Hines"
    },
    "company": "PORTICO",
    "email": "gallegos.hines@portico.com",
    "phone": "+1 (840) 448-2265",
    "address": "139 Hall Street, Germanton, Connecticut, 566",
    "about": "Magna quis sit culpa minim velit magna quis sit. Amet magna anim ipsum deserunt tempor aliqua in cupidatat non mollit aliquip id. Labore enim amet culpa dolore adipisicing non irure culpa officia incididunt Lorem esse aliquip.",
    "registered": "Wednesday, December 3, 2014 12:31 AM",
    "latitude": "-57.03986",
    "longitude": "-83.064122",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Gallegos! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d9f6446c3e77064712",
    "index": 13,
    "guid": "71a4c875-8b2d-4efb-9c1e-3b91554d199f",
    "isActive": false,
    "balance": "$2,817.94",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": {
      "first": "Alison",
      "last": "York"
    },
    "company": "CALLFLEX",
    "email": "alison.york@callflex.biz",
    "phone": "+1 (931) 586-2748",
    "address": "857 Navy Street, Levant, Northern Mariana Islands, 7153",
    "about": "Veniam eu laboris laborum minim sunt commodo id magna in ea qui. Dolor quis sint cupidatat anim dolore fugiat reprehenderit ut exercitation fugiat. In quis magna pariatur voluptate sunt do incididunt in est irure id magna. Anim occaecat culpa officia esse dolor aute et ea mollit voluptate non.",
    "registered": "Friday, July 3, 2015 4:11 PM",
    "latitude": "70.632982",
    "longitude": "-13.680842",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Alison! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d98cb8c937888920c4",
    "index": 14,
    "guid": "f5484e7c-3140-4e34-9e7e-051618e51770",
    "isActive": false,
    "balance": "$1,211.11",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "green",
    "name": {
      "first": "Carrie",
      "last": "Anthony"
    },
    "company": "PAWNAGRA",
    "email": "carrie.anthony@pawnagra.io",
    "phone": "+1 (939) 580-3915",
    "address": "121 Heath Place, Irwin, Puerto Rico, 1044",
    "about": "Et consectetur aute Lorem sit laboris magna magna laborum elit. Aute dolor sint mollit aliqua dolor ipsum. In duis Lorem ut qui incididunt elit pariatur et ipsum officia irure cillum labore Lorem.",
    "registered": "Thursday, July 17, 2014 7:46 PM",
    "latitude": "0.009361",
    "longitude": "127.787428",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Carrie! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d9ff29013958d639c5",
    "index": 15,
    "guid": "2e08fcb7-e391-4269-af71-7330f7d64675",
    "isActive": true,
    "balance": "$2,544.09",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": {
      "first": "Lee",
      "last": "Cleveland"
    },
    "company": "XTH",
    "email": "lee.cleveland@xth.ca",
    "phone": "+1 (879) 587-2975",
    "address": "826 Wolf Place, Makena, Delaware, 7068",
    "about": "Aute sit esse fugiat tempor ea exercitation consequat labore eiusmod et elit consequat dolore reprehenderit. Cupidatat anim pariatur enim magna labore esse anim adipisicing et minim dolor anim duis. Veniam excepteur quis aute laborum eu velit culpa officia amet irure fugiat adipisicing commodo.",
    "registered": "Sunday, February 16, 2014 4:22 PM",
    "latitude": "-77.699106",
    "longitude": "142.913677",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Lee! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d93c0debf7ec10b4d1",
    "index": 16,
    "guid": "4f522c26-ba40-4188-b443-6482fa2d699e",
    "isActive": false,
    "balance": "$3,833.90",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Stacy",
      "last": "Head"
    },
    "company": "CEMENTION",
    "email": "stacy.head@cemention.co.uk",
    "phone": "+1 (859) 415-2277",
    "address": "159 Dank Court, Chilton, Mississippi, 4827",
    "about": "Proident amet eu cillum sunt ipsum officia ad laboris amet culpa ipsum aute. Proident ex et reprehenderit mollit labore cillum. Nisi consectetur duis esse nisi nisi adipisicing esse culpa ipsum ea nostrud anim eu. Anim veniam esse adipisicing ut ex elit laboris ipsum reprehenderit nisi. Aute labore nisi officia esse excepteur magna qui veniam duis sunt occaecat.",
    "registered": "Sunday, April 13, 2014 4:24 PM",
    "latitude": "57.456586",
    "longitude": "163.560719",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Stacy! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d9de75f12d36730b2a",
    "index": 17,
    "guid": "4a9cd2f0-68c9-4e9b-9661-d06ada61213b",
    "isActive": false,
    "balance": "$1,299.31",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Maritza",
      "last": "Emerson"
    },
    "company": "GEOSTELE",
    "email": "maritza.emerson@geostele.us",
    "phone": "+1 (965) 561-3134",
    "address": "170 Rose Street, Holtville, Arkansas, 7549",
    "about": "Adipisicing mollit nulla sunt adipisicing nulla qui dolor proident. Labore adipisicing nulla pariatur exercitation aute. Id laborum cupidatat nostrud nulla excepteur. Dolore Lorem est tempor commodo laboris Lorem velit sunt proident aute est incididunt. Anim magna nisi nulla laborum amet aute in labore anim proident. Eu elit ullamco reprehenderit irure incididunt.",
    "registered": "Saturday, September 13, 2014 2:37 PM",
    "latitude": "-17.041384",
    "longitude": "-135.900368",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Maritza! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d9489e19cc62feaa41",
    "index": 18,
    "guid": "4951efb3-bd10-46ec-826e-9ae14483e1f6",
    "isActive": false,
    "balance": "$2,297.44",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": {
      "first": "Cathy",
      "last": "Perkins"
    },
    "company": "GALLAXIA",
    "email": "cathy.perkins@gallaxia.net",
    "phone": "+1 (950) 498-2691",
    "address": "136 Irwin Street, Greenfields, Texas, 7675",
    "about": "Dolor enim veniam consectetur sint exercitation. Ea nisi enim ex irure magna proident quis aute dolore ea irure esse. Minim deserunt cillum aute enim veniam magna est. Sit adipisicing officia reprehenderit aute labore eu aliqua dolore nostrud exercitation elit pariatur.",
    "registered": "Thursday, January 9, 2014 5:30 AM",
    "latitude": "66.245278",
    "longitude": "-1.058937",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Cathy! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d9f3276ccef63be416",
    "index": 19,
    "guid": "e303ae6a-3adf-482d-9661-955c9e760bbe",
    "isActive": false,
    "balance": "$1,896.77",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": {
      "first": "Harper",
      "last": "Ballard"
    },
    "company": "COMTREK",
    "email": "harper.ballard@comtrek.me",
    "phone": "+1 (842) 569-2762",
    "address": "695 Green Street, Succasunna, South Carolina, 4912",
    "about": "Excepteur labore pariatur ex ea proident ullamco. Duis eiusmod sunt anim enim occaecat sit culpa non duis adipisicing sint incididunt. Officia deserunt laborum adipisicing aliqua voluptate sunt officia duis aliquip. Exercitation quis irure nostrud ea mollit. Excepteur tempor ad excepteur Lorem mollit quis labore esse sunt nostrud est culpa. Fugiat ex sit proident tempor laboris qui.",
    "registered": "Monday, September 14, 2015 11:27 AM",
    "latitude": "2.130445",
    "longitude": "60.642393",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Harper! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d99a7cf88b9a41a42a",
    "index": 20,
    "guid": "18b282b0-e881-4081-adda-ef391c67abea",
    "isActive": true,
    "balance": "$3,648.41",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": {
      "first": "Gilda",
      "last": "Farmer"
    },
    "company": "STEELTAB",
    "email": "gilda.farmer@steeltab.name",
    "phone": "+1 (981) 432-3792",
    "address": "974 Delmonico Place, Topaz, California, 366",
    "about": "In proident laboris minim est esse. Et sit nostrud officia pariatur fugiat velit ut irure. Ad consequat enim ipsum qui mollit duis enim commodo enim occaecat cillum quis pariatur.",
    "registered": "Friday, March 6, 2015 1:00 AM",
    "latitude": "-8.249117",
    "longitude": "102.496873",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Gilda! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d9fce8e073cf880a62",
    "index": 21,
    "guid": "c456e7e0-0067-40e4-8547-82631c42168d",
    "isActive": true,
    "balance": "$2,010.26",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": {
      "first": "Mullins",
      "last": "Rodriquez"
    },
    "company": "DIGIRANG",
    "email": "mullins.rodriquez@digirang.info",
    "phone": "+1 (887) 526-3805",
    "address": "769 Ovington Avenue, Unionville, Nevada, 1416",
    "about": "Ipsum consectetur anim Lorem culpa elit proident non ipsum tempor. Adipisicing duis sint quis occaecat adipisicing anim Lorem exercitation sint. Non in nostrud minim adipisicing minim mollit laborum pariatur magna est tempor laborum minim veniam.",
    "registered": "Wednesday, May 21, 2014 3:29 AM",
    "latitude": "33.298661",
    "longitude": "142.387591",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Mullins! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d9101fa9a828cbd9b4",
    "index": 22,
    "guid": "811f35cb-7b0e-4072-84de-af07255d05e5",
    "isActive": false,
    "balance": "$2,982.61",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "Sanford",
      "last": "Lowe"
    },
    "company": "EVENTAGE",
    "email": "sanford.lowe@eventage.org",
    "phone": "+1 (903) 576-3104",
    "address": "196 Jay Street, Joppa, Arizona, 7146",
    "about": "Aliqua eu pariatur excepteur dolor anim esse eu aliqua Lorem nulla elit. Ad Lorem duis eu labore sit incididunt laboris. Incididunt officia et ipsum labore sunt ipsum irure officia ad amet pariatur tempor tempor minim. Ad pariatur excepteur fugiat occaecat nisi fugiat est id aute proident velit. Cillum voluptate cillum consequat quis enim sunt commodo ea Lorem incididunt exercitation aliqua eu. Veniam irure et sit eiusmod sunt voluptate incididunt labore tempor. In dolor aliquip aute dolore incididunt adipisicing excepteur occaecat.",
    "registered": "Tuesday, March 24, 2015 11:10 AM",
    "latitude": "51.585043",
    "longitude": "20.395822",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Sanford! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d98f9f5d14d59d5379",
    "index": 23,
    "guid": "b175f922-4430-490b-b5f3-363296c31134",
    "isActive": false,
    "balance": "$3,004.20",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": {
      "first": "Heather",
      "last": "Wilder"
    },
    "company": "RENOVIZE",
    "email": "heather.wilder@renovize.tv",
    "phone": "+1 (982) 539-3316",
    "address": "827 Micieli Place, Greenock, Oklahoma, 4357",
    "about": "Qui do nostrud anim duis ullamco velit culpa velit. Sit officia ullamco adipisicing eiusmod. Culpa cillum consectetur ad esse non id minim dolore. Incididunt aliquip mollit veniam ea magna officia elit reprehenderit nostrud ut. Ea velit esse Lorem aliquip nisi.",
    "registered": "Sunday, August 17, 2014 11:18 AM",
    "latitude": "-17.064839",
    "longitude": "111.65373",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Heather! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d99e7402ef1fa66b2f",
    "index": 24,
    "guid": "2d26b7c7-de55-42b8-aa46-1f2a62a2c384",
    "isActive": false,
    "balance": "$3,256.85",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Celina",
      "last": "Robbins"
    },
    "company": "KAGE",
    "email": "celina.robbins@kage.com",
    "phone": "+1 (861) 404-3034",
    "address": "762 Anchorage Place, Lindisfarne, Louisiana, 8909",
    "about": "Laboris irure incididunt ullamco incididunt eiusmod exercitation eu elit sunt laboris esse et ut id. Fugiat ex est minim est id officia aliquip elit non eu et qui ea. Deserunt magna anim velit id in. Est cillum aliquip eu sunt fugiat consectetur ipsum do magna.",
    "registered": "Sunday, July 12, 2015 3:51 AM",
    "latitude": "-5.400363",
    "longitude": "-177.755355",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Celina! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d9b5956986c97a18dc",
    "index": 25,
    "guid": "4e336895-d3a8-411e-9bdc-435f52dc8eed",
    "isActive": false,
    "balance": "$1,511.20",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "blue",
    "name": {
      "first": "Bridgett",
      "last": "Singleton"
    },
    "company": "GOLOGY",
    "email": "bridgett.singleton@gology.biz",
    "phone": "+1 (964) 564-2688",
    "address": "216 Gerritsen Avenue, Lavalette, Montana, 9728",
    "about": "Tempor quis tempor pariatur aliqua. Amet incididunt non in mollit eu tempor velit adipisicing nulla sit incididunt culpa esse qui. Incididunt anim magna adipisicing ipsum voluptate nostrud nostrud culpa minim in Lorem.",
    "registered": "Monday, October 27, 2014 8:29 PM",
    "latitude": "88.090621",
    "longitude": "120.358808",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Bridgett! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d97d81b5187974c935",
    "index": 26,
    "guid": "63ed7bb6-c370-4829-b4e1-fa84ccaff828",
    "isActive": true,
    "balance": "$2,746.30",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "green",
    "name": {
      "first": "Donaldson",
      "last": "Mcknight"
    },
    "company": "SNORUS",
    "email": "donaldson.mcknight@snorus.io",
    "phone": "+1 (940) 541-3638",
    "address": "156 Desmond Court, Lindcove, Alabama, 7173",
    "about": "Laboris duis laboris ullamco velit sit commodo pariatur. Veniam cupidatat velit aliqua velit ut qui. Consequat enim do do ea nulla voluptate duis.",
    "registered": "Monday, March 2, 2015 5:04 AM",
    "latitude": "68.975519",
    "longitude": "-5.302395",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Donaldson! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d9d1d24075c7f2b9b0",
    "index": 27,
    "guid": "bd469fb9-5cf3-4f4d-85d9-0b4fd6346911",
    "isActive": false,
    "balance": "$2,392.66",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": {
      "first": "Tia",
      "last": "Martin"
    },
    "company": "VENOFLEX",
    "email": "tia.martin@venoflex.ca",
    "phone": "+1 (939) 524-2412",
    "address": "780 Overbaugh Place, Dargan, North Carolina, 4054",
    "about": "Sunt adipisicing reprehenderit officia laborum eiusmod cillum ullamco irure proident minim qui pariatur. Adipisicing sunt aliquip culpa incididunt anim. Excepteur ut amet pariatur eiusmod.",
    "registered": "Saturday, August 8, 2015 11:57 AM",
    "latitude": "-39.299823",
    "longitude": "-60.442323",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Tia! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15d98d53016b8c713c51",
    "index": 28,
    "guid": "39c8d024-cc2b-466e-90f9-72d490dbe8fe",
    "isActive": true,
    "balance": "$1,434.50",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "blue",
    "name": {
      "first": "Susie",
      "last": "Levy"
    },
    "company": "VIAGRAND",
    "email": "susie.levy@viagrand.co.uk",
    "phone": "+1 (832) 534-2151",
    "address": "198 Gallatin Place, Sparkill, Utah, 7961",
    "about": "Nulla aute aliqua est in. Pariatur fugiat ut et aliqua elit minim et. Ex in elit reprehenderit incididunt ad cupidatat commodo ea irure quis velit ex.",
    "registered": "Monday, August 25, 2014 10:30 PM",
    "latitude": "52.380814",
    "longitude": "38.968244",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Susie! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15d9ef156409446d0137",
    "index": 29,
    "guid": "9bef1adb-ed11-4a9e-b01b-2c4961749e61",
    "isActive": false,
    "balance": "$2,842.56",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": {
      "first": "Flores",
      "last": "Heath"
    },
    "company": "QUONK",
    "email": "flores.heath@quonk.us",
    "phone": "+1 (902) 462-3133",
    "address": "930 Court Square, Swartzville, American Samoa, 9379",
    "about": "Velit excepteur anim occaecat officia ipsum enim voluptate commodo tempor Lorem id commodo. Sit incididunt minim sint reprehenderit in ad irure tempor sint amet. Magna et ut mollit officia irure cillum occaecat consectetur duis eu reprehenderit aliquip ullamco veniam. Tempor labore labore minim duis sit. Veniam officia non adipisicing esse fugiat qui esse labore est.",
    "registered": "Saturday, December 20, 2014 11:39 PM",
    "latitude": "-36.010365",
    "longitude": "39.179127",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Flores! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d972109c4ed44759ac",
    "index": 30,
    "guid": "c5634bd8-4e33-49fd-8349-a5d005ac4740",
    "isActive": false,
    "balance": "$1,250.41",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": {
      "first": "Karina",
      "last": "Lopez"
    },
    "company": "MATRIXITY",
    "email": "karina.lopez@matrixity.net",
    "phone": "+1 (900) 520-3302",
    "address": "216 Jamison Lane, Watrous, Palau, 3782",
    "about": "Id ex deserunt sit veniam elit dolore nisi laborum sit. Duis eu proident labore dolore veniam sunt sint adipisicing veniam dolor incididunt cillum mollit. Occaecat eiusmod ipsum excepteur laboris officia mollit non commodo consectetur mollit ad ea enim ullamco. Consequat elit sunt occaecat qui in amet aute ut consectetur. Consectetur voluptate commodo dolor ipsum voluptate do ex Lorem cillum eiusmod cupidatat ea.",
    "registered": "Thursday, January 8, 2015 10:37 AM",
    "latitude": "-58.681764",
    "longitude": "17.58025",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Karina! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d9da62aefff6a1b268",
    "index": 31,
    "guid": "4f6b963c-0a76-4f31-ba39-4820bcadf855",
    "isActive": true,
    "balance": "$2,962.60",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": {
      "first": "Lorena",
      "last": "Kline"
    },
    "company": "GRUPOLI",
    "email": "lorena.kline@grupoli.me",
    "phone": "+1 (855) 456-3053",
    "address": "165 Newport Street, Harrison, New Mexico, 2753",
    "about": "Qui eiusmod ad velit voluptate sunt exercitation quis sit. Nulla anim ipsum dolor eu ea enim. Eu ut do dolor elit aliquip occaecat sint voluptate. Non duis deserunt fugiat laborum ullamco aliquip mollit excepteur ut consectetur ipsum sit id. Incididunt cupidatat Lorem sit amet consectetur. Amet mollit culpa magna ex veniam commodo reprehenderit irure veniam reprehenderit officia. Adipisicing elit pariatur excepteur laborum laboris.",
    "registered": "Tuesday, May 12, 2015 3:14 AM",
    "latitude": "65.732043",
    "longitude": "160.959277",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Lorena! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15d9f274c6487d459000",
    "index": 32,
    "guid": "d96bba83-fe52-443e-a694-1745293a44e2",
    "isActive": false,
    "balance": "$2,192.78",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": {
      "first": "Hewitt",
      "last": "Spears"
    },
    "company": "BUZZOPIA",
    "email": "hewitt.spears@buzzopia.name",
    "phone": "+1 (882) 553-3834",
    "address": "846 Love Lane, Kaka, Marshall Islands, 6739",
    "about": "Veniam enim aliqua irure consequat sit ex. Est ea in ea cillum velit commodo adipisicing ex amet eu. Eiusmod aliquip mollit mollit excepteur. Laboris ullamco ut veniam occaecat magna consectetur minim pariatur consectetur cillum est amet. Non irure irure Lorem fugiat ad qui et magna reprehenderit exercitation magna mollit.",
    "registered": "Monday, January 27, 2014 3:18 AM",
    "latitude": "-30.715198",
    "longitude": "92.264529",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Hewitt! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15dabc3cbfa256f6c58f",
    "index": 33,
    "guid": "6132fd78-fbba-4e97-a761-80ccba07e208",
    "isActive": true,
    "balance": "$3,791.97",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": {
      "first": "Clark",
      "last": "Garcia"
    },
    "company": "ROTODYNE",
    "email": "clark.garcia@rotodyne.info",
    "phone": "+1 (886) 426-3093",
    "address": "921 Just Court, Vernon, Colorado, 2135",
    "about": "Quis tempor ut esse non qui. Cillum veniam officia nulla commodo est nulla elit dolore eiusmod fugiat incididunt eiusmod. Et voluptate commodo magna quis. Id cupidatat aute proident voluptate cupidatat deserunt irure cillum cupidatat id magna.",
    "registered": "Monday, January 20, 2014 8:41 PM",
    "latitude": "-79.018374",
    "longitude": "172.748598",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Clark! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15da10265839168cc32b",
    "index": 34,
    "guid": "6236ad18-bc53-40de-99d6-8ccda55d7b35",
    "isActive": false,
    "balance": "$1,163.13",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": {
      "first": "Wade",
      "last": "Berg"
    },
    "company": "PROWASTE",
    "email": "wade.berg@prowaste.org",
    "phone": "+1 (803) 434-3032",
    "address": "455 Bartlett Street, Mooresburg, North Dakota, 3471",
    "about": "Nostrud velit eiusmod magna nisi mollit proident aute duis deserunt ipsum incididunt proident laborum anim. Minim id do adipisicing et ullamco adipisicing. Anim consectetur reprehenderit commodo ut sunt. Adipisicing duis aliqua laboris exercitation.",
    "registered": "Thursday, September 4, 2014 9:06 PM",
    "latitude": "-67.408652",
    "longitude": "-148.423756",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Wade! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15dad769083f7dd98d77",
    "index": 35,
    "guid": "e49c6807-9538-4370-9310-1ad734953b9c",
    "isActive": true,
    "balance": "$3,894.38",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": {
      "first": "Haley",
      "last": "Cochran"
    },
    "company": "FURNAFIX",
    "email": "haley.cochran@furnafix.tv",
    "phone": "+1 (953) 472-3571",
    "address": "305 Gerald Court, Gadsden, Idaho, 7907",
    "about": "Qui labore do id cillum exercitation aliqua laborum consectetur cillum irure. Proident sunt incididunt velit amet. Magna irure veniam laborum aute nostrud aliqua consectetur aliquip fugiat sit excepteur. Deserunt dolore incididunt velit culpa enim quis quis nisi reprehenderit esse ea cupidatat veniam. In pariatur consequat esse adipisicing adipisicing nulla. Irure qui cillum cupidatat fugiat esse sint laboris excepteur laborum.",
    "registered": "Monday, September 15, 2014 11:28 AM",
    "latitude": "11.585851",
    "longitude": "-26.262927",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Haley! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15dab6bb0329e571b834",
    "index": 36,
    "guid": "108832ca-9605-48a7-aea1-b62e2607facd",
    "isActive": false,
    "balance": "$2,371.11",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Suzette",
      "last": "Zamora"
    },
    "company": "LUMBREX",
    "email": "suzette.zamora@lumbrex.com",
    "phone": "+1 (990) 511-3500",
    "address": "615 Miller Place, Forbestown, Oregon, 1114",
    "about": "Enim labore officia nisi Lorem nostrud culpa reprehenderit consectetur ipsum consequat. Eiusmod do id voluptate aliquip Lorem aliqua aliquip eiusmod sunt ex tempor pariatur. Tempor aliquip nulla aliqua ad ad nulla officia. Pariatur excepteur est sit voluptate cupidatat amet adipisicing aliqua aute cupidatat laboris. Do sint qui voluptate culpa eu pariatur cupidatat in esse incididunt. Sunt veniam est aliqua est aliquip qui eiusmod voluptate laborum. Eiusmod qui est laboris ad irure est amet ipsum deserunt.",
    "registered": "Friday, July 18, 2014 9:33 PM",
    "latitude": "71.161996",
    "longitude": "63.630881",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Suzette! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15dae35b0426289f7913",
    "index": 37,
    "guid": "82501258-a8fc-4f4a-a0c9-36808be8b57a",
    "isActive": true,
    "balance": "$2,695.20",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": {
      "first": "Cantrell",
      "last": "Kirby"
    },
    "company": "IMPERIUM",
    "email": "cantrell.kirby@imperium.biz",
    "phone": "+1 (951) 459-3356",
    "address": "773 Everett Avenue, Avoca, Florida, 1575",
    "about": "Magna do aute consequat nulla. Aliquip sint consequat dolor aliqua dolore eiusmod ullamco tempor et tempor id sunt veniam. Sunt irure veniam aliqua nisi officia reprehenderit anim. Magna cillum sint nisi minim dolore occaecat dolor non laborum eu est exercitation cillum esse. Sint qui sit ad sit exercitation cupidatat. Anim Lorem non aliqua Lorem excepteur ad enim dolor non. Qui nisi eiusmod irure proident elit est tempor quis duis sunt.",
    "registered": "Thursday, June 11, 2015 12:00 AM",
    "latitude": "-6.748075",
    "longitude": "-22.173288",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Cantrell! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15da2515e992da79300b",
    "index": 38,
    "guid": "9e0d0a83-64ce-4e13-813a-a88a51c1e340",
    "isActive": false,
    "balance": "$1,810.48",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": {
      "first": "Eaton",
      "last": "Mcintyre"
    },
    "company": "MUSIX",
    "email": "eaton.mcintyre@musix.io",
    "phone": "+1 (817) 517-2179",
    "address": "289 Croton Loop, Bedias, New Hampshire, 7589",
    "about": "Ad sit eu aliqua veniam amet nisi ex consequat laborum enim laboris. Qui voluptate irure magna minim non tempor laborum labore elit sunt do est. Proident voluptate reprehenderit ipsum et ex consequat ea id ullamco velit pariatur quis amet Lorem. Culpa do est duis magna sint consequat amet. Exercitation commodo deserunt ipsum qui do cillum deserunt eu in tempor do pariatur nisi. Ut cupidatat nisi ad incididunt et consequat minim tempor sint.",
    "registered": "Tuesday, July 7, 2015 12:24 AM",
    "latitude": "-8.191562",
    "longitude": "179.19358",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Eaton! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15da33f449d8189ba88a",
    "index": 39,
    "guid": "9b6347c2-8499-4cef-a6de-26d201b82b7b",
    "isActive": false,
    "balance": "$2,133.41",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": {
      "first": "Paula",
      "last": "Oneill"
    },
    "company": "EXOSTREAM",
    "email": "paula.oneill@exostream.ca",
    "phone": "+1 (989) 411-3643",
    "address": "165 Benson Avenue, Glenville, Georgia, 3382",
    "about": "Amet exercitation commodo nulla tempor et ex. Exercitation dolor sunt esse voluptate veniam in ea velit excepteur tempor id. Reprehenderit nostrud consectetur in ad.",
    "registered": "Friday, November 14, 2014 7:14 PM",
    "latitude": "-83.21273",
    "longitude": "96.076216",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Paula! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15da86cf563520dfb6e6",
    "index": 40,
    "guid": "0670874b-3a18-4291-8df1-51901570e43e",
    "isActive": true,
    "balance": "$3,200.42",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": {
      "first": "Hinton",
      "last": "Small"
    },
    "company": "COASH",
    "email": "hinton.small@coash.co.uk",
    "phone": "+1 (941) 585-3176",
    "address": "837 Celeste Court, Ladera, Washington, 9524",
    "about": "Anim in cillum officia consequat ipsum sint anim officia sit nisi. Nisi in minim velit non do dolor reprehenderit velit exercitation. Aute consequat irure ipsum incididunt. Non sit ad excepteur exercitation laborum eiusmod eu consequat anim quis irure aliqua consequat.",
    "registered": "Tuesday, July 22, 2014 10:32 PM",
    "latitude": "16.778889",
    "longitude": "-68.368698",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Hinton! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15da9f49fc731c906362",
    "index": 41,
    "guid": "f98ee281-6b27-42cc-9748-26e8ce1043f9",
    "isActive": true,
    "balance": "$1,722.29",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": {
      "first": "Marisa",
      "last": "Roach"
    },
    "company": "DATAGEN",
    "email": "marisa.roach@datagen.us",
    "phone": "+1 (928) 562-2783",
    "address": "199 Turner Place, Stonybrook, New Jersey, 845",
    "about": "Dolore aliqua deserunt eiusmod irure ad ad adipisicing irure culpa non eiusmod deserunt aliqua. Minim culpa sint commodo sint. Non proident excepteur proident enim magna commodo quis sint proident excepteur Lorem sint. Incididunt tempor ipsum ut est sit tempor cupidatat ad sit aute. Aliquip culpa proident qui culpa anim exercitation officia. Eu nostrud sint est consequat in irure irure cillum.",
    "registered": "Wednesday, May 28, 2014 8:50 PM",
    "latitude": "55.081703",
    "longitude": "29.762572",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Marisa! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15da14e80756480d6d73",
    "index": 42,
    "guid": "3847e637-698e-471b-bd79-c0b209b1cd15",
    "isActive": false,
    "balance": "$2,171.59",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": {
      "first": "Bradford",
      "last": "Valentine"
    },
    "company": "ISOSWITCH",
    "email": "bradford.valentine@isoswitch.net",
    "phone": "+1 (813) 469-3615",
    "address": "524 Doone Court, Brandywine, Hawaii, 8165",
    "about": "Id officia nulla duis ea. Occaecat et in proident est officia veniam aliquip ut eu esse est aliqua exercitation. Labore eiusmod id consequat laboris elit excepteur occaecat consequat officia Lorem sint. Occaecat ut qui occaecat qui cupidatat officia in ad deserunt. Officia aliqua ullamco non anim cupidatat. Aute culpa esse dolore consectetur laboris esse fugiat voluptate voluptate ut eu nisi.",
    "registered": "Saturday, April 18, 2015 6:45 PM",
    "latitude": "70.172899",
    "longitude": "106.166101",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Bradford! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15dace90d65b6cf88f9c",
    "index": 43,
    "guid": "bf001c3d-21c8-44b2-8eeb-ddaa1ec9830f",
    "isActive": false,
    "balance": "$3,691.21",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": {
      "first": "Carter",
      "last": "Miranda"
    },
    "company": "ISOLOGIA",
    "email": "carter.miranda@isologia.me",
    "phone": "+1 (815) 489-3949",
    "address": "474 Harkness Avenue, Grahamtown, Virgin Islands, 8074",
    "about": "Deserunt laboris sit proident fugiat nostrud est enim consectetur est qui. Dolor reprehenderit cillum consectetur sunt veniam proident reprehenderit non aliquip consequat excepteur quis veniam enim. Cupidatat deserunt cupidatat incididunt cillum irure officia proident pariatur. Enim in cillum veniam eu nulla. Duis et in adipisicing consectetur amet magna duis fugiat cupidatat eu aute velit fugiat.",
    "registered": "Wednesday, October 8, 2014 12:33 AM",
    "latitude": "-45.140064",
    "longitude": "85.159789",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Carter! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15da6543c4d8143cc3d7",
    "index": 44,
    "guid": "0e7024cd-bbcd-44da-8788-cd74803fa84c",
    "isActive": true,
    "balance": "$1,580.49",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": {
      "first": "Janelle",
      "last": "Zimmerman"
    },
    "company": "ARTWORLDS",
    "email": "janelle.zimmerman@artworlds.name",
    "phone": "+1 (867) 598-3266",
    "address": "281 Lott Avenue, Allamuchy, Maryland, 2673",
    "about": "Consequat dolor sint pariatur ad cupidatat duis. Magna mollit cupidatat officia consectetur. Incididunt anim reprehenderit est duis duis consequat elit ex. Ea aliqua non id velit exercitation magna minim dolor sit non culpa dolore. Ex consectetur reprehenderit sunt occaecat ipsum nisi exercitation ex. Aliquip excepteur sint minim deserunt ullamco tempor anim Lorem ut aliqua excepteur cillum.",
    "registered": "Friday, January 30, 2015 10:19 AM",
    "latitude": "31.767129",
    "longitude": "-70.629417",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Janelle! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55fc15dacceca9de9608cf94",
    "index": 45,
    "guid": "e727c29e-4364-4546-809c-ddf43e2d00f4",
    "isActive": true,
    "balance": "$1,445.13",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": {
      "first": "Buchanan",
      "last": "Fischer"
    },
    "company": "VIDTO",
    "email": "buchanan.fischer@vidto.info",
    "phone": "+1 (814) 520-2703",
    "address": "954 Grafton Street, Eastmont, Ohio, 4493",
    "about": "Fugiat duis proident pariatur ipsum anim occaecat dolor consequat eu do nostrud. Officia culpa sunt magna adipisicing nulla consectetur Lorem aute amet enim. Pariatur id dolor esse nulla ullamco excepteur ad voluptate velit Lorem dolore magna. Mollit officia sint pariatur aliquip eiusmod aute reprehenderit exercitation consequat eu. Consectetur elit ut occaecat tempor ullamco incididunt in non est do fugiat. Sint quis eiusmod laboris fugiat mollit reprehenderit consequat laborum minim cillum excepteur mollit minim.",
    "registered": "Tuesday, May 19, 2015 5:21 PM",
    "latitude": "-53.969468",
    "longitude": "-104.954899",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Buchanan! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15daef3492fc817e5c35",
    "index": 46,
    "guid": "cd735c7e-2876-4673-9379-cb2aee71fbb2",
    "isActive": false,
    "balance": "$1,780.67",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": {
      "first": "Katrina",
      "last": "Gentry"
    },
    "company": "ZILLA",
    "email": "katrina.gentry@zilla.org",
    "phone": "+1 (831) 565-3972",
    "address": "654 Montrose Avenue, Blende, Missouri, 5790",
    "about": "Aliqua nulla nulla est esse aute exercitation aliqua laborum minim mollit. Mollit eu in adipisicing laboris deserunt. Ullamco elit dolor ullamco dolor nostrud dolore nisi duis fugiat proident. Commodo anim Lorem do veniam reprehenderit veniam elit.",
    "registered": "Saturday, January 31, 2015 1:34 PM",
    "latitude": "78.556105",
    "longitude": "108.207908",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Katrina! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15da8001ec36fdf19d8a",
    "index": 47,
    "guid": "abe480aa-3aaf-4b38-9221-94bad92fafcb",
    "isActive": true,
    "balance": "$1,504.04",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Jana",
      "last": "Weeks"
    },
    "company": "HYDROCOM",
    "email": "jana.weeks@hydrocom.tv",
    "phone": "+1 (838) 549-2944",
    "address": "313 Livingston Street, Courtland, Wyoming, 5043",
    "about": "Consectetur velit commodo ex enim ut duis sint aliquip mollit. Ullamco officia exercitation ullamco cupidatat eiusmod. Sint quis eiusmod excepteur est officia officia in anim labore do labore qui occaecat ullamco. Tempor mollit tempor nostrud in sunt.",
    "registered": "Wednesday, December 10, 2014 3:13 PM",
    "latitude": "38.238848",
    "longitude": "-118.055062",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Jana! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55fc15dabc7a9f982609c06e",
    "index": 48,
    "guid": "bcfb77ca-820e-4396-af86-1639f4ed745c",
    "isActive": false,
    "balance": "$2,964.19",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": {
      "first": "Leann",
      "last": "Allison"
    },
    "company": "YURTURE",
    "email": "leann.allison@yurture.com",
    "phone": "+1 (964) 598-2498",
    "address": "170 Adelphi Street, Noblestown, Rhode Island, 4228",
    "about": "Quis laboris nisi ea est cillum minim commodo labore amet laboris in non commodo. Minim aliqua qui consectetur anim pariatur dolore ea consequat labore nulla consectetur. Anim adipisicing cupidatat amet amet. Velit ad culpa elit adipisicing. Eu voluptate esse laboris occaecat excepteur culpa. Veniam in labore amet dolor in reprehenderit sunt nulla eiusmod labore.",
    "registered": "Thursday, April 2, 2015 9:22 AM",
    "latitude": "-48.655008",
    "longitude": "151.438167",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Leann! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55fc15daea30825f5513a46f",
    "index": 49,
    "guid": "54c87651-ff84-4282-bf6f-9392754031af",
    "isActive": true,
    "balance": "$3,133.98",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": {
      "first": "Solis",
      "last": "Neal"
    },
    "company": "MAROPTIC",
    "email": "solis.neal@maroptic.biz",
    "phone": "+1 (873) 482-3801",
    "address": "511 Leonard Street, Camino, Vermont, 6423",
    "about": "Id irure eiusmod mollit amet excepteur aliqua cupidatat laborum laboris dolore id esse ad. Do nisi amet voluptate aute sint labore ullamco. Incididunt ea incididunt velit deserunt magna cupidatat sit nostrud. Eu non nulla amet consectetur anim velit aliqua officia elit Lorem duis officia.",
    "registered": "Saturday, April 4, 2015 3:39 PM",
    "latitude": "80.373533",
    "longitude": "168.38439",
    "tags": [
      "eiusmod",
      "cillum",
      "aliqua",
      "laboris",
      "culpa",
      "voluptate",
      "mollit",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vera Vargas"
      },
      {
        "id": 1,
        "name": "Chris Sanchez"
      },
      {
        "id": 2,
        "name": "Kathie Morin"
      }
    ],
    "greeting": "Hello, Solis! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  }
];

  $scope.labels = ["Vasya", "Igor", "Petya", "Sasha", "Epifan"];
  $scope.data = [300, 500, 100, 40, 120];
  $scope.firstChartType = 'PolarArea';
  
  $scope.secondLabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.secondSeries = ['Vasya', 'Petya'];
  $scope.secondData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.secondChartType = 'Line';
    
  $interval(function () {
    $scope.getLiveChartData();
  }, 10000);

  $scope.getLiveChartData = function getLiveChartData () {
      $scope.data.splice(0,1);    
      $scope.data.push($scope.getRandomValue(0, 500));  
  }
  
    $interval(function () {
      $scope.getSecondLiveChartData();
    }, 10000);
  
    $scope.getSecondLiveChartData = function () {
        $scope.secondData[0].splice(0,1);    
        $scope.secondData[0].push($scope.getRandomValue(0, 500));
        $scope.secondData[1].splice(0,1);    
        $scope.secondData[1].push($scope.getRandomValue(0, 500));  
    }
  
  $scope.getRandomValue = function(min, max) {
  return Math.random() * (max - min) + min;
}

  $scope.options = {
    animationEasing: "easeOutCubic",
    pointDot: false,
    scaleShowGridLines : false
  };
  

    $scope.removeSelectedElements = function() {
      for (var i = 0; i < $scope.mySelectedItems.length; i++) {
        var item = $scope.mySelectedItems[i];        
        _.remove($scope.myItems, {
            guid: item.guid
        });
      }      
    };
  }; 
  
module.exports = DashboardController;
    

angular
    .module('AngularApp')
        .filter("fullName", function () {
        return function (fieldValueUnused, item) {
            return item.name.first + " " + item.name.last;
        };
    })