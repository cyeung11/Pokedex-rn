
const PokeData = [
  { id: '1', name: 'Bulbasaur', image: require('../image/pokedex/1.png') },
  { id: '2', name: 'Ivysaur', image: require('../image/pokedex/2.png') },
  { id: '3', name: 'Venusaur', image: require('../image/pokedex/3.png') },
  { id: '4', name: 'Charmander', image: require('../image/pokedex/4.png') },
  { id: '5', name: 'Charmeleon', image: require('../image/pokedex/5.png') },
  { id: '6', name: 'Charizard', image: require('../image/pokedex/6.png') },
  { id: '7', name: 'Squirtle', image: require('../image/pokedex/7.png') },
  { id: '8', name: 'Wartortle', image: require('../image/pokedex/8.png') },
  { id: '9', name: 'Blastoise', image: require('../image/pokedex/9.png') },
  { id: '10', name: 'Caterpie', image: require('../image/pokedex/10.png') },
  { id: '11', name: 'Metapod', image: require('../image/pokedex/11.png') },
  { id: '12', name: 'Butterfree', image: require('../image/pokedex/12.png') },
  { id: '13', name: 'Weedle', image: require('../image/pokedex/13.png') },
  { id: '14', name: 'Kakuna', image: require('../image/pokedex/14.png') },
  { id: '15', name: 'Beedrill', image: require('../image/pokedex/15.png') },
  { id: '16', name: 'Pidgey', image: require('../image/pokedex/16.png') },
  { id: '17', name: 'Pidgeotto', image: require('../image/pokedex/17.png') },
  { id: '18', name: 'Pidgeot', image: require('../image/pokedex/18.png') },
  { id: '19', name: 'Rattata', image: require('../image/pokedex/19.png') },
  { id: '20', name: 'Raticate', image: require('../image/pokedex/20.png') },
  { id: '21', name: 'Spearow', image: require('../image/pokedex/21.png') },
  { id: '22', name: 'Fearow', image: require('../image/pokedex/22.png') },
  { id: '23', name: 'Ekans', image: require('../image/pokedex/23.png') },
  { id: '24', name: 'Arbok', image: require('../image/pokedex/24.png') },
  { id: '25', name: 'Pikachu', image: require('../image/pokedex/25.png') },
  { id: '26', name: 'Raichu', image: require('../image/pokedex/26.png') },
  { id: '27', name: 'Sandshrew', image: require('../image/pokedex/27.png') },
  { id: '28', name: 'Sandslash', image: require('../image/pokedex/28.png') },
  { id: '29', name: 'Nidoran-f', image: require('../image/pokedex/29.png') },
  { id: '30', name: 'Nidorina', image: require('../image/pokedex/30.png') },
  { id: '31', name: 'Nidoqueen', image: require('../image/pokedex/31.png') },
  { id: '32', name: 'Nidoran-m', image: require('../image/pokedex/32.png') },
  { id: '33', name: 'Nidorino', image: require('../image/pokedex/33.png') },
  { id: '34', name: 'NidoKing', image: require('../image/pokedex/34.png') },
  { id: '35', name: 'Clefairy', image: require('../image/pokedex/35.png') },
  { id: '36', name: 'Clefable', image: require('../image/pokedex/36.png') },
  { id: '37', name: 'Vulpix', image: require('../image/pokedex/37.png') },
  { id: '38', name: 'Ninetales', image: require('../image/pokedex/38.png') },
  { id: '39', name: 'JigglyPuff', image: require('../image/pokedex/39.png') },
  { id: '40', name: 'Wigglytuff', image: require('../image/pokedex/40.png') },
  { id: '41', name: 'Zubat', image: require('../image/pokedex/41.png') },
  { id: '42', name: 'Golbat', image: require('../image/pokedex/42.png') },
  { id: '43', name: 'Oddish', image: require('../image/pokedex/43.png') },
  { id: '44', name: 'Gloom', image: require('../image/pokedex/44.png') },
  { id: '45', name: 'Vileplume', image: require('../image/pokedex/45.png') },
  { id: '46', name: 'Paras', image: require('../image/pokedex/46.png') },
  { id: '47', name: 'parasect', image: require('../image/pokedex/47.png') },
  { id: '48', name: 'Venonat', image: require('../image/pokedex/48.png') },
  { id: '49', name: 'Venomoth', image: require('../image/pokedex/49.png') },
  { id: '50', name: 'Diglett', image: require('../image/pokedex/50.png') },
  { id: '51', name: 'Dugtrio', image: require('../image/pokedex/51.png') },
  { id: '52', name: 'Meowth', image: require('../image/pokedex/52.png') },
  { id: '53', name: 'Persian', image: require('../image/pokedex/53.png') },
  { id: '54', name: 'Psyduck', image: require('../image/pokedex/54.png') },
  { id: '55', name: 'Golduck', image: require('../image/pokedex/55.png') },
  { id: '56', name: 'Mankey', image: require('../image/pokedex/56.png') },
  { id: '57', name: 'Primeape', image: require('../image/pokedex/57.png') },
  { id: '58', name: 'Growlithe', image: require('../image/pokedex/58.png') },
  { id: '59', name: 'Arcanine', image: require('../image/pokedex/59.png') },
  { id: '60', name: 'Poliwag', image: require('../image/pokedex/60.png') },
  { id: '61', name: 'Poliwhirl', image: require('../image/pokedex/61.png') },
  { id: '62', name: 'Poliwrath', image: require('../image/pokedex/62.png') },
  { id: '63', name: 'Abra', image: require('../image/pokedex/63.png') },
  { id: '64', name: 'Kadabra', image: require('../image/pokedex/64.png') },
  { id: '65', name: 'Alakazam', image: require('../image/pokedex/65.png') },
  { id: '66', name: 'Machop', image: require('../image/pokedex/66.png') },
  { id: '67', name: 'Machoke', image: require('../image/pokedex/67.png') },
  { id: '68', name: 'Machamp', image: require('../image/pokedex/68.png') },
  { id: '69', name: 'Bellsprout', image: require('../image/pokedex/69.png') },
  { id: '70', name: 'Weepinbell', image: require('../image/pokedex/70.png') },
  { id: '71', name: 'Victreebel', image: require('../image/pokedex/71.png') },
  { id: '72', name: 'Tentacool', image: require('../image/pokedex/72.png') },
  { id: '73', name: 'Tentacruel', image: require('../image/pokedex/73.png') },
  { id: '74', name: 'Geodude', image: require('../image/pokedex/74.png') },
  { id: '75', name: 'Graveler', image: require('../image/pokedex/75.png') },
  { id: '76', name: 'Golem', image: require('../image/pokedex/76.png') },
  { id: '77', name: 'Ponyta', image: require('../image/pokedex/77.png') },
  { id: '78', name: 'Rapidash', image: require('../image/pokedex/78.png') },
  { id: '79', name: 'Slowpoke', image: require('../image/pokedex/79.png') },
  { id: '80', name: 'Slowbro', image: require('../image/pokedex/80.png') },
  { id: '81', name: 'Magnemite', image: require('../image/pokedex/81.png') },
  { id: '82', name: 'Magneton', image: require('../image/pokedex/82.png') },
  { id: '83', name: 'Farfetchd', image: require('../image/pokedex/83.png') },
  { id: '84', name: 'Doduo', image: require('../image/pokedex/84.png') },
  { id: '85', name: 'Dodrio', image: require('../image/pokedex/85.png') },
  { id: '86', name: 'Seel', image: require('../image/pokedex/86.png') },
  { id: '87', name: 'Dewgong', image: require('../image/pokedex/87.png') },
  { id: '88', name: 'Grimer', image: require('../image/pokedex/88.png') },
  { id: '89', name: 'Muk', image: require('../image/pokedex/89.png') },
  { id: '90', name: 'Shellder', image: require('../image/pokedex/90.png') },
  { id: '91', name: 'Cloyster', image: require('../image/pokedex/91.png') },
  { id: '92', name: 'Gastly', image: require('../image/pokedex/92.png') },
  { id: '93', name: 'Haunter', image: require('../image/pokedex/93.png') },
  { id: '94', name: 'Gengar', image: require('../image/pokedex/94.png') },
  { id: '95', name: 'Onix', image: require('../image/pokedex/95.png') },
  { id: '96', name: 'Drowzee', image: require('../image/pokedex/96.png') },
  { id: '97', name: 'Hypno', image: require('../image/pokedex/97.png') },
  { id: '98', name: 'Krabby', image: require('../image/pokedex/98.png') },
  { id: '99', name: 'Kingler', image: require('../image/pokedex/99.png') },
  { id: '100', name: 'Voltorb', image: require('../image/pokedex/100.png') },
  { id: '101', name: 'Electrode', image: require('../image/pokedex/101.png') },
  { id: '102', name: 'Exeggcute', image: require('../image/pokedex/102.png') },
  { id: '103', name: 'Exeggutor', image: require('../image/pokedex/103.png') },
  { id: '104', name: 'Cubone', image: require('../image/pokedex/104.png') },
  { id: '105', name: 'Marowak', image: require('../image/pokedex/105.png') },
  { id: '106', name: 'Hitmonlee', image: require('../image/pokedex/106.png') },
  { id: '107', name: 'Hitmonchan', image: require('../image/pokedex/107.png') },
  { id: '108', name: 'Lickitung', image: require('../image/pokedex/108.png') },
  { id: '109', name: 'Koffing', image: require('../image/pokedex/109.png') },
  { id: '110', name: 'Weezing', image: require('../image/pokedex/110.png') },
  { id: '111', name: 'Rhyhorn', image: require('../image/pokedex/111.png') },
  { id: '112', name: 'Rhydon', image: require('../image/pokedex/112.png') },
  { id: '113', name: 'Chansey', image: require('../image/pokedex/113.png') },
  { id: '114', name: 'Tangela', image: require('../image/pokedex/114.png') },
  { id: '115', name: 'Kangaskhan', image: require('../image/pokedex/115.png') },
  { id: '116', name: 'Horsea', image: require('../image/pokedex/116.png') },
  { id: '117', name: 'Seadra', image: require('../image/pokedex/117.png') },
  { id: '118', name: 'Goldeen', image: require('../image/pokedex/118.png') },
  { id: '119', name: 'Seaking', image: require('../image/pokedex/119.png') },
  { id: '120', name: 'Staryu', image: require('../image/pokedex/120.png') },
  { id: '121', name: 'Starmie', image: require('../image/pokedex/121.png') },
  { id: '122', name: 'Mr Mime', image: require('../image/pokedex/122.png') },
  { id: '123', name: 'Scyther', image: require('../image/pokedex/123.png') },
  { id: '124', name: 'Jynx', image: require('../image/pokedex/124.png') },
  { id: '125', name: 'Electabuzz', image: require('../image/pokedex/125.png') },
  { id: '126', name: 'Magmar', image: require('../image/pokedex/126.png') },
  { id: '127', name: 'Pinsir', image: require('../image/pokedex/127.png') },
  { id: '128', name: 'Tauros', image: require('../image/pokedex/128.png') },
  { id: '129', name: 'Magikarp', image: require('../image/pokedex/129.png') },
  { id: '130', name: 'Gyarados', image: require('../image/pokedex/130.png') },
  { id: '131', name: 'Lapras', image: require('../image/pokedex/131.png') },
  { id: '132', name: 'Ditto', image: require('../image/pokedex/132.png') },
  { id: '133', name: 'Eevee', image: require('../image/pokedex/133.png') },
  { id: '134', name: 'Vaporeon', image: require('../image/pokedex/134.png') },
  { id: '135', name: 'Jolteon', image: require('../image/pokedex/135.png') },
  { id: '136', name: 'Flareon', image: require('../image/pokedex/136.png') },
  { id: '137', name: 'Porygon', image: require('../image/pokedex/137.png') },
  { id: '138', name: 'Omanyte', image: require('../image/pokedex/138.png') },
  { id: '139', name: 'Omastar', image: require('../image/pokedex/139.png') },
  { id: '140', name: 'Kabuto', image: require('../image/pokedex/140.png') },
  { id: '141', name: 'Kabutops', image: require('../image/pokedex/141.png') },
  { id: '142', name: 'Aerodactyl', image: require('../image/pokedex/142.png') },
  { id: '143', name: 'Snorlax', image: require('../image/pokedex/143.png') },
  { id: '144', name: 'Articuno', image: require('../image/pokedex/144.png') },
  { id: '145', name: 'Zapdos', image: require('../image/pokedex/145.png') },
  { id: '146', name: 'Moltres', image: require('../image/pokedex/146.png') },
  { id: '147', name: 'Dratini', image: require('../image/pokedex/147.png') },
  { id: '148', name: 'Dragonair', image: require('../image/pokedex/148.png') },
  { id: '149', name: 'Dragonite', image: require('../image/pokedex/149.png') },
  { id: '150', name: 'Mewtwo', image: require('../image/pokedex/150.png') },
  { id: '151', name: 'Mew', image: require('../image/pokedex/151.png') }
]

export default {PokeData};