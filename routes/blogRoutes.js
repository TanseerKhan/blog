const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const protect = require('../middleware/authMiddleware');  // Import the protect middleware
const router = express.Router();

// Protect the routes with the `protect` middleware
router.post('/create', protect, createBlog);
router.get('/all', protect, getAllBlogs);
router.get('/:user_id/:blog_id', protect, getBlogById);
router.put('/:user_id/:blog_id', protect, updateBlog);
router.delete('/:user_id/:blog_id', protect, deleteBlog);

module.exports = router;
