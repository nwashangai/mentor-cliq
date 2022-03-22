export default (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (email === 'user@gmail.com' && password === '12345') {
            res.status(200).json({ token: '0x176def7496d7bc1cd9041c8d1c9e5aaae3ef8cf2'});
        } else {
            res.status(404).json({ message: 'Invalid email and password'});
        }
      } else {
        res.status(401).json({ message: 'Not found'});
      }
  };