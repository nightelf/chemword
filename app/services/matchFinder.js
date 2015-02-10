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
				if (elements[slice]) {
					clone = match.clone();
					clone.push(elements[slice].symbol);
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

elementInfo.factory('matchFinder', function() {
	return { find: matchFinder }
});