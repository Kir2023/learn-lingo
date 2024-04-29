/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import {
  Reviewer,
  ReviewerComment,
  ReviewerExperience,
  ReviewerImg,
  ReviewerItem,
  ReviewerList,
  ReviewerName,
  ReviewerRating,
  ReviewerWrapper,
} from "./Teachers.styled";

export const ReviewerComponent = ({ experience, reviews }) => {
  return (
    <Reviewer>
      <ReviewerExperience>{experience}</ReviewerExperience>
      <ReviewerList>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <ReviewerItem key={index}>
            <ReviewerWrapper>
              <ReviewerImg
                src="https://e7.pngegg.com/pngimages/893/852/png-clipart-customer-review-computer-icons-customer-satisfaction-others-white-text-thumbnail.png"
                alt="reviews"
                width="44"
                height="44"
                loading="lazy"
              />
              <div>
                <ReviewerName>{reviewer_name}</ReviewerName>
                <ReviewerRating>
                  <span>
                    <FaStar />
                  </span>
                  {reviewer_rating}
                </ReviewerRating>
              </div>
            </ReviewerWrapper>
            <ReviewerComment>{comment}</ReviewerComment>
          </ReviewerItem>
        ))}
      </ReviewerList>
    </Reviewer>
  );
};
