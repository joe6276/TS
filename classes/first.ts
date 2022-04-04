
abstract class Group{

    static dob =2020


    static createMember(names:string){
        console.log({name:names})
    }
   protected members:string[] =[]
    
    constructor(private id:string, protected name:string){}

    abstract describe():void;

    addMember(member:string){
        this.members.push(member)
    }
    printInfo(){
        console.log('Members : ' +this.members.length)
        console.log(this.members)
    }
}

 Group.createMember('Static Member')
 console.log(Group.dob)


// const group= new Group('gr1',"Jadens's Group")
//  console.log(group);
// group.describe()
// group.addMember('Jonathan')
// group.addMember('Milana')
// // group.members[2]='Ndambuki'

// group.printInfo()


// Inheritance

class ITGroup extends Group{
Itgroup:string[]
    constructor( gr:string[]){
        super('it','IT Group')
        this.Itgroup=gr

    }
describe(): void {
    console.log('Department : '+ this.name)
}
    addMember(member: string): void {
        if(member ==='Max'){
            return;
        }
        this.members.push(member)
    }

}

const it = new ITGroup(['Joe', ' Milly'])
it.addMember('Jonah')
it.addMember('Max')
it.addMember('Jonah')
it.addMember('Max')
it.printInfo()
it.describe()
console.log(it)



class AccountingGroup extends Group{
    private lastreport:string
    static instance: AccountingGroup

    describe(): void {
        console.log('Department : '+ this.name)
    }
    static getInstance(){
        if(AccountingGroup.instance){
            return AccountingGroup.instance
        }
        AccountingGroup.instance= new AccountingGroup([])
        return AccountingGroup.instance
    }

    get mylastReport(){
        
        if(this.lastreport){
            return this.lastreport
        }
        throw new Error(' No Report found')
    }

    set myLastReport(value:string){
        if(!value){
            throw new Error('Please pass a valid value!')
        }

        this.addReports(value)
    }

    private constructor( private reports:string[]){
        super('34','Accounting Group')
        this.lastreport=reports[0]
    }
    addReports(text:string){
        this.reports.push(text)
        this.lastreport=text
    }
    printReport(){
        console.log(this.reports)
    }
}



console.log('Accounting................')
const acc= AccountingGroup.getInstance()
console.log(acc)
const acc1= AccountingGroup.getInstance()
console.log(acc1)
acc.describe()
acc.addReports('Report 1')
acc.addReports('Report 2')
acc.mylastReport
// acc.printReport()
acc.myLastReport='Report 3'
acc.addMember('Felix')
acc.addMember('Jacob')
console.log(acc)
