import { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactReduxContext } from 'react-redux';
import Card from "react-bootstrap/Card";
import * as action from '../../store/actions'

import "./BusinessCards.scss";

function BusinessCards() {
  const { store } = useContext(ReactReduxContext);
  const [userMessgaes, setUserMessages] = useState([]);
  const currentStore = store.getState((state)=>state.userData); 

  
  useEffect(() => {
    setUserMessages(currentStore.userData)
    if(!currentStore.userData.length) {
      store.dispatch(action.getData());
    } 

  }, [currentStore]);
  return (
    <>
      <Container className="my-4">
        <h1 className="d-flex justify-content-center">Business Cards</h1>
        <Row xs={1} sm={1} md={2} lg={2}>
          {userMessgaes.map((data, index) => (
            <Col key={index} className="mb-3">
              <Card key={index} className="p-2 business-card">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <span className="fst-italic">
                      {data.first_name} {data.last_name}
                    </span>
                    <span className="ms-2 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="grey"
                        className="bi bi-telephone mx-2 telephone-logo"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>

                      <a
                        href={`mailto:${data.personal_email}`}
                        className="ms-2 me-3"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="grey"
                            stroke="none"
                          >
                            <path
                              d="M595 4310 c-191 -39 -346 -177 -411 -370 -18 -53 -19 -112 -19 -1385
                              l0 -1330 25 -65 c65 -166 184 -280 350 -336 53 -18 127 -19 2020 -19 l1965 0
                              68 23 c163 57 286 183 343 352 18 53 19 112 19 1380 0 1268 -1 1327 -19 1380
                              -56 166 -170 285 -332 348 l-69 27 -1950 1 c-1072 1 -1968 -2 -1990 -6z m3926
                              -338 c39 -20 62 -41 84 -77 l30 -48 0 -1287 0 -1287 -30 -48 c-22 -36 -45 -57
                              -84 -77 l-53 -28 -1908 0 -1908 0 -53 28 c-39 20 -62 41 -84 77 l-30 48 0
                              1287 0 1287 30 48 c22 36 45 57 84 77 l53 28 1908 0 1908 0 53 -28z"
                            />
                            <path
                              d="M895 3346 c-98 -44 -125 -175 -52 -251 35 -36 1261 -774 1379 -830
                              119 -56 185 -70 338 -70 153 0 219 14 338 70 118 56 1344 794 1379 830 100
                              105 8 282 -137 262 -27 -3 -234 -122 -701 -403 -365 -218 -686 -407 -713 -418
                              -73 -29 -259 -29 -332 0 -27 11 -349 200 -714 419 -714 429 -709 426 -785 391z"
                            />
                          </g>
                        </svg>
                      </a>

                      <span className="horizontal-line"></span>
                      <a
                        href="https://www.linkedin.com/company/jyoti-technosoft/"
                        target="blank"
                      >
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
                      </a>
                    </span>
                  </Card.Title>
                  <Card.Subtitle className="d-flex align-items-center mb-2 ">
                    <span>{data.current_title}</span>
                    <li className="list-item">{data.location}</li>
                    <span className="text-muted ms-2"></span>
                  </Card.Subtitle>
                  <hr />
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className="d-flex">
                            <div>
                              <p className="fw-bold fst-italic me-4">
                                Experience
                              </p>
                            </div>
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
                                    <div>
                                      <p>{data?.companyName}</p>
                                    </div>
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
                                    <div>
                                      <p>{data}</p>
                                    </div>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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