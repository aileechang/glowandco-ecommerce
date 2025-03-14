import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cartData: {
        type: DataTypes.JSON,
        defaultValue: {},
    },
}, {
    tableName: 'users',
    timestamps: true,
});

export default User;