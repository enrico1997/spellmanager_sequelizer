// Spell models

// The spell has a spell_name attribute of type DataTypes.String
// and a cast attribute that is false by default

module.exports = function(sequelize, DataTypes) {
    var Spell = sequelize.define("Spell", {
        spell_name: DataTypes.STRING,
        cast: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Spell;
};