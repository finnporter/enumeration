var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for (element of arr1) {
			newArray.push(element);
		}
		for (element of arr2) {
			newArray.push(element);
		}
		return newArray;

	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr;
	},

	square: function (arr) {
		var newArray = arr.map(function (element) {
			return element * element;
		})
		return newArray;
		// var newArray = [];
		// for (element of arr) {
		// 	var newElement = element * element;
		// 	newArray.push(newElement);
		// }
		// return newArray;
	},

	sum: function (arr) {
		var sum = 0;
		var totalSum = arr.reduce(function(sum, value) {
			return sum + value;
		}, 0)
		return totalSum;
	},

	findDuplicates: function (arr) {
    //use forEach instead of for

    var newArray = [];
    var resultArray = [];
    for (element of arr) {
    	if (newArray.includes(element) && !resultArray.includes(element)) {
    		resultArray.push(element);
    	} 
    	else {
    		newArray.push(element);
    	}
    }
    return resultArray;
  },

  removeAndClone: function (arr, valueToRemove) {
  	var newArray = arr.filter(function(element) {
  		return element != valueToRemove 
  	})
  	return newArray;
  },

  findIndexesOf: function (arr, itemToFind) {
  	var newArray = [];
  	for (i = 0; i < arr.length; i++)
  		if (arr[i] === itemToFind) {
  			newArray.push(i);
  		}
  		return newArray;
  	},

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
