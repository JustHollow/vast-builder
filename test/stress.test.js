
const { generateMinimalVast } = require('./helpers');

describe('Stress test', () => {
  // it('poc', () => {
  //   console.log(generateMinimalVast());
  // });
  it('should generate 10000 VAST in less than 15s', () => {
    const begin = new Date();
    for (let i = 0; i < 10000; i++) {
      generateMinimalVast();
    }
    const end = new Date();

    if (end - begin > 15000 ) {
      throw new Error('Vast generation was too slow');
    }
  });
});