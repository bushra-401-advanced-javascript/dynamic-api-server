'use strict';

const express = require('express');
const router = express.Router();

const products = require('../lib/models/products/products.collection');
const categories = require('../lib/models/categories/categories.collection');

