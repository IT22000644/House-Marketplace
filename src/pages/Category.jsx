import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("type", "==", params.category),
          orderBy("timestamp", "desc"),
          limit(10)
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch listings");
      }
    };

    fetchListings();
  });
  return <div>Category</div>;
}

export default Category;
