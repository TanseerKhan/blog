const Blog = require('../models/Blog');
const { validationResult } = require('express-validator');

// Create a new blog
const createBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, labels, image_url, user_id } = req.body;

  try {
    const newBlog = await Blog.create({
      title,
      description,
      labels,
      image_url,
      user_id,
    });

    return res.status(201).json({
      message: 'Blog created successfully',
      blog: newBlog,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    return res.status(200).json({ blogs });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Get a specific blog by user_id and blog_id
const getBlogById = async (req, res) => {
  const { user_id, blog_id } = req.params;

  try {
    const blog = await Blog.findOne({
      where: { blog_id, user_id },
    });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    return res.status(200).json({ blog });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  const { user_id, blog_id } = req.params;
  const { title, description, labels, image_url } = req.body;

  try {
    const blog = await Blog.findOne({ where: { blog_id, user_id } });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.labels = labels || blog.labels;
    blog.image_url = image_url || blog.image_url;

    await blog.save();

    return res.status(200).json({ message: 'Blog updated successfully', blog });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  const { user_id, blog_id } = req.params;

  try {
    const blog = await Blog.findOne({ where: { blog_id, user_id } });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    await blog.destroy();

    return res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
