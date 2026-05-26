import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase";

const Verify = () => {
  const { certificateId: urlCertificateId } = useParams();

  const [certificateId, setCertificateId] = useState(
    urlCertificateId || ""
  );

  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const verifyCertificate = async (id) => {
    if (!id) return;

    setLoading(true);
    setSearched(true);

    try {
      const certificatesRef = collection(db, "certificates");

      const q = query(
        certificatesRef,
        where("certificateId", "==", id)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();

        setCertificateData(docData);
      } else {
        setCertificateData(null);
      }
    } catch (error) {
      console.error("Verification Error:", error);
      setCertificateData(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (urlCertificateId) {
      verifyCertificate(urlCertificateId);
    }
  }, [urlCertificateId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCertificate(certificateId);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#38bdf8",
          }}
        >
          Certificate Verification
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) =>
              setCertificateId(e.target.value)
            }
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              background: "#38bdf8",
              color: "#0f172a",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Verify Certificate
          </button>
        </form>

        {loading && (
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Verifying...
          </p>
        )}

        {!loading && searched && certificateData && (
          <div
            style={{
              marginTop: "30px",
              background: "#0f172a",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #22c55e",
            }}
          >
            <h2
              style={{
                color: "#22c55e",
                marginBottom: "20px",
              }}
            >
              ✅ VERIFIED CERTIFICATE
            </h2>

            <p>
              <strong>Student Name:</strong>{" "}
              {certificateData.studentName}
            </p>

            <p>
              <strong>Certificate ID:</strong>{" "}
              {certificateData.certificateId}
            </p>

            <p>
              <strong>Event:</strong>{" "}
              {certificateData.eventName}
            </p>

            <p>
              <strong>Issue Date:</strong>{" "}
              {certificateData.issueDate}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {certificateData.status}
            </p>
          </div>
        )}

        {!loading && searched && !certificateData && (
          <div
            style={{
              marginTop: "30px",
              background: "#450a0a",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid red",
            }}
          >
            <h2 style={{ color: "#f87171" }}>
              ❌ Certificate Not Found
            </h2>

            <p>
              Please check the Certificate ID and try
              again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;