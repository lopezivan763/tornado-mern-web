import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import mainCover from "../assets/mainCover.jpeg";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const mockReviews = [
        {
          review_id: 1,
          rating: 5,
          review_text:
            "Our car had a leaky tire in January. Who needs that during snowy Winter driving conditions? With almost no waiting time, they removed the tire from our car, found the leak (a nail), and patched it from the inside, the professional way to fix it. After power wrenching the wheel back onto the car, each lug nut was professionally hand-torqued. Very impressive! A very well-deserved $30 was the charge. Thank you very mucho, guys! :-] :-)",
          author_name: "Jim Weber",
          review_datetime_utc: "2024-01-01T00:00:00Z",
        },
        {
          review_id: 2,
          rating: 5,
          review_text:
            "I can't express enough gratitude for Ulises and his incredible team at the Tornado Tire shop. I found myself in a tough spot with two leaks on my tire and needed a last-minute installation. Ulises and his team not only accommodated me with open arms but also displayed the utmost professionalism and efficiency throughout the process. I was in and out of the shop in no time, and to top it off, the affordability of their service was outstanding. I highly recommend this shop for anyone in need of tire services.",
          author_name: "Edgar Guillen",
          review_datetime_utc: "2023-11-01T00:00:00Z",
        },
        {
          review_id: 3,
          rating: 5,
          review_text:
            "Just got my two rear tires replaced in my Audi a3 like an hour ago and man for a last minute search and it being a holiday they did their THING!!!! Ulises is the man, he got me in and out while still attending a line full of customers! Oh yea not to mention the temp. Is in the negatives .",
          author_name: "Jazlynns Dad",
          review_datetime_utc: "2024-01-20T00:00:00Z",
        },
        {
          review_id: 4,
          rating: 5,
          review_text:
            "Always a great experience here. Fair prices and fast service. Been coming here for years and they never disappoint.",
          author_name: "Richard Puquirre",
          review_datetime_utc: "2024-01-14T00:00:00Z",
        },
      ];

      setReviews(mockReviews);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w[1040px] mx-auto relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 "
        style={{ backgroundImage: `url(${mainCover})` }}
      />
      <div className="relative z-10 bg-gradient-to-r from-[#1F2833]/70 via-[#1F2833]/70 to-[#1F2833]/70">
        <div className="text-3xl md:text-5xl flex items-center justify-center font-bold pt-8 md:pt-12 text-white">
          <h1>Customer Reviews</h1>
        </div>
        {loading && <p className="text-white">Loading reviews...</p>}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {reviews.map((review) => (
              <div
                key={review.review_id}
                className="bg-[#09090b] p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center mb-2 ">
                  <FaStar className="text-yellow-500 mr-2" />
                  <FaStar className="text-yellow-500 mr-2" />
                  <FaStar className="text-yellow-500 mr-2" />
                  <FaStar className="text-yellow-500 mr-2" />
                  <FaStar className="text-yellow-500 mr-2" />
                </div>
                <p className="text-white">{review.review_text}</p>
                <p className="text-white">Author: {review.author_name}</p>
                <p className="text-white">
                  Date:{" "}
                  {new Date(review.review_datetime_utc).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
