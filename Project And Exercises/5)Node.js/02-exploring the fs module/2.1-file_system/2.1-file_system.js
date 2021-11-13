const fs = require('fs')

// 1. Create a new txt file using the same fs module method we have learned before.
fs.writeFileSync('./NewFile.txt', 'hello my name is Iyal')

// 2. Create a copy of the newly created txt file using a method from the fs module.
fs.copyFileSync('./NewFile.txt', 'CopyedNewFile.txt');

// 3. Rename one of the files using a method from the fs module.
fs.renameSync('./NewFile.txt', './RenameNewFile.txt')

// 4. Get a list of all the file names of the current directory using amethod from the fs module.
fs.readdirSync('../2.1-file_system').forEach(file => {
    console.log(file);
});

//   5. Find out and implement another method for the fs module.
fs.appendFileSync('./RenameNewFile.txt', ' I live in Israel');