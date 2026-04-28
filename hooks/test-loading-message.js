const { readFlagFile, pickMessage } = require('./loading-message-lib');
const fs = require('fs');
const os = require('os');
const path = require('path');

let passed = 0;
let failed = 0;

function assert(desc, condition) {
  if (condition) {
    console.log(`  ✓ ${desc}`);
    passed++;
  } else {
    console.error(`  ✗ ${desc}`);
    failed++;
  }
}

// Test readFlagFile
const tmpFlag = path.join(os.tmpdir(), `.saucy-test-${Date.now()}`);

// absent → off
assert('flag absent returns off', readFlagFile(tmpFlag) === 'off');

// valide → retourne valeur
fs.writeFileSync(tmpFlag, 'saucy');
assert('flag saucy returns saucy', readFlagFile(tmpFlag) === 'saucy');

fs.writeFileSync(tmpFlag, 'gooning');
assert('flag gooning returns gooning', readFlagFile(tmpFlag) === 'gooning');

// valeur invalide → off
fs.writeFileSync(tmpFlag, 'malicious\ninjection');
assert('invalid value returns off', readFlagFile(tmpFlag) === 'off');

// trop long → off
fs.writeFileSync(tmpFlag, 'a'.repeat(20));
assert('too long returns off', readFlagFile(tmpFlag) === 'off');

fs.unlinkSync(tmpFlag);

// Test pickMessage
const pool = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5'];
const picks = new Set();
for (let i = 0; i < 50; i++) picks.add(pickMessage(pool));
assert('pickMessage returns items from pool', [...picks].every(m => pool.includes(m)));
assert('pickMessage has some randomness (>1 unique over 50 picks)', picks.size > 1);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
