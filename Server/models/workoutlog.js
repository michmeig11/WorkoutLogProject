module.exports = (sequelize, DataTypes) => {
    const WorkOutLog = sequelize.define('workoutlog', {
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