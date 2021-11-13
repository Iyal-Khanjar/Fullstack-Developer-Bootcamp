let prints = {
    name: 'Iyal Khanjar',
    print: function() {
        console.log(this.name);
    },
    printDelay: function() {
        setTimeout(function(){
            console.log(this.name);
        }.bind(this),1000)
    }
}
prints.print();
prints.printDelay();