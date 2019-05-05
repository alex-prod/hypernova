import { assert } from 'chai';
import path from 'path';
import { createGetComponent } from '../server';

describe('createGetComponent', () => {
  const files = {
    HypernovaExample: path.resolve(path.join('test', 'components', 'HypernovaExample.js')),
  };

  const getComponent = createGetComponent(files);

  it('returns the module if it exists', () => {
    const component = getComponent('HypernovaExample');
    console.log('1.cGC component exits : ', component)
    assert(component !== null, 'HypernovaExample exists');
  });

  it('returns null if it does not exist', () => {
    const component = getComponent('FooBarBazz');
    console.log('2.cGC component null : ', component)
    assert.isNull(component, 'component does not exist');
  });
});
