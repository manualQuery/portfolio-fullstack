// // // src/pages/api/register.ts
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { RegisteredUser } from '../../../mypotfo-app/src/utils/db';

// // export default async (req: NextApiRequest, res: NextApiResponse) => {
// //   if (req.method === 'POST') {
// //     const { name, firstName, phoneNumber, email, userName, password, confirmPassword } = req.body;
// //     try {
// //       const newUser = await RegisteredUser.create({
// //         name,
// //         firstName,
// //         phoneNumber,
// //         email,
// //         userName,
// //         password,
// //         confirmPassword,
// //       });
// //       res.status(201).json(newUser);
// //     } catch (error) {
// //       res.status(500).json({ error: 'Failed to register user' });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method not allowed' });
// //   }
// // };
// // src/pages/api/register.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// import bcrypt from 'bcrypt';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, firstName, phoneNumber, email, userName, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = await RegisteredUser.create({
//         name,
//         firstName,
//         phoneNumber,
//         email,
//         userName,
//         password: hashedPassword,
//         confirmPassword: hashedPassword,
//       });

//       return res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
//     } catch (error) {
//       return res.status(500).json({ message: 'Registration failed', error });
//     }
//   }

//   return res.status(405).json({ message: 'Method Not Allowed' });
// }
