// console.log("hello");

// let age = 20;
// let user1 = age;
// let user2 = age;
// console.log(user1 + user2);

// import fs from "fs"

// const createFile = () => {
//     console.log("File Created ==>");

//     fs.writeFileSync("user.txt", "Ahmed Raza")
    
// }
// createFile()

// const readFile = (() => {
//     console.log("File Readed ==>");

//     const read = fs.readFileSync("./user.txt", "utf-8")

//     console.log(read);
    
    
// })()

// <=-- CLASS 2 --=> 

import fs, { appendFile, unlink} from "fs"



const createFile = () => {
    
    fs.writeFileSync("boss.txt", "Ahmed Raza", (error, success) => {
        if (error) {
            console.log("Error", error);
            
        }else {
            console.log("File Created", success);
            
        }
    })
}
createFile()

// Read

const readFile = (() => {

    const read = fs.readFileSync("./boss.txt", "utf-8", (error, success) => {
        if (error) {
            console.log("Error", error);
            
        }else {
            console.log("File Readed", success);
            
        }
    })
    // console.log(read);
    
})()