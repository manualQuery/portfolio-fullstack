// import { NextApiRequest, NextApiResponse } from "next";
// import axiosCreate from "../../(home)/Utils/axiosClient"; // Adjust path as necessary

// const handleRegistration = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     debugger;
//     const { lastname, firstname, phonenumber, email, username, password } =
//       req.body;

//     const registerResponse = await axiosCreate.post("http://localhost:5000/user/register", {
//       name: lastname,
//       firstName: firstname,
//       phoneNumber: phonenumber,
//       email,
//       userName: username,
//       password,
//     });

//     res.status(201).json(registerResponse.data);
//   } catch (err: any) {
//     console.error("Error during registration:", err.response?.data || err.message);
//     res
//       .status(err.response?.status || 500)
//       .json({ message: err.response?.data?.message || "Internal Server Error" });
//   }
// };

// export default handleRegistration;

import { NextResponse } from "next/server";
import axiosCreate from "../Utils/axiosClient"; // Adjust path as necessary

// Named export for the POST handler
export async function POST(req: Request) {
  try {
    debugger;
    const body = await req.json(); // Parse the incoming JSON request body
    const { lastname, firstname, phonenumber, email, username, password, confirmpassword } = body;

    // Check if all required fields are present
    if (!lastname || !firstname || !phonenumber || !email || !username || !password) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    // Log the data for debugging
    console.log("Registration data received:", body);

    // Call the external API
    const registerResponse = await axiosCreate.post("http://localhost:5000/user/register", {
      lastname: lastname,
      firstname: firstname,
      phonenumber: phonenumber,
      email,
      username: username,
      password,
      confirmpassword:confirmpassword,
    });

    // Return the response from the external API
    return NextResponse.json(registerResponse.data, { status: 201 });
  } catch (error: any) {
    console.error("Error during registration:", error.response?.data || error.message);

    // Handle errors from external API
    if (error.response) {
      return NextResponse.json(
        { message: error.response.data.message || "External API Error" },
        { status: error.response.status || 500 }
      );
    }

    // Return a generic error if there's no response
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
