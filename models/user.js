export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			userId: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			balance: DataTypes.INTEGER,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{}
	);
	User.associate = function (models) {};
	return User;
};
