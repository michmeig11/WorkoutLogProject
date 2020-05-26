module.exports = (sequelize, DataTypes) => {
    const WorkOutLog = sequelize.define('workoutlog', {
        Owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Definition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Result: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return WorkOutLog;
}