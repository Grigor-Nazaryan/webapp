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
			version: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{ timestamps: true, version: true }
	);

	User.associate = function (models) {};
	return User;
};
