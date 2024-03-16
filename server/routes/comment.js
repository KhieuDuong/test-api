const express = require('express');
const route = express.Router();

const {createComment} = require('../controllers/Comments/createComment');
const {getCommentByBlogId} = require('../controllers/Comments/getComment');
const {updateComment} = require('../controllers/Comments/updateComment');
const {deleteComment} = require('../controllers/Comments/deleteComment');

route.post('/:id',createComment)
route.put('/:id',updateComment)
route.delete('/:id',deleteComment)
route.get('/:id',getCommentByBlogId)


module.exports.commentRoute = route; 