export class Quote {
    public showDescription:boolean
    constructor(public Title:string, public quote:string, public Person:string,public completeDate:Date){
        this.showDescription=false

    }
}
