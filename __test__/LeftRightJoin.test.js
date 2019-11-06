'use strict';

let { HashTable } = require('../challenges/hashtable/HashTable');
let { leftJoin, rightJoin } = require('../challenges/hashtable/left-join');

describe('Join functions for hash tables', () => {
  const synonyms = new HashTable(5);
  synonyms.set('fond', 'enamored');
  synonyms.set('wrath', 'anger');
  synonyms.set('diligent', 'employed');
  synonyms.set('outfit', 'garb');
  synonyms.set('guide', 'usher');

  const antonyms = new HashTable();
  antonyms.set('fond', 'averse');
  antonyms.set('wrath', 'delight');
  antonyms.set('diligent', 'idle');
  antonyms.set('guide', 'follow');
  antonyms.set('flow', 'jam');

  it('completes a left join', () => {
    expect(leftJoin(synonyms, antonyms)).toMatchInlineSnapshot(`
      HashTable {
        "arr": Array [
          Array [
            Array [
              "fond",
              Array [
                "enamored",
                "averse",
              ],
            ],
          ],
          Array [],
          Array [],
          Array [
            Array [
              "diligent",
              Array [
                "employed",
                "idle",
              ],
            ],
            Array [
              "outfit",
              Array [
                "garb",
                null,
              ],
            ],
          ],
          Array [
            Array [
              "wrath",
              Array [
                "anger",
                "delight",
              ],
            ],
            Array [
              "guide",
              Array [
                "usher",
                "follow",
              ],
            ],
          ],
        ],
        "hashAlgorithm": [Function],
        "size": 5,
      }
    `);
  });

  it('completes a right join', () => {
    expect(rightJoin(synonyms, antonyms)).toMatchInlineSnapshot(`
      HashTable {
        "arr": Array [
          Array [
            Array [
              "fond",
              Array [
                "averse",
                "enamored",
              ],
            ],
          ],
          Array [],
          Array [
            Array [
              "flow",
              Array [
                "jam",
                null,
              ],
            ],
          ],
          Array [
            Array [
              "diligent",
              Array [
                "idle",
                "employed",
              ],
            ],
          ],
          Array [
            Array [
              "wrath",
              Array [
                "delight",
                "anger",
              ],
            ],
            Array [
              "guide",
              Array [
                "follow",
                "usher",
              ],
            ],
          ],
        ],
        "hashAlgorithm": [Function],
        "size": 5,
      }
    `);
  });
});
