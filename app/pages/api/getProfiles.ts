// // // // src/pages/api/getProfiles.ts
// // // import { NextApiRequest, NextApiResponse } from 'next';
// // // import { UserProfile } from '../(home)/Utils/db';

// // // export default async (req: NextApiRequest, res: NextApiResponse) => {
// // //   if (req.method === 'GET') {
// // //     try {
// // //       const profiles = await UserProfile.findAll();
// // //       res.status(200).json(profiles);
// // //     } catch (error) {
// // //       res.status(500).json({ error: 'Failed to fetch profiles' });
// // //     }
// // //   } else {
// // //     res.status(405).json({ error: 'Method not allowed' });
// // //   }
// // // };
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { RegisteredUser, UserProfile } from '@/utils/db';
// // import jwt from 'jsonwebtoken';

// // const JWT_SECRET = 'your_jwt_secret'; // Replace with an environment variable

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method !== 'GET') {
// //     return res.status(405).json({ message: 'Method Not Allowed' });
// //   }

// //   const token = req.headers.authorization?.split(' ')[1];
// //   if (!token) {
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   try {
// //     // Verify the token
// //     const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

// //     // Fetch the user's profile
// //     const user = await RegisteredUser.findByPk(decoded.id, {
// //       include: [UserProfile],
// //     });

// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     res.status(200).json({ message: 'Profile fetched successfully', user });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Error fetching profile', error: error.message });
// //   }
// // }
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import RegisteredUser from '../(home)/Utils/models/RegisteredUser';

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === 'GET') {
// //     const { userId } = req.query;

// //     try {
// //       const user = await RegisteredUser.findByPk(userId);

// //       if (!user) {
// //         return res.status(404).json({ message: 'User not found' });
// //       }

// //       return res.status(200).json({ user });
// //     } catch (error) {
// //       return res.status(500).json({ message: 'Failed to fetch profile', error });
// //     }
// //   }

// //   return res.status(405).json({ message: 'Method Not Allowed' });
// // }
// import { NextApiRequest, NextApiResponse } from 'next';
// import RegisteredUser from '../../(home)/Utils/models/RegisteredUser';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     // Extract the userId and ensure it's a string or number
//     const { userId } = req.query;

//     if (!userId || Array.isArray(userId)) {
//       return res.status(400).json({ message: 'Invalid userId' });
//     }

//     try {
//       // Cast userId to number if it's a valid number string
//       const user = await RegisteredUser.findByPk(Number(userId));

//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       return res.status(200).json({ user });
//     } catch (error) {
//       return res.status(500).json({ message: 'Failed to fetch profile', error });
//     }
//   }

//   return res.status(405).json({ message: 'Method Not Allowed' });
// }
