const { exec } = require('child_process');

async function main() {
  const process = exec('cd packages/server && PORT=80 node www/index.js');

  process.stdout.on('data', function(data) {
    console.log(data); 
  });
}

main().catch(err => {
  console.error(err.stack);
  process.exit(1);
});