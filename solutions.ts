// problem 01
const filterEvenNumbers = (inputs:number[]):number[] => {
   return inputs.filter(number => number % 2 == 0)
}

// problem 2
const reverseString = (str:string) => {
    return str.split('').reverse().join('');
}

// problem 3
type StringOrNumber = string | number

const checkType = (guards:StringOrNumber):string => {
    if(typeof guards === "string"){
        return "String";
    }else{
        return "Number";
    }
}

//problem 4 
type User = {
    id: number,
    name: string,
    age: number
}
const getProperty = <T, K extends keyof T>(obj:T, key:K):T[K]=>{
    return obj[key];
}

//Problem 5
interface Book{
    title:string,
    author:string,
    publishedYear:number,
}

interface UpdatedBook extends Book{
    isRead: boolean;
}

const toggleReadStatus = (book:Book):UpdatedBook =>{
    return {
        ...book,
        isRead:true,
    }
    
}

//problem 6
class Person{
    name:string
    age:number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
        grade:string

        constructor(name:string, age:number, grade:string){
            super(name, age);
            this.grade = grade
        }

        public getDetails(){
            return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
            
        }
    }

// Problem 7
const getIntersection = (arr1:number[], arr2:number[]):number[] =>{
    const setValue = new Set(arr2);

    return arr1.filter(item => setValue.has(item));
}