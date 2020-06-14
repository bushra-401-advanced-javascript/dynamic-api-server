'use strict';

require('@code-fellows/supergoose');
const categories = require('../lib/models/categories/categories-model');

const categoryRecord = {
  'name': 'category1',
  'display_name': 'catg_1',
  'description': 'catg_description',
};

const categoryRecord2 = {
  'name': 'category2',
  'display_name': 'catg_2',
  'description': 'moucatg_descriptionse',
};

describe('Categories Model', () => {
  it('create', () => {
    return categories.create(categoryRecord)
      .then((result) => {
        Object.keys(categoryRecord).forEach((key) => {
          expect(result[key]).toEqual(categoryRecord[key]);
        });
      });
  });

  it('read', () => {
    return categories.read()
      .then((result) => {
        Object.keys(categoryRecord).forEach((key) => {
          expect(result[0][key]).toEqual(categoryRecord[key]);
        });
      });
  });

  it('update', () => {
    return categories.read()
      .then((result) => {
        const id = result[0]._id;
        return categories.update(id, categoryRecord2)
          .then((result) => {
            Object.keys(categoryRecord2).forEach((key) => {
              expect(result[key]).toEqual(categoryRecord2[key]);
            });
          });
      });
  });

  it('delete', () => {
    return categories.read()
      .then((result) => {
        const id = result[0]._id;
        return categories.delete(id)
          .then((result) => {
            return categories.read()
              .then((result) => {
                expect(result).toEqual([]);
              });
          });
      });
  });
});
