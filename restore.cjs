const fs = require('fs');
const readline = require('readline');

const transcriptPath = "/.aistudio/artifacts/brain/ffbe8da1-a94e-4daf-9ca9-2392d2034f09/.system_generated/logs/transcript.jsonl";

if (!fs.existsSync(transcriptPath)) {
    console.log("Transcript path does not exist!");
    process.exit(1);
}

const fileStream = fs.createReadStream(transcriptPath);
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    try {
        const data = JSON.parse(line);
        const dataStr = JSON.stringify(data);
        if (dataStr.includes("addedCurriculums.ts") && dataStr.includes("Total Lines: 2553")) {
            console.log("Found match in transcript line!");
            if (data.output && data.output.includes("Total Lines: 2553")) {
                console.log("Match has output content!");
            }
        }
    } catch (e) {
    }
});
