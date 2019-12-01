var employee = {
    id: 1,
    greet: function() {
        let self = this;
        
        //setTimeout(function() { console.log(this.id); }, 1000);       // Do NOT work : this of the function context
        //setTimeout(function() { console.log(self.id); }, 1000);       // Do work : we pass the parent function context

        setTimeout(() => console.log(this.id), 1000);                   // Better and shorter
    }
};

employee.greet();