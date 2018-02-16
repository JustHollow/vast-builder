
// const { runFixture } = require('../helpers');
const chai = require('chai');
const assert = chai.assert;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');

const VastElement = require('../lib/vast-element');
const validateNext = require('../lib/validate-node');

const testOptions = {
  throwOnError: true,
  logWarn: false
}

let root, validator, lastTag;

describe('VAST Validator', () => {
  beforeEach(() => {
    root = new VastElement();
    root.parseOptions(testOptions);
  });
  afterEach(() => {
    // debug for test writing
    // console.log(root.toXml());
  });
  describe('required attributes checking', () => {
    beforeEach(() => {
      validator = {
        follow: {
          test: {
            attrsRequired: {
              a: null,
              b: null,
              c: ['foo','bar']
            }
          }
        }
      };
    });
    it('should throw for missing args', () => {
      root.dangerouslyAddCustomTag('test', 'content');
      assert.throws(() => validateNext(root, validator));
      assert.throws(() => validateNext(root, validator), /Required attribute "a" not found in "test" Tag/);
    });
    it('should throw for missing other args than first', () => {
      root.dangerouslyAddCustomTag('test', 'content', {a:'random'});
      assert.throws(() => validateNext(root, validator));
      assert.throws(() => validateNext(root, validator), /Required attribute "b" not found in "test" Tag/);
    });
    it('should throw for missing args with expected values', () => {
      root.dangerouslyAddCustomTag('test', 'content', {a:'random', b:'random'});
      assert.throws(() => validateNext(root, validator));
      assert.throws(() => validateNext(root, validator), /Required attribute "c" not found in "test" Tag/);
    });
    it('should throw for invalid args with expected values', () => {
      root.dangerouslyAddCustomTag('test', 'content', {a:'random', b:'random', c:'wrong'});
      assert.throws(() => validateNext(root, validator));
      assert.throws(() => validateNext(root, validator), /Required attribute "c" in "test" has incorrect value "wrong"\n  Allowed values are : foo,bar/);
    });
    it('should valid correct expected values', () => {
      root.dangerouslyAddCustomTag('test', 'content', {a:'random', b:'random', c:'foo'});
      assert(validateNext(root, validator));
    });
  });
  describe('simple tests', () => {
    // the only flag is the stronger
    // at this level it can be one tag and it is this one
    describe('only fields', () => {
      beforeEach(() => {
        validator = {
          only: {
            test: {
            }
          }
        };
      });
      it('should throw on last level empty content tag', () => {
        root.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required only tag is valid', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required only tag is missing', () => {
        root.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "root"/);
      });
      it('should say required only tag is not alone', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one "test" is allowed below "root"/);
      });
    });
    // required flag says that tag is needed at this level
    // but it can be others too
    describe('required fields', () => {
      beforeEach(() => {
        validator = {
          required: {
            test: {
            }
          }
        };
      });
      it('should throw on last level empty content tag', () => {
        root.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required tag is valid', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required tag is missing', () => {
        root.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "root"/);
      });
      it('should say required tag is present with another', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
    });
    describe('uniq fields', () => {
      beforeEach(() => {
        validator = {
          uniq: {
            thatOne: {
            },
            orThatOne: {
            }
          }
        };
      });
      it('should throw on last level empty content tag', () => {
        root.dangerouslyAddCustomTag('thatOne');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "thatOne"/);
      });
      it('should say uniq tag is valid', () => {
        root.dangerouslyAddCustomTag('thatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is valid', () => {
        root.dangerouslyAddCustomTag('orThatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is not uniq', () => {
        root.dangerouslyAddCustomTag('thatOne', 'content');
        root.dangerouslyAddCustomTag('orThatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one child of "thatOne,orThatOne" is allowed below "root"/);
      });
      it('should say uniq tag is in double', () => {
        root.dangerouslyAddCustomTag('thatOne', 'content');
        root.dangerouslyAddCustomTag('thatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one child of "thatOne,orThatOne" is allowed below "root"/);
      });
      it('should say uniq tag is missing', () => {
        root.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /One child of "thatOne,orThatOne" is needed below "root"/);
      });
      it('should say uniq tag is present with another', () => {
        root.dangerouslyAddCustomTag('thatOne', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is in double', () => {
        validator = {
          uniq: {
            thatOne: {
            }
          }
        };
        root.dangerouslyAddCustomTag('thatOne', 'content');
        root.dangerouslyAddCustomTag('thatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Your validator seems broken, prefer "only" over uniq if you want on only child/);
      });
    });
    // alo: at least one is a required field, but shared between multiples possible choices
    describe('alo fields', () => {
      beforeEach(() => {
        validator = {
          alo: {
            test: {
            },
            other: {
            },
            another: {
            }
          }
        };
      });
      it('should throw on last level empty content tag', () => {
        root.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "test"/)
      });
      it('should say at least one required tag is valid', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tag is missing', () => {
        root.dangerouslyAddCustomTag('else', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /At least one child of "test,other,another" is needed below "root"/);
      });
      it('should allow another element at this level', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tags are valid if multiples', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
      it('should allow other elements at same level', () => {
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('test', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        root.dangerouslyAddCustomTag('other', 'content');
        root.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
    });
    describe('follow fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            test1: {
              follow: {
                test2: {
                  follow: {
                    test3: {
                      required: {
                        test4: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('test1')
          .dangerouslyAttachCustomTag('test2')
          .dangerouslyAttachCustomTag('test3');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test4');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test4"/)
      });
      it('should say required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test4', 'content');
        assert(validateNext(root, validator));
      });
      it('should follow until required', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test4" not found below "test3"/)
      });
      it('should do nothing if a node is missing', () => {
        validator = {
          follow: {
            test1: {
              follow: {
                test2: {

                }
              }
            }
          }
        };
        root = new VastElement();
        root.parseOptions(testOptions);
        root.dangerouslyAddCustomTag('test1', 'content');
        assert(validateNext(root, validator));
      });
    });
  });
  describe('two levels tests', () => {
    // the only flag is the stronger
    // at this level it can be one tag and it is this one
    describe('only fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            subroot: {
              only: {
                test: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required only tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say throw because of missing tag', () => {
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "subroot"/);
      });
      it('should say required only tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "subroot"/);
      });
      it('should say required only tag is not alone at second level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one "test" is allowed below "subroot"/);
      });
      it('should not validate since no element', () => {
        root = new VastElement();
        root.parseOptions({
          throwOnError: false,
          logWarn: false
        });
        lastTag = root.dangerouslyAttachCustomTag('subroot');
        assert.isFalse(validateNext(root, validator));
      });
      it('should say required only tag is valid', () => {
        validator = {
          follow: {
            subroot: {
              only: {
                test: {
                },
                other: {
                }
              }
            }
          }
        };
        lastTag.dangerouslyAttachCustomTag('test', 'content');
        lastTag.dangerouslyAttachCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Your validator seems broken, only one child is allow bellow an Only declaration/);
      });
    });
    // required flag says that tag is needed at this level
    // but it can be others too
    describe('required fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            subroot: {
              required: {
                test: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "subroot"/);
      });
      it('should say required tag is present with another', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required only tag is valid', () => {
        lastTag.dangerouslyAttachCustomTag('test', 'content');
        lastTag.dangerouslyAttachCustomTag('test', 'content');
        lastTag.dangerouslyAttachCustomTag('test', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Multiples "test" found below "subroot"/);
      });
    });
    describe('uniq fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            subroot: {
              uniq: {
                thatOne: {
                },
                orThatOne: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('thatOne');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "thatOne"/);
      });
      it('should say uniq tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('orThatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is not uniq', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        lastTag.dangerouslyAddCustomTag('orThatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one child of "thatOne,orThatOne" is allowed below "subroot"/);
      });
      it('should say uniq tag is in double', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        lastTag.dangerouslyAddCustomTag('orThatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one child of "thatOne,orThatOne" is allowed below "subroot"/);
      });
      it('should say uniq tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /One child of "thatOne,orThatOne" is needed below "subroot"/);
      });
      it('should say uniq tag is present with another', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
    });
    // alo: at least one is a required field, but shared between multiples possible choices
    describe('alo fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            subroot: {
              alo: {
                test: {
                },
                other: {
                },
                another: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "test"/)
      });
      it('should throw on last level empty content not first tag', () => {
        lastTag.dangerouslyAddCustomTag('another');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "another"/)
      });
      it('should say at least one required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required not first tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('another', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /At least one child of "test,other,another" is needed below "subroot"/);
      });
      it('should allow another element at this level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tags are valid if multiples', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
      it('should allow other elements at same level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
    });
    describe('follow fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            test1: {
              required: {
                test2: {
                  follow: {
                    test3: {
                      required: {
                        test4: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('test1')
          .dangerouslyAttachCustomTag('test2')
          .dangerouslyAttachCustomTag('test3');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test4');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "test4"/)
      });
      it('should say required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test4', 'content');
        assert(validateNext(root, validator));
      });
      it('should follow until required', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /Tag "test4" not found below "test3"/)
      });
    });
  });
  describe('brother levels tests', () => {
    beforeEach(() => {
      root.dangerouslyAttachCustomTag('notimportant', 'content');
    });
    // the only flag is the stronger
    // at this level it can be one tag and it is this one
    describe('only fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            notimportant: {}
          },
          follow: {
            subroot: {
              only: {
                test: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required only tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required only tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "subroot"/);
      });
      it('should say required only tag is not alone at second level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one "test" is allowed below "subroot"/);
      });
    });
    // required flag says that tag is needed at this level
    // but it can be others too
    describe('required fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            notimportant: {}
          },
          follow: {
            subroot: {
              required: {
                test: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "test"/);
      });
      it('should say required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say required tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Tag "test" not found below "subroot"/);
      });
      it('should say required tag is present with another', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
    });
    describe('uniq fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            notimportant: {}
          },
          follow: {
            subroot: {
              uniq: {
                thatOne: {
                },
                orThatOne: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('thatOne');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /No content found in "thatOne"/);
      });
      it('should say uniq tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('orThatOne', 'content');
        assert(validateNext(root, validator));
      });
      it('should say uniq tag is not uniq', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        lastTag.dangerouslyAddCustomTag('orThatOne', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /Only one child of "thatOne,orThatOne" is allowed below "subroot"/);
      });
      it('should say uniq tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /One child of "thatOne,orThatOne" is needed below "subroot"/);
      });
      it('should say uniq tag is present with another', () => {
        lastTag.dangerouslyAddCustomTag('thatOne', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
    });
    // alo: at least one is a required field, but shared between multiples possible choices
    describe('alo fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            notimportant: {}
          },
          follow: {
            subroot: {
              alo: {
                test: {
                },
                other: {
                },
                another: {
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('subroot');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "test"/)
      });
      it('should throw on last level empty content not first tag', () => {
        lastTag.dangerouslyAddCustomTag('another');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "another"/)
      });
      it('should say at least one required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required not first tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('another', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tag is missing', () => {
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert.throws(() => validateNext(root, validator));
        assert.throws(() => validateNext(root, validator), /At least one child of "test,other,another" is needed below "subroot"/);
      });
      it('should allow another element at this level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
      it('should say at least one required tags are valid if multiples', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert(validateNext(root, validator));
      });
      it('should allow other elements at same level', () => {
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('test', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('other', 'content');
        lastTag.dangerouslyAddCustomTag('else', 'content');
        assert(validateNext(root, validator));
      });
    });
    describe('follow fields', () => {
      beforeEach(() => {
        validator = {
          follow: {
            notimportant: {}
          },
          follow: {
            test1: {
              required: {
                test2: {
                  follow: {
                    test3: {
                      required: {
                        test4: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        lastTag = root.dangerouslyAttachCustomTag('test1')
          .dangerouslyAttachCustomTag('test2')
          .dangerouslyAttachCustomTag('test3');
      });
      it('should throw on last level empty content tag', () => {
        lastTag.dangerouslyAddCustomTag('test4');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /No content found in "test4"/)
      });
      it('should say required tag is valid', () => {
        lastTag.dangerouslyAddCustomTag('test4', 'content');
        assert(validateNext(root, validator));
      });
      it('should follow until required', () => {
        lastTag.dangerouslyAddCustomTag('other', 'content');
        assert.throws(() => validateNext(root, validator))
        assert.throws(() => validateNext(root, validator), /Tag "test4" not found below "test3"/)
      });
    });
  });

});