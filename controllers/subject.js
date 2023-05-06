import subject from '../models/subject.js'
import department from '../models/department.js'

export const index = async (req, res) => {
    const subjects = await subject.find({},{ name: 1 }).lean();
    console.log(subjects);


    res.render('subjects/index', { subjects });

};

export const create = async (req, res) => {
    const deparments = await department.find().lean();
    console.log(deparments);
    res.render('subjects/create', { deparments });
};

export const store = async (req, res) => {
    console.log(req.body);
 
    
};