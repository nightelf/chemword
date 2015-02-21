angular.module('chemglyph', ['ngRoute', 'chemglyph.search', 'chemglyph.relations'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'static/partials/search/search.html',
				controller: 'searchCntrl'
			}).when('/contact', {
				templateUrl: 'static/partials/feedback/feedback.html',
				controller: 'FeedbackController'
			})
			.otherwise({redirectTo:'/'});
			
		$locationProvider.html5Mode(true);
	}]);
angular.module('chemglyph.common', []);
angular.module('chemglyph.relations', []);
angular.module('chemglyph.relations')
	.controller('FeedbackController', ['$scope', function($scope) {
		
	}]);
angular.module('chemglyph.search', []);
angular.module('chemglyph.search')
	.controller('searchCntrl', ['$scope', 'matchFinder', function($scope, matchFinder) {
		$scope.results = [];
		$scope.$watch('search', function(newValue, oldValue) {
			
		   $scope.results = matchFinder.find(newValue);
		});
	}]);
angular.module('chemglyph.search')
	.value('elementInfo', {
		'h': {
			'name': 'Hydrogen',
			'symbol': 'H',
			'number': 1,
			'mass': 1.0081
		},
		'he': {
			'name': 'Helium',
			'symbol': 'He',
			'number': 2,
			'mass': 4.0026022
		},
		'li': {
			'name': 'Lithium',
			'symbol': 'Li',
			'number': 3,
			'mass': 6.941
		},
		'be': {
			'name': 'Beryllium',
			'symbol': 'Be',
			'number': 4,
			'mass': 9.01218315
		},
		'b': {
			'name': 'Boron',
			'symbol': 'B',
			'number': 5,
			'mass': 10.811
		},
		'c': {
			'name': 'Carbon',
			'symbol': 'C',
			'number': 6,
			'mass': 12.0111
		},
		'n': {
			'name': 'Nitrogen',
			'symbol': 'N',
			'number': 7,
			'mass': 14.0071
		},
		'o': {
			'name': 'Oxygen',
			'symbol': 'O',
			'number': 8,
			'mass': 15.9994
		},
		'f': {
			'name': 'Fluorine',
			'symbol': 'F',
			'number': 9,
			'mass': 18.9984031636
		},
		'ne': {
			'name': 'Neon',
			'symbol': 'Ne',
			'number': 10,
			'mass': 20.17976
		},
		'na': {
			'name': 'Sodium',
			'symbol': 'Na',
			'number': 11,
			'mass': 22.989769282
		},
		'mg': {
			'name': 'Magnesium',
			'symbol': 'Mg',
			'number': 12,
			'mass': 24.3051
		},
		'al': {
			'name': 'Aluminum',
			'symbol': 'Al',
			'number': 13,
			'mass': 26.98153857
		},
		'si': {
			'name': 'Silicon',
			'symbol': 'Si',
			'number': 14,
			'mass': 28.0851
		},
		'p': {
			'name': 'Phosphorus',
			'symbol': 'P',
			'number': 15,
			'mass': 30.9737619985
		},
		's': {
			'name': 'Sulfur',
			'symbol': 'S',
			'number': 16,
			'mass': 32.061
		},
		'cl': {
			'name': 'Chlorine',
			'symbol': 'Cl',
			'number': 17,
			'mass': 35.451
		},
		'ar': {
			'name': 'Argon',
			'symbol': 'Ar',
			'number': 18,
			'mass': 39.9481
		},
		'k': {
			'name': 'Potassium',
			'symbol': 'K',
			'number': 19,
			'mass': 39.09831
		},
		'ca': {
			'name': 'Calcium',
			'symbol': 'Ca',
			'number': 20,
			'mass': 40.0784
		},
		'sc': {
			'name': 'Scandium',
			'symbol': 'Sc',
			'number': 21,
			'mass': 44.9559085
		},
		'ti': {
			'name': 'Titanium',
			'symbol': 'Ti',
			'number': 22,
			'mass': 47.8671
		},
		'v': {
			'name': 'Titanium',
			'symbol': 'V',
			'number': 23,
			'mass': 50.94151
		},
		'cr': {
			'name': 'Chromium',
			'symbol': 'Cr',
			'number': 24,
			'mass': 51.99616
		},
		'mn': {
			'name': 'Manganese',
			'symbol': 'Mn',
			'number': 25,
			'mass': 54.9380443
		},
		'fe': {
			'name': 'Iron',
			'symbol': 'Fe',
			'number': 26,
			'mass': 55.8452
		},
		'co': {
			'name': 'Cobalt',
			'symbol': 'Co',
			'number': 27,
			'mass': 58.9331944
		},
		'ni': {
			'name': 'Nickel',
			'symbol': 'Ni',
			'number': 28,
			'mass': 58.69344
		},
		'cu': {
			'name': 'Copper',
			'symbol': 'Cu',
			'number': 29,
			'mass': 63.5463
		},
		'zn': {
			'name': 'Zinc',
			'symbol': 'Zn',
			'number': 30,
			'mass': 65.382
		},
		'ga': {
			'name': 'Gallium',
			'symbol': 'Ga',
			'number': 31,
			'mass': 69.7231
		},
		'ge': {
			'name': 'Germanium',
			'symbol': 'Ge',
			'number': 32,
			'mass': 72.6308
		},
		'as': {
			'name': 'Arsenic',
			'symbol': 'As',
			'number': 33,
			'mass': 74.9215956
		},
		'se': {
			'name': 'Selenium',
			'symbol': 'Se',
			'number': 34,
			'mass': 78.9718
		},
		'br': {
			'name': 'Bromine',
			'symbol': 'Br',
			'number': 35,
			'mass': 79.9041
		},
		'kr': {
			'name': 'Krypton',
			'symbol': 'Kr',
			'number': 36,
			'mass': 83.798
		},
		'rb': {
			'name': 'Rubidium',
			'symbol': 'Rb',
			'number': 37,
			'mass': 85.46783
		},
		'sr': {
			'name': 'Strontium',
			'symbol': 'Sr',
			'number': 38,
			'mass': 87.621
		},
		'y': {
			'name': 'Yttrium',
			'symbol': 'Y',
			'number': 39,
			'mass': 88.905842
		},
		'zr': {
			'name': 'Zirconium',
			'symbol': 'Zr',
			'number': 40,
			'mass': 91.2242
		},
		'nb': {
			'name': 'Niobium',
			'symbol': 'Nb',
			'number': 41,
			'mass': 92.906372
		},
		'mo': {
			'name': 'Molybdenum',
			'symbol': 'Mo',
			'number': 42,
			'mass': 95.951
		},
		'tc': {
			'name': 'Technetium',
			'symbol': 'Tc',
			'number': 43,
			'mass': 98
		},
		'ru': {
			'name': 'Ruthenium',
			'symbol': 'Ru',
			'number': 44,
			'mass': 101.072
		},
		'rh': {
			'name': 'Rhodium',
			'symbol': 'Rh',
			'number': 45,
			'mass': 102.905502
		},
		'pd': {
			'name': 'Palladium',
			'symbol': 'Pd',
			'number': 46,
			'mass': 106.421
		},
		'ag': {
			'name': 'Silver',
			'symbol': 'Ag',
			'number': 47,
			'mass': 107.86822
		},
		'cd': {
			'name': 'Cadmium',
			'symbol': 'Cd',
			'number': 48,
			'mass': 112.4144
		},
		'in': {
			'name': 'Indium',
			'symbol': 'In',
			'number': 49,
			'mass': 114.8181
		},
		'sn': {
			'name': 'Tin',
			'symbol': 'Sn',
			'number': 50,
			'mass': 118.7107
		},
		'sb': {
			'name': 'Antimony',
			'symbol': 'Sb',
			'number': 51,
			'mass': 121.7601
		},
		'te': {
			'name': 'Tellurium',
			'symbol': 'Te',
			'number': 52,
			'mass': 127.603
		},
		'i': {
			'name': 'Iodine',
			'symbol': 'I',
			'number': 53,
			'mass': 126.904473
		},
		'xe': {
			'name': 'Xenon',
			'symbol': 'Xe',
			'number': 54,
			'mass': 131.2936
		},
		'cs': {
			'name': 'Caesium',
			'symbol': 'Cs',
			'number': 55,
			'mass': 132.905451966
		},
		'ba': {
			'name': 'Barium',
			'symbol': 'Ba',
			'number': 56,
			'mass': 137.3277
		},
		'la': {
			'name': 'Lanthanum',
			'symbol': 'La',
			'number': 57,
			'mass': 138.90547
		},
		'ce': {
			'name': 'Cerium',
			'symbol': 'Ce',
			'number': 58,
			'mass': 140.116
		},
		'pr': {
			'name': 'Praseodymium',
			'symbol': 'Pr',
			'number': 59,
			'mass': 140.907662
		},
		'nd': {
			'name': 'Neodymium',
			'symbol': 'Nd',
			'number': 60,
			'mass': 144.242
		},
		'pm': {
			'name': 'Promethium',
			'symbol': 'Pm',
			'number': 61,
			'mass': 145
		},
		'sm': {
			'name': 'Samarium',
			'symbol': 'Sm',
			'number': 62,
			'mass': 150.362
		},
		'eu': {
			'name': 'Europium',
			'symbol': 'Eu',
			'number': 63,
			'mass': 151.964
		},
		'gd': {
			'name': 'Gadolinium',
			'symbol': 'Gd',
			'number': 64,
			'mass': 157.253
		},
		'tb': {
			'name': 'Terbium',
			'symbol': 'Tb',
			'number': 65,
			'mass': 158.92535
		},
		'dy': {
			'name': 'Dysprosium',
			'symbol': 'Dy',
			'number': 66,
			'mass': 162.5001
		},
		'ho': {
			'name': 'Holmium',
			'symbol': 'Ho',
			'number': 67,
			'mass': 164.930332
		},
		'er': {
			'name': 'Erbium',
			'symbol': 'Er',
			'number': 68,
			'mass': 167.259
		},
		'tm': {
			'name': 'Thulium',
			'symbol': 'Tm',
			'number': 69,
			'mass': 168.934222
		},
		'yb': {
			'name': 'Ytterbium',
			'symbol': 'Yb',
			'number': 70,
			'mass': 173.0545
		},
		'lu': {
			'name': 'Lutetium',
			'symbol': 'Lu',
			'number': 71,
			'mass': 174.96684
		},
		'hf': {
			'name': 'Hafnium',
			'symbol': 'Hf',
			'number': 72,
			'mass': 178.492
		},
		'ta': {
			'name': 'Tantalum',
			'symbol': 'Ta',
			'number': 73,
			'mass': 180.947882
		},
		'w': {
			'name': 'Tungsten',
			'symbol': 'W',
			'number': 74,
			'mass': 183.841
		},
		're': {
			'name': 'Rhenium',
			'symbol': 'Re',
			'number': 75,
			'mass': 186.2071
		},
		'os': {
			'name': 'Osmium',
			'symbol': 'Os',
			'number': 76,
			'mass': 190.233
		},
		'ir': {
			'name': 'Iridium',
			'symbol': 'Ir',
			'number': 77,
			'mass': 192.2173
		},
		'pt': {
			'name': 'Platinum',
			'symbol': 'Pt',
			'number': 78,
			'mass': 195.0849
		},
		'au': {
			'name': 'Gold',
			'symbol': 'Au',
			'number': 79,
			'mass': 196.9665694
		},
		'hg': {
			'name': 'Mercury',
			'symbol': 'Hg',
			'number': 80,
			'mass': 200.5923
		},
		'tl': {
			'name': 'Thallium',
			'symbol': 'Tl',
			'number': 81,
			'mass': 204.381
		},
		'pb': {
			'name': 'Lead',
			'symbol': 'Pb',
			'number': 82,
			'mass': 207.21
		},
		'bi': {
			'name': 'Bismuth',
			'symbol': 'Bi',
			'number': 83,
			'mass': 208.980401
		},
		'po': {
			'name': 'Polonium',
			'symbol': 'Po',
			'number': 84,
			'mass': 209
		},
		'at': {
			'name': 'Astatine',
			'symbol': 'At',
			'number': 85,
			'mass': 210
		},
		'rn': {
			'name': 'Radon',
			'symbol': 'Rn',
			'number': 86,
			'mass': 222
		},
		'fr': {
			'name': 'Francium',
			'symbol': 'Fr',
			'number': 87,
			'mass': 223
		},
		'ra': {
			'name': 'Radium',
			'symbol': 'Ra',
			'number': 88,
			'mass': 226
		},
		'ac': {
			'name': 'Actinium',
			'symbol': 'Ac',
			'number': 89,
			'mass': 227
		},
		'th': {
			'name': 'Thorium',
			'symbol': 'Th',
			'number': 90,
			'mass': 232.03774
		},
		'pa': {
			'name': 'Protactinium',
			'symbol': 'Pa',
			'number': 91,
			'mass': 231.03588
		},
		'u': {
			'name': 'Uranium',
			'symbol': 'U',
			'number': 92,
			'mass': 238.028913
		},
		'np': {
			'name': 'Neptunium',
			'symbol': 'Np',
			'number': 93,
			'mass': 237
		},
		'pu': {
			'name': 'Plutonium',
			'symbol': 'Pu',
			'number': 94,
			'mass': 244
		},
		'am': {
			'name': 'Americium',
			'symbol': 'Am',
			'number': 95,
			'mass': 243
		},
		'cm': {
			'name': 'Curium',
			'symbol': 'Cm',
			'number': 96,
			'mass': 247
		},
		'bk': {
			'name': 'Berkelium',
			'symbol': 'Bk',
			'number': 97,
			'mass': 247
		},
		'cf': {
			'name': 'Californium',
			'symbol': 'Cf',
			'number': 98,
			'mass': 251
		},
		'es': {
			'name': 'Einsteinium',
			'symbol': 'Es',
			'number': 99,
			'mass': 252
		},
		'fm': {
			'name': 'Fermium',
			'symbol': 'Fm',
			'number': 100,
			'mass': 257
		},
		'md': {
			'name': 'Mendelevium',
			'symbol': 'Md',
			'number': 101,
			'mass': 258
		},
		'no': {
			'name': 'Nobelium',
			'symbol': 'No',
			'number': 102,
			'mass': 259
		},
		'lr': {
			'name': 'Lawrencium',
			'symbol': 'Lr',
			'number': 103,
			'mass': 266
		},
		'rf': {
			'name': 'Rutherfordium',
			'symbol': 'Rf',
			'number': 104,
			'mass': 267
		},
		'db': {
			'name': 'Dubnium',
			'symbol': 'Db',
			'number': 105,
			'mass': 268
		},
		'sg': {
			'name': 'Seaborgium',
			'symbol': 'Sg',
			'number': 106,
			'mass': 269
		},
		'bh': {
			'name': 'Bohrium',
			'symbol': 'Bh',
			'number': 107,
			'mass': 270
		},
		'hs': {
			'name': 'Hassium',
			'symbol': 'Hs',
			'number': 108,
			'mass': 269
		},
		'mt': {
			'name': 'Meitnerium',
			'symbol': 'Mt',
			'number': 109,
			'mass': 278
		},
		'ds': {
			'name': 'Darmstadtium',
			'symbol': 'Ds',
			'number': 110,
			'mass': 281
		},
		'rg': {
			'name': 'Roentgenium',
			'symbol': 'Rg',
			'number': 111,
			'mass': 281
		},
		'cn': {
			'name': 'Copernicium',
			'symbol': 'Cn',
			'number': 112,
			'mass': 285
		},
		'uut': {
			'name': 'Ununtrium',
			'symbol': 'Uut',
			'number': 113,
			'mass': 286
		},
		'fl': {
			'name': 'Flerovium',
			'symbol': 'Fl',
			'number': 114,
			'mass': 289
		},
		'uup': {
			'name': 'Ununpentium',
			'symbol': 'Uup',
			'number': 115,
			'mass': 289
		},
		'lv': {
			'name': 'Livermorium',
			'symbol': 'Lv',
			'number': 116,
			'mass': 293
		},
		'uus': {
			'name': 'Ununseptium',
			'symbol': 'Uus',
			'number': 117,
			'mass': 294
		},
		'uuo': {
			'name': 'Ununoctium',
			'symbol': 'Uuo',
			'number': 118,
			'mass': 294
		}
	});
angular.module('chemglyph.search')
	.factory('matchFinder', ['elementInfo', function(elementInfo) {

		var chemMatch = function() {
			this.length = 0
			this.match = []
		}
		chemMatch.prototype.push = function(element) {
			this.match.push(element);
			this.length += element.length;
		}

		chemMatch.prototype.clone = function() {
			var newMatch = new this.constructor();
			newMatch.match = this.match.slice(0);
			newMatch.length = this.length;
			return newMatch
		}

		chemMatch.prototype.toString = function() {
			return this.match.join('');
		}

		var matchFinder = function(word) {
			if (!word) { return []; };
			word = word.toLowerCase();
			var matches = [new chemMatch()],
				slice, clone,
				notLetter = new RegExp('^[^a-z]', 'i')
				finals = [];
			while (matches.length > 0) {
				var match = matches.pop();
				if (match.length < word.length) {
					for (var i = 1; i < 4 && match.length + i <= word.length; i++) {
						if (match.length + i > word.length) {
							break;
						}
						slice = word.slice(match.length, match.length + i)
						if (elementInfo[slice]) {
							clone = match.clone();
							clone.push(elementInfo[slice].symbol);
							matches.push(clone);
						} else if (notLetter.test(slice)) {
							clone = match.clone();
							clone.push(slice);
							matches.push(clone);
							break;
						}
					}
				} else {
					finals.push(match);
				}
			}
			return finals;
		};

		return { find: matchFinder };
	}]);