import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../app/config/index';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export { User };
