function createSortedList(){
    const sortedList = {
        items: [],
        size: 0,
        sortDesc: function(){this.items.sort((a, b) => a - b)},
        add: function (element){
            this.items.push(element);
            this.size += 1;
            this.sortDesc();
        },
        remove: function (index){
            if(index >= 0 && index < this.size){
                this.items.splice(index, 1)
                this.size -= 1;
                this.sortDesc();   
            }  
        },
        get: function(index){
            this.sortDesc();
            if(index < this.size){
                return this.items[index];
            }
        }
    };

    return sortedList;
};

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
