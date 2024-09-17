import mongoose from "mongoose";

// SubCategory Schema
const subCategorySchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true
    },
    color: {
      type: String,
      required: true,
      trim: true
    },
    size: {
      type: String,
      required: true,
      trim: true
    },
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true
    },
    sku: {
      type: String,  
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    images: {
      type: [String], 
      required: true
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: ['men', 'women', 'kids']
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      default: null
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
      default: null
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

// Export both models using named exports
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Product = mongoose.model('Product', productSchema);

export { SubCategory, Product };
