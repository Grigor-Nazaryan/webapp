export const up = async (queryInterface, Sequelize) => {
	const { INTEGER, DATE } = Sequelize;
	await queryInterface.createTable("Users", {
		userId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: INTEGER,
		},
		balance: {
			type: INTEGER,
			defaultValue: 10000,
			allowNull: false,
		},
		version: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		createdAt: {
			allowNull: false,
			type: DATE,
		},
		updatedAt: {
			allowNull: false,
			type: DATE,
		},
	});
	await queryInterface.bulkInsert("Users", [
		{
			balance: 10000,
			version: 0,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	]);
};

export const down = async (queryInterface) => {
	await queryInterface.dropTable("Users");
};
