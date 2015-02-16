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
      var rand = Math.floor( Math.random() * 3 );
      switch (rand) {
        case 0: 
          return this.walk();
        case 1:
          return this.run();
        case 2:
          return this.crawl();
        }
     },
     fly: function() {
     	var prob = Math.random() * (1.01);
     	if(prob >= 0.70) {
     		alert("You can fly!");
            x();
     	}
     	else {
     		alert("No flying today");
            y();
     	}
     }
};

var x = function() { alert('eating ice cream!'); }; 
var y = function() { alert('crying at home...'); };
person.fly(x,y);
















