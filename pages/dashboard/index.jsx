import { Button, Container, Form, InputGroup, Navbar, Table } from "react-bootstrap";
import Image from "next/image";

import TempThumbnail from "../../public/temp-thumbnail.png";
import { BsYoutube, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { MdOutlineSentimentVerySatisfied, MdOutlineSentimentNeutral, MdOutlineSentimentVeryDissatisfied } from "react-icons/md";

function SphexNavbar() {
  return (
    <Navbar bg="light" variant="light" className="px-4 py-2">
      <Navbar.Brand>Datasphex AI</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a>Asım Sinan Yüksel</a>
        </Navbar.Text>
        <Button variant="danger" className="ms-2">Çıkış Yap</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

const InputArea = () => {
  return (
    <div className="d-flex flex-row gap-4">
      <InputGroup>
        <InputGroup.Text id="basic-addon3">youtube.com/watch?v=</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Button className="w-25">
        <h6 className="mt-2">Analiz Et</h6>
      </Button>
    </div>
  );
};

const InfoArea = () => {
  return (
    <div className="bg-light d-flex flex-row gap-4 px-2 py-4">
      <div className="mx-2">
        <Image width={360} height={240} alt="yt-thumbnail" src={TempThumbnail} style={{ objectFit: "cover" }} />
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column align-items-start gap-1">
          <h5>GÜLERSEN, KAYBEDERSİN! w/ Gökhan Özoğuz, Ferit Aktuğ, Özkan Ayalp, Okan Çabalar</h5>
          <div className="bg-danger rounded-2 w-25 d-flex flex-row align-items-center justify-content-center  py-1 gap-2 text-light">
            <BsYoutube />
            <h6 className="mt-1">Soğuk Savaş</h6>
          </div>
        </div>
        <div>
          <div>
            <BsEyeFill className="d-inline me-2" />
            <h6 className="d-inline">110.458 Views</h6>
          </div>
          <div className="d-flex flex-row my-2 gap-4">
            <div className="d-flex flex-row gap-1">
              <BsFillHandThumbsUpFill />
              <h6>655 Like</h6>
            </div>
            <div className="d-flex flex-row gap-1">
              <BsFillHandThumbsDownFill />
              <h6>71 Dislike</h6>
            </div>
          </div>
        </div>
        <div>
          <p className="d-inline">Published on 12.03.2022</p>
        </div>
      </div>
    </div>
  );
};

const CommentArea = () => {
  const fakeData = [
    {
      username: "Görkem Durgun",
      comment: "Muhteşem olmuş. Tebrikler.",
      like: "7",
      dislike: "1",
      positiveRate: "%92",
      negativeRate: "%8",
    },
    {
      username: "Doğukan Çıtak",
      comment: "Fena değildi, daha iyi olabilirdi",
      like: "5",
      dislike: "2",
      positiveRate: "%71",
      negativeRate: "%29",
    },
    {
      username: "Tahsin Gül",
      comment: "Biraz daha iyileştirilmesi gerekiyor",
      like: "3",
      dislike: "3",
      positiveRate: "%50",
      negativeRate: "%50",
    },
    {
      username: "Ceyhun Boran",
      comment: 'Çok kötüydü, iğrenç bir videoydu. "Bir daha böyle bir şey yapma"',
      like: "1",
      dislike: "5",
      positiveRate: "%16",
      negativeRate: "%84",
    },
  ];

  return (
    <div>
      <Table variant="light" borderless hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Kullanıcı Adı</th>
            <th>Yorum</th>
            <th>Like</th>
            <th>Dislike</th>
            <th>Olumluluk Oranı</th>
            <th>Olumsuzluk Oranı</th>
            <th>Genel Durum</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((data, index) => (
            <tr key={index}>
              <td>
                <h6
                  className="fw-bold"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  {index + 1}
                </h6>
              </td>
              <td>
                <h6
                  className="fw-bold"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  @{data.username}
                </h6>
              </td>
              <td>{data.comment}</td>
              <td>{data.like}</td>
              <td>{data.dislike}</td>
              <td>
                <h6 className="text-success">{data.positiveRate}</h6>
              </td>
              <td>
                <h6 className="text-danger">{data.negativeRate}</h6>
              </td>
              <td>
                {data.positiveRate === data.negativeRate ? (
                  <MdOutlineSentimentNeutral className="text-warning" size={28} />
                ) : data.positiveRate > data.negativeRate ? (
                  <MdOutlineSentimentVerySatisfied className="text-success" size={28} />
                ) : (
                  <MdOutlineSentimentVeryDissatisfied className="text-danger" size={28} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6f6",
      }}
    >
      <SphexNavbar />
      <Container className="d-grid gap-4 py-4 px-4">
        <InputArea />
        <InfoArea />
        <CommentArea />
      </Container>
    </div>
  );
};

export default Dashboard;
