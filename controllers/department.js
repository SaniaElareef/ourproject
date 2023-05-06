import department from '../models/department.js'

export const index = async (req, res) => {
    const departments = await department.find({}, { name: 1 }).lean();
    console.log(departments);


    res.render('departments/index', { departments });

};