
const { generateMinimalVast } = require('./helpers');

describe('Stress test', () => {
  xit('poc', () => {
    console.log(generateMinimalVast());
  });
  it('should generate 50000 VAST in less than 20s', () => {
    const begin = new Date();
    for (let i = 0; i < 50000; i++) {
      generateMinimalVast();
    }
    const end = new Date();

    if (end - begin > 20000 ) {
      throw new Error('Vast generation was too slow');
    }
  });
});