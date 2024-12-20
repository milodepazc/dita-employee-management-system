import sequelize from './database';
import Employee from './models/Employee';

const seed = async () => {
  await sequelize.sync({ force: true });
  await Employee.bulkCreate([
    { name: 'John Doe', email: 'john.doe@example.com', department: 'Engineering', joinDate: new Date('2022-01-15') },
    { name: 'Jane Smith', email: 'jane.smith@example.com', department: 'Marketing', joinDate: new Date('2021-03-20') },
    { name: 'Sam Johnson', email: 'sam.johnson@example.com', department: 'HR', joinDate: new Date('2020-07-01') },
  ]);
  console.log('Database seeded');
};

seed().catch((err) => console.error(err));
