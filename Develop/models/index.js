// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products  Has Many: Product holds foreign key
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (
Product.belongsToMany(
  Tag,
  { through: ProductTag },
  {
    foreignKey: "ProductTag_id",
  }
);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(
  Product,
  { through: ProductTag },
  {
    foreignKey: "Tag_id",
  }
);
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
