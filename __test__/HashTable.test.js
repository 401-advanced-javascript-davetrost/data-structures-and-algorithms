'use strict';

let { HashTable } = require('../challenges/hashtable/HashTable');

describe('Hash Table with the default algorithm', () => {
  const animal = new HashTable();
  animal.set('name', 'Fido');
  animal.set('species', 'dog');
  animal.set('color', 'brown');
  animal.set('owner', 'Billy Bob');

  it('adds and retrieves items', () => {
    expect(animal.includes('name')).toBeTruthy;
    expect(animal.get('name')).toBe('Fido');

    expect(animal.includes('brown')).toBeFalsy;
    expect(animal.get('brown')).toBe(null);

    expect(animal).toMatchInlineSnapshot(`
      HashTable {
        "arr": Array [
          Array [],
          Array [],
          Array [
            Array [
              "color",
              "brown",
            ],
          ],
          Array [
            Array [
              "species",
              "dog",
            ],
          ],
          Array [],
          Array [],
          Array [
            Array [
              "owner",
              "Billy Bob",
            ],
          ],
          Array [
            Array [
              "name",
              "Fido",
            ],
          ],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
        ],
        "hashAlgorithm": [Function],
        "size": 20,
      }
    `);
  });

  it('modifies a value and reads back the updated table', () => {
    animal.set('name', 'Ole Blue');

    expect(animal.includes('name')).toBeTruthy;
    expect(animal.get('name')).toBe('Ole Blue');

    expect(animal.includes('brown')).toBeFalsy;
    expect(animal.get('brown')).toBe(null);

    expect(animal).toMatchInlineSnapshot(`
      HashTable {
        "arr": Array [
          Array [],
          Array [],
          Array [
            Array [
              "color",
              "brown",
            ],
          ],
          Array [
            Array [
              "species",
              "dog",
            ],
          ],
          Array [],
          Array [],
          Array [
            Array [
              "owner",
              "Billy Bob",
            ],
          ],
          Array [
            Array [
              "name",
              "Ole Blue",
            ],
          ],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
        ],
        "hashAlgorithm": [Function],
        "size": 20,
      }
    `);
  });

  it('creates a hash table with a crappy algo and adds items', () => {
    const person = new HashTable(20, () => key => 0);
    person.set('first name', 'Dude');
    person.set('last name', 'Lebowski');
    person.set('favorite drink', 'White Russian');

    expect(person.includes('first name')).toBeTruthy;
    expect(person.get('first name')).toBe('Dude');

    expect(person.includes('brown')).toBeFalsy;
    expect(person.get('brown')).toBe(null);

    expect(person).toMatchInlineSnapshot(`
      HashTable {
        "arr": Array [
          Array [
            Array [
              "first name",
              "Dude",
            ],
            Array [
              "last name",
              "Lebowski",
            ],
            Array [
              "favorite drink",
              "White Russian",
            ],
          ],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
          Array [],
        ],
        "hashAlgorithm": [Function],
        "size": 20,
      }
    `);
  });
});
