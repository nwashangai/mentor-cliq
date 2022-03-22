export default (req, res) => {
  res.status(200).json({
    "first_name": "Elie",
    "last_name": "Farish",
    "email": "efarishj@chron.com",
    "gender": "Female",
    "department": "Human Resources",
    "job title": "Compensation Analyst",
    "country": "China",
    "city": "Changfeng"
  });
};
