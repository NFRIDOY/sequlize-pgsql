import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../app/config/index';

class Blog extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

Blog.init(
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
        modelName: 'Blog',
        freezeTableName: true,
    }
);

export { Blog };
