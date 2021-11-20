// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.hasOne(Category, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Category.belongsTo(Product, {
  foreignKey: "product_id",
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tags",
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
