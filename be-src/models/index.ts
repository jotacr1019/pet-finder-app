import { User } from "./users";
import { Pet } from "./pets";
import { Report } from "./reports";
import { Auth } from "./auth";
import { sequelize } from "./connection";

User.hasMany(Pet);
Pet.belongsTo(User);
Pet.hasMany(Report);
Report.belongsTo(Pet);

export { User, Pet, Report, Auth };

// sequelize.sync({ force: true }).then((res) => {
//     console.log(res);
// });
