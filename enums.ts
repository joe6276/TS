enum Role {Admin=4,User,Designer,Tester}
enum Roles {Admin=4,User='User',Designer=7,Tester='Tester'}
const person ={
    name:'Jonathan',
    age:16,
    hobbies:['Swimming', 'Reading books', 'Coding',3],
    role:Role.Admin
}

if(Role.Admin===person.role){
    console.log("he is an Adnmin");
    
}