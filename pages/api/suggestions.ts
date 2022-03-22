const data = [
    {
      "first_name": "Dodi",
      "last_name": "Flecknell",
      "email": "dflecknell3@vkontakte.ru",
      "gender": "Female",
      "department": "Product Management",
      "job title": "Senior Editor",
      "country": "Norway",
      "city": "Drammen"
    },
    {
      "first_name": "Marci",
      "last_name": "Clink",
      "email": "mclink4@netscape.com",
      "gender": "Female",
      "department": "Human Resources",
      "job title": "Nuclear Power Engineer",
      "country": "Russia",
      "city": "Nytva"
    },
    {
      "first_name": "Harv",
      "last_name": "Cowitz",
      "email": "hcowitz5@mozilla.org",
      "gender": "Male",
      "department": "Services",
      "job title": "Account Coordinator",
      "country": "Uganda",
      "city": "Entebbe"
    },
    {
      "first_name": "Jaymee",
      "last_name": "Dimblebee",
      "email": "jdimblebeee@arstechnica.com",
      "gender": "Female",
      "department": "Legal",
      "job title": "Engineer IV",
      "country": "Portugal",
      "city": "Ortiga"
    },
    {
      "first_name": "Greta",
      "last_name": "Plackstone",
      "email": "gplackstonef@economist.com",
      "gender": "Female",
      "department": "Accounting",
      "job title": "Computer Systems Analyst IV",
      "country": "China",
      "city": "Kanshi"
    },
  ]

export default (req, res) => {
    res.status(200).json(data);
};
