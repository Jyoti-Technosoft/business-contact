const userValue = [
  {
    first_name: "Dipesh",
    last_name: "Gandhi",
    current_title: "Full Stack Developer",
    phone_number: "8888888888",
    location: "Pal Area Surat",
    personal_email: "dipesh.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
      {
        companyName: "Javee Infotech ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
    ],
    education: ["Bhagvan Mahavir Collage,Surat"],
  },
  {
    first_name: "Charmi",
    last_name: "Chauhan",
    current_title: "Full Stack Developer",
    phone_number: "8888888888",
    location: "Pal Area Surat",
    personal_email: "charmi.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
      {
        companyName: "Javee Infotech ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
    ],
    education: ["Bhagvan Mahavir Collage,Surat"],
  },
  {
    first_name: "Hetal",
    last_name: "Gandhi",
    current_title: "Business Development Manager",
    phone_number: "8888888888",
    location: "Pal Area Surat",
    personal_email: "hetal.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
    ],
    education: ["Bhagvan Mahavir Collage,Surat"],
  },
  {
    first_name: "Poojan",
    last_name: "Patel",
    current_title: "Full Stack Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "poojan.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
      {
        companyName: "L&T Defence IC",
        imageLink:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png",
      },
    ],
    education: ["Bhagvan Mahavir Collage,Surat"],
  },
  {
    first_name: "Aagam",
    last_name: "Shah",
    current_title: "Sr Java Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "dipesh.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
      {
        companyName: "Javee Infotech ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
    ],
    education: ["Sarvajaink Collage,Surat"],
  },
  {
    first_name: "Prabhat",
    last_name: "Thakur",
    current_title: "Sr Web Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "dipesh.jtdev@gmail.com",
    linkedIn: "sam@123",
    experience: [
      {
        companyName: "Jyoti Technosoft LLP ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
      {
        companyName: "Javee Infotech ",
        imageLink:
          "https://www.jyotitechnosoft.com/assets/images/logo-transprent.png",
      },
    ],
    education: ["SS Agrawal Collage, Navsari"],
  },
];


const userData = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return userValue
    default:
      return state
  }
}

export default userData