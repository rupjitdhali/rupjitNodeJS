import fs from 'fs/promises';

async function sayhello() {
 try {
    await fs.mkdir('cfiStudents');

    console.log('Bhai folder ban gaya');
 } catch (error) {
    console.log(error);
 }   
}

sayhello()