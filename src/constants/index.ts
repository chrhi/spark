const algeriaStates = [
  {
    name: "Adrar",
    baladia: ["Adrar", "Charouine", "Reggane", "Timimoun"],
  },
  {
    name: "Chlef",
    baladia: ["Chlef", "Ténès", "El Karimia", "Abou El Hassen"],
  },
  {
    name: "Laghouat",
    baladia: ["Laghouat", "Ksar El Hirane", "Aflou", "Brida"],
  },
  {
    name: "Ouargla",
    baladia: ["Ouargla", "Hassi Messaoud", "El Hadjira", "Touggourt"],
  },
  {
    name: "Batna",
    baladia: ["Batna", "Timgad", "Arris", "Merouana"],
  },
  {
    name: "Béjaïa",
    baladia: ["Béjaïa", "Tichy", "Akbou", "El Kseur"],
  },
  {
    name: "Biskra",
    baladia: ["Biskra", "Sidi Okba", "Tolga", "El Kantara"],
  },
  {
    name: "Blida",
    baladia: ["Blida", "Boufarik", "Oued El Alleug", "Beni Mered"],
  },
  {
    name: "Bordj Bou Arréridj",
    baladia: ["Bordj Bou Arréridj", "El Anasser", "Ras El Oued", "Medjana"],
  },
  {
    name: "Bouira",
    baladia: ["Bouira", "Aïn Bessem", "Lakhdaria", "M'Chedallah"],
  },
  {
    name: "Tamanrasset",
    baladia: ["Tamanrasset", "In Ghar", "Idlès", "Abalessa"],
  },
  {
    name: "Tébessa",
    baladia: ["Tébessa", "El Aouinet", "Morsott", "Bir El Ater"],
  },
  {
    name: "Tlemcen",
    baladia: ["Tlemcen", "Maghnia", "Aïn Fezza", "Ghazaouet"],
  },
  {
    name: "Tiaret",
    baladia: ["Tiaret", "Aïn Kermes", "Ksar Chellala", "Rahouia"],
  },
  {
    name: "Tizi Ouzou",
    baladia: ["Tizi Ouzou", "Azazga", "Boghni", "Azeffoun"],
  },
  {
    name: "Algiers",
    baladia: ["Algiers", "Hussein Dey", "Kouba", "Bir Mourad Raïs"],
  },
  {
    name: "Djelfa",
    baladia: ["Djelfa", "El Idrissia", "Aïn Oussera", "M'Liliha"],
  },
  {
    name: "Jijel",
    baladia: ["Jijel", "El Milia", "Settara", "Taher"],
  },
  {
    name: "Sétif",
    baladia: ["Sétif", "El Eulma", "Aïn Abessa", "Bir El Arch"],
  },
  {
    name: "Saïda",
    baladia: ["Saïda", "Aïn El Hadjar", "Moulay Larbi", "Youb"],
  },
  {
    name: "Skikda",
    baladia: ["Skikda", "Azzaba", "Ramdane Djamel", "Collo"],
  },
  {
    name: "Sidi Bel Abbès",
    baladia: ["Sidi Bel Abbès", "Tessala", "Mostefa Ben Brahim", "Mérine"],
  },
  {
    name: "Annaba",
    baladia: ["Annaba", "El Bouni", "Seraïdi", "El Hadjar"],
  },
  {
    name: "Guelma",
    baladia: ["Guelma", "Bouati Mahmoud", "Héliopolis", "Nechmaya"],
  },
  {
    name: "Constantine",
    baladia: ["Constantine", "Hamma Bouziane", "El Khroub", "Aïn Smara"],
  },
  {
    name: "Médéa",
    baladia: ["Médéa", "El Omaria", "Ouled Maaref", "Tamesguida"],
  },
  {
    name: "Mostaganem",
    baladia: ["Mostaganem", "Mansourah", "Aïn Nouïssy", "Sour"],
  },
  {
    name: "M'Sila",
    baladia: ["M'Sila", "Bouti Sayah", "Maadid", "Ouled Derradj"],
  },
  {
    name: "Mascara",
    baladia: ["Mascara", "Bou Hanifia", "El Ghomri", "Ghriss"],
  },
  {
    name: "Ouargla",
    baladia: ["Ouargla", "Hassi Messaoud", "El Hadjira", "Touggourt"],
  },
  {
    name: "Oran",
    baladia: ["Oran", "Es Sénia", "Bir El Djir", "Aïn El Turk"],
  },
  {
    name: "El Bayadh",
    baladia: ["El Bayadh", "Brezina", "Rogassa", "Chellala"],
  },
  {
    name: "Illizi",
    baladia: ["Illizi", "Djanet", "In Aménas", "In Guezzam"],
  },
  {
    name: "Bordj Bou Arréridj",
    baladia: ["Bordj Bou Arréridj", "El Anasser", "Ras El Oued", "Medjana"],
  },
  {
    name: "Boumerdès",
    baladia: ["Boumerdès", "Boudouaou", "Amizour", "Khemis El Khechna"],
  },
  {
    name: "El Tarf",
    baladia: ["El Tarf", "Bouhadjar", "Ben M'Hidi", "Boussedra"],
  },
  {
    name: "Tindouf",
    baladia: ["Tindouf", "Oum El Assel", "Béchar", "Aougrout"],
  },
  {
    name: "Tissemsilt",
    baladia: ["Tissemsilt", "Bordj Bounaama", "Theniet El Had", "Boucaid"],
  },
  {
    name: "El Oued",
    baladia: ["El Oued", "Magrane", "Taghzout", "Robbah"],
  },
  {
    name: "Khenchela",
    baladia: ["Khenchela", "Babar", "Kaïs", "Tamza"],
  },
  {
    name: "Souk Ahras",
    baladia: ["Souk Ahras", "Merahna", "Zaarouria", "Taoura"],
  },
  {
    name: "Tipaza",
    baladia: ["Tipaza", "Hadjout", "Sidi Amar", "Gouraya"],
  },
  {
    name: "Mila",
    baladia: ["Mila", "Tassadane Haddada", "Ferdjioua", "Tassala Lematah"],
  },
  {
    name: "Aïn Defla",
    baladia: ["Aïn Defla", "Médéa", "Miliana", "El Attaf"],
  },
  {
    name: "Naama",
    baladia: ["Naama", "Moghrar", "Assela", "Aïn Sefra"],
  },
  {
    name: "Aïn Témouchent",
    baladia: ["Aïn Témouchent", "El Malah", "Hammam Bou Hadjar", "Oued Sabah"],
  },
  {
    name: "Ghardaïa",
    baladia: ["Ghardaïa", "M'zab", "El Meniaa", "Berriane"],
  },
  {
    name: "Relizane",
    baladia: ["Relizane", "Belaassel Bouzegza", "Bendaoud", "Djidiouia"],
  },
];

const wilayats = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Ouargla",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Blida",
  "Bordj Bou Arréridj",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arréridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naama",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
];
