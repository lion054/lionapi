const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
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
    default: 0
  },
  progress: {
    type: Number
  },
  token_sale_starts: {
    type: Date,
    default: Date.now
  },
  token_sale_ends: {
    type: Date,
    default: Date.now
  },
  project_status: {
    type: String,
    required: true,
    default: "TOKEN SALE"
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