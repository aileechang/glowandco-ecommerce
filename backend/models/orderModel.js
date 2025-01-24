import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    items: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    address: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Order Placed',
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    confirmationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'orders'
});

export default Order;