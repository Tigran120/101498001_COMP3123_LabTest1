const files = require('fs');
const path = require('path');

const currentDir = process.cwd();
const logsDir = path.join(currentDir, 'Logs');

function removeLogs() {
    if (files.existsSync(logsDir)) {
        files.readdirSync(logsDir).forEach(file => {
            console.log(`delete files...${file}`);
            files.unlinkSync(path.join(logsDir, file));
        });
        
        process.chdir(currentDir);
        files.rmdirSync(logsDir);
    }
}

function createLogs() {
    if (!files.existsSync(logsDir)) {
        files.mkdirSync(logsDir);
    }
    
    process.chdir(logsDir);
    
    for (let i = 0; i < 10; i++) {
        files.writeFileSync(`log${i}.txt`, `This is log file number ${i}`);
        console.log(`log${i}.txt`);
    }
}

createLogs();
removeLogs();
