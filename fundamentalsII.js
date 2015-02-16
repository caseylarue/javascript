var person = { 
	name: 'Casey',
	distance_traveled: 0,
	say_name:  function () {
		alert(person.name);
	},
	say_something:  function (saying) {
		alert(person.name + saying);
	},
	walk: function() {
      this.distance_traveled += 3;
	  console.log(this.name + " is walking " + this.distance_traveled);
	},
	run: function() {
      this.distance_traveled += 10;
	  console.log(this.name + " is running " + this.distance_traveled);
	},
	crawl: function() {	
	  this.distance_traveled += 1;
      console.log(this.name + " is crawling " + this.distance_traveled);
	},
    doSomething: function() {
//       var arr = [this.walk, this.run, this.crawl];
      var rand = Math.floor( Math.random() * 3 );
      switch (rand) {
        case 0: 
          return this.walk();
          break;
        case 1:
          return this.run();
          break;
        case 2:
          return this.crawl();
          break;
        }
     }
};

var returned_function = person.doSomething(); 