function Student(name) { 
    var t = []
	function People(name) {
        var name;
        var fu = (
            function(){
                console.log("Hi! This is ",name,"!");
            }
        )
		t.push(fu)
        setTimeout(() => {
            while(t.length!=0) t.shift()();
        }, 0);
        return this
	}

	People.prototype.sleep = function(time) {
        var fu =(
            function(){
                var s = new Date();
        while(new Date().getTime()-s<time*1000){}
            }
        )
        t.push(fu);
		        return this;
	}

People.prototype.sleepFirst = function(time) {
    var fu = (
        function(){
            var s = new Date();
    while(new Date().getTime()-s<time*1000){}
        }
    )
    t.unshift(fu);
    return this;
	}
People.prototype.study = function(course) {
    var fu = (
        function(){
            console.log("Study ",course)
        }
    )
    t.push(fu);
        return this;
	}

	return new People(name);
}

// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
Student('fxy').sleepFirst(5).study('Ajax');