console.log('hello in TS');


class ArrayObj<T>{

    items: object={}
    lenght: number= 0;

    push=(item: T)=>{
       this.items[this.lenght]= item;
       this.lenght++
    }

    pop= ()=> {
        delete this.items[this.lenght-1];
        this.lenght--;
    }

    shift=()=> {
        delete this.items[0];
        const obj= {...this.items}
        this.items={}; this.lenght=0
        for (const key in obj) this.push(obj[key])
    }

    unShift=(item: T)=> {
        const obj= {...this.items}
        this.items={}; 
        this.push(item);
        this.lenght++;
        for (const key in obj) this.push(obj[key])
    }
}


const x= new ArrayObj<string>();

x.push('ahmed1')
x.push('ahmed2')
x.push('ahmed3')