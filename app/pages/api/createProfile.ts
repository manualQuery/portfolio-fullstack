// import { NextApiRequest, NextApiResponse } from 'next';
// import RegisteredUser from '../../(home)/Utils/models/RegisteredUser';
// import bcrypt from 'bcrypt';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { userName, password } = req.body;

//     try {
//       const user = await RegisteredUser.findOne({ where: { userName } });

//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }

//       return res.status(200).json({ message: 'Login successful', userId: user.id });
//     } catch (error) {
//       return res.status(500).json({ message: 'Login failed', error });
//     }
//   }

//   return res.status(405).json({ message: 'Method Not Allowed' });
// }
