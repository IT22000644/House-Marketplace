import { Link } from "react-router-dom";
import DeleteIcon from "../assets/svg/deleteIcon.svg?react";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";
import PropTypes from "prop-types";

function ListItem({ listing, id, onDelete }) {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
      </Link>
      <div className="categoryListingDetails">
        <p className="categoryListingLocation">{listing.location}</p>
        <p className="categoryListingName">{listing.name}</p>
        <p className="categoryListingPrice">
          $
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          {listing.type === "rent" && " / Month"}
        </p>
        <div className="categoryListingInfoDiv">
          <img src={bedIcon} alt="bed" />
          <p className="categoryListingInfoText">
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </p>
          <img src={bathtubIcon} alt="bath" />
          <p className="categoryListingInfoText">
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </p>
        </div>
      </div>
      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={() => {
            onDelete(id, listing.name);
          }}
        />
      )}
    </li>
  );
}

ListItem.propTypes = {
  listing: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default ListItem;
