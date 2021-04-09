const express = require('express');
const router = express.Router();
import { open } from 'fs/promises';

const YAML = require('yaml')

router.get('/', function(req, res, next) {

  try{
    const fileHandle =
      await open(
        'routes/specs/rhoSpec.yaml',
        'r');
    const data = YAML.parse(fileHandle)
    res.render('index', { title: data });
  }
  finally{
    await fileHandle?.close();
  }

);

module.exports = router;
