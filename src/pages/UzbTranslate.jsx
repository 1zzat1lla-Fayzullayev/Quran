import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UzbTranslate() {
  const [translate, setTranslate] = useState(null);
  const param = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://api.alquran.cloud/v1/surah/${param.number}/uz.sodik`)
      .then((res) => {
        // setTranslate(res.data.data.ayahs);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching translation:", error);
        setTranslate([]);
        setLoading(false);
      });
  }, [param.number]);

  return (
    <div>
      {/* {loading ? (
        <p>Loading translation...</p>
      ) : (
        <>
          {translate.map((ayah, index) => (
            <div className="py-[20px] w-[80%] m-auto" key={index}>
              <p className="font-Poppins text-[17px] font-semibold">
                {ayah.numberInSurah}. {ayah.text}
              </p>
            </div>
          ))}
          {translate.length === 0 && <p>Error loading translation</p>}
        </>
      )} */}
    </div>
  );
}

export default UzbTranslate;
