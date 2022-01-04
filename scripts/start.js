const { execSync } = require('child_process');
const path = require('path');

async function main() {
  const repoRoot = path.join(__dirname, '..');
  execSync('cd packages/server && PORT=80 yarn start');
}

main().catch(err => {
  console.error(err.stack);
  process.exit(1);
});