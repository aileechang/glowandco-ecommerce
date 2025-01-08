import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgres';
import 'dotenv/config';

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
    subcategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    bestseller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'products',
});

export default Product;