
const { generateMinimalVast } = require('./helpers');

describe('Stress test', () => {
  // it('poc', () => {
  //   console.log(generateMinimalVast());
  // });
  it('should generate 20000 VAST in less than 10s', () => {
    const begin = new Date();
    for (let i = 0; i < 20000; i++) {
      generateMinimalVast();
    }
    const end = new Date();

    if (end - begin > 10000 ) {
      throw new Error('Vast generation was too slow');
    }
  });
});