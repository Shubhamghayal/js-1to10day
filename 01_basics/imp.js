//for loops
// let num=10;
// for(let i=0;i<=num;i++){
//     console.log(i);
    
// }
// const arr=[1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings="Hello world"
// for (const greet of greetings) {
// console.log(`each letter is${greet}`);
    
// }

// const coding = ["js","ruby","python","cpp"]
// coding.forEach( function (item){
//     console.log(item)
// })
// coding.forEach((item)=>{console.log(item)}
    
// )

const myCoding=[
    {
        name:"shubham",
        language:"marathi"
    },
    {
        name:"shu",
        language:"hindi"
    },
    {
        name:"manish",
        language:"brgali"
    }
]
myCoding.forEach((item)=>{
    //console.log(item.name,item.language)
})

//filter map
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=myNums.filter((nums)=> nums>5
// // {
// //     return nums>4
// // }
// )
const newnums=[]
myNums.forEach((num)=>{
    if (num>7){
     newnums.push(num)
    }
})
// console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

    let user=books.filter((bk)=>bk.genre==='History')  
    user=books.filter((bk)=>bk.publish>=1987 && bk.genre==="History")
    // console.log(user)

    const myNumbers=[1,2,3,4,5,6,7,8,9,10]

    // const add=myNumbers.map((nums)=>(nums+10))
    // console.log(add);
    const neww=myNumbers.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>30)
    // console.log(neww);



    //reduce
    const newwnums=[1,2,3,4,5]
    // const rd=newwnums.reduce((acc,curval)=>{
    //     console.log(`acc :${acc} and current:${curval}`)
    //     return acc +curval
    // },0)
    const rd=newwnums.reduce((acc,curval)=>(acc+curval),0)
    // console.log(rd);

    const shopingcart = [
        {
            itemName:"py",
            price:5999
        },
        {
            itemName:"java",
            price:599
        },
        {
            itemName:"js",
            price:999
        }
    ]

    const total=shopingcart.reduce((acc,item)=> acc+ item.price,0)
    console.log(total)