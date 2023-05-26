const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  project_name: {
    type: String,
    required: true
  },
  coin_name: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  roadmap: {
    type: String,
    required: true
  },
  amount_for_sale: {
    type: Number,
    required: true
  },
  participants: {
    type: Number,
    required: true
  },
  token_price: {
    type: Number,
    required: true
  },
  total_raised: {
    type: Number,
    required: true
  },
  progress: {
    type: Number,
    required: true
  },
  token_sale_starts: {
    type: Date,
    required: true
  },
  token_sale_ends: {
    type: Date,
    required: true
  },
  project_status: {
    type: String,
    required: true
  },
  thumb: {
    type: String,
    required: true
  },
  banner_image: {
    type: String,
    required: true
  },
  date_modified: {
    type: Date,
    default: Date.now
  },
  date_created: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('project', projectSchema);