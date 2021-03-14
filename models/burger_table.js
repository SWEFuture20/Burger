module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
      
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devour: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
  
     
    });
    return Burger;
  };