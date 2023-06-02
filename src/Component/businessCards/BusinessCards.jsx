import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./BusinessCards.scss";

const arrData = [
  {
    first_name: "Dipesh",
    last_name: "Gandhi",
    current_title: "Full Stack Developer",
    phone_number: "8888888888",
    location: "Pal Area Surat",
    personal_email: "sam@gmail.com",
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
    first_name: "Poojan",
    last_name: "Patel",
    current_title: "Full Stack Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "sam@gmail.com",
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
    personal_email: "sam@gmail.com",
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
    first_name: "Mihir",
    last_name: "Prajapati",
    current_title: "React Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "sam@gmail.com",
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
    education: ["SD Jain International Collage, Surat"],
  },
  {
    first_name: "Prabhat",
    last_name: "Thakur",
    current_title: "Sr Web Developer",
    phone_number: "8888888888",
    location: "Adajan Area Surat",
    personal_email: "sam@gmail.com",
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

function BusinessCards() {
  return (
    <>
      <Container className="my-4">
        <h1 className="d-flex justify-content-center">Business Cards</h1>
        <Row xs={1} sm={1} md={2} lg={2}>
          {arrData.map((data, index) => (
            <Col key={index} className="mb-3">
              <Card className="p-2 business-card" >
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <span className="fst-italic">
                      {data.first_name} {data.last_name}
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-envelope ms-2 me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>

                      <span className="horizontal-line"></span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="#0077b5"
                        className="bi bi-linkedin mx-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </span>
                  </Card.Title>
                  <Card.Subtitle className="d-flex align-items-center mb-2 ">
                    <span>{data.current_title}</span>
                    <li
                      className="list-item"
                    >
                      {data.location}
                    </li>
                    <span className="text-muted ms-2"></span>
                  </Card.Subtitle>
                  <hr />
                  <Card.Text>
                    <table>
                      <tbody>
                        <tr>
                          <td className="d-flex">
                            <p className="fw-bold fst-italic me-4">
                              Experience
                            </p>
                          </td>
                          <td>
                            <ul className="custom-unorder-list business-card-list">
                              {data?.experience?.map((data, index) => (
                                <li className="list-item" key={index}>
                                  <span className="d-flex">
                                    <img
                                      className="logo-list me-2"
                                      src={
                                        data?.imageLink
                                          ? data?.imageLink
                                          : "https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png"
                                      }
                                      alt="company-logo"
                                    />
                                    <p>{data?.companyName}</p>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex">
                            <p className="fw-bold fst-italic me-4">Education</p>
                          </td>
                          <td>
                            <ul className="custom-unorder-list business-card-list">
                              {data?.education?.map((data, index) => (
                                <li className="list-item" key={index}>
                                  <span className="d-flex">
                                    <img
                                      className="logo-list me-2"
                                      src="https://images-platform.99static.com//eDFZjB4DfMvSgG6AB-p0Hk2KkyM=/520x86:1420x986/fit-in/500x500/99designs-contests-attachments/107/107200/attachment_107200060"
                                      alt=""
                                    />
                                    <p>{data}</p>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default BusinessCards;
