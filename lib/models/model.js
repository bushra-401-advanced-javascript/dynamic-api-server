'use strict';

/**
 * CRUD methods
 * *read() --> schema.find()
 * *creat() --> schema.save()
 * *update() --> schema.findOneByIdAndUpdate()
 * *delete() --> schema.findOneByIdAndDelete()
 */

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  read(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findOneByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return this.schema.findOneByIdAndDelete(_id);
  }
}


module.exports = Model;
