import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    bestseller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    date: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: true,
});

export default Product;