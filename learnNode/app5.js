import { copyFile } from 'fs';
import fs from 'fs/promises';
import readline from 'readline-sync';


// async function sayhello() {
//  try {
//      let folderName = readline.question('Enter folder Name :')
//      await fs.mkdir(folderName);
//  } catch (error) {
//     console.log(error);
//  }   
// }

// sayhello()


async function makefile() {
    try {
        let fileName = 'cfi.txt';
        let fileContent = 'kaif, Kamran, Maaz';

        await fs.writeFile(fileName, fileContent);
        // await fs.unlink(fileName); // to delete a file
        // await fs.rename('cfi.txt', 'newcfi.txt');
    } catch (error) {
        console.log(error);
    }
}

makefile()