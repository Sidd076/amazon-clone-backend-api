import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Siddhant Kothari",
        email: "siddhantkothari076@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Anekant Madrap",
        email: "anekant.madrap@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]