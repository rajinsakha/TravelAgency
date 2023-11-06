import React from "react";
import { bookings } from "../../constants";
import { BookingItem } from "../../components";
import { heroImage, tripCardImg, overlappingImg } from "../../assets";
import "./Bookings.css";

const Bookings = () => {
  return (
    <section className="section__padding app__wrapper">
      <div className="app__wrapper_info">
        <p className="tagline">Easy and Fast</p>
        <h2 className="title" style={{ textAlign: "left" }}>
          Book Your Next Trip In 3 Easy Steps
        </h2>
        <div className="booking-steps">
          {bookings.map((step) => (
            <BookingItem key={step.title} {...step} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_card">
        <div className="trip-card">
          <img src={tripCardImg} alt="trip-card-image" />
          <h3>Trip To Greece</h3>
          <p>14-29 June | by Rajin Sakha</p>

          <div className="trip-card-icons">
            <div className="card-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_199)">
                  <path
                    d="M13.6545 0.150827C13.2856 0.0428744 4.26257 -0.855475 1.09373 3.42567C-0.30971 5.32223 -0.330792 7.9221 1.0234 11.1525C0.679886 11.8655 0.37916 12.6166 0.134078 13.4091C0.0595667 13.6499 0.194344 13.9052 0.434886 13.9795C0.47973 13.9934 0.525148 14 0.569992 14C0.76446 14 0.94501 13.8744 1.00528 13.6787C3.42049 5.87028 11.2694 2.09267 13.6763 1.13835C13.9106 1.0454 14.2236 0.317405 13.6545 0.150827Z"
                    fill="#84829A"
                  />
                  <path
                    d="M2.47192 12.1298C3.77832 12.6778 5.08453 12.9587 6.29922 12.9587C7.39103 12.9587 8.40923 12.7342 9.28663 12.279C11.0525 11.363 12.1315 9.61081 12.4071 7.21132C12.6878 4.7659 13.0373 3.23416 13.3289 2.29712C10.7336 3.49428 5.16878 6.5974 2.47192 12.1298Z"
                    fill="#84829A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_199">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="card-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_213)">
                  <path
                    d="M13.5008 3.56123e-08C13.4231 -2.92608e-05 13.3465 0.0180173 13.277 0.0527336L9.48809 1.94771L5.20366 0.0432416C5.19666 0.0402533 5.18866 0.039726 5.18116 0.0367378C5.16188 0.0295308 5.14217 0.0235251 5.12216 0.0187497C5.10227 0.0133885 5.08205 0.00919911 5.06166 0.00624017C5.02106 0.00290038 4.98025 0.00290038 4.93967 0.00624017C4.91928 0.00919911 4.89907 0.0133885 4.87917 0.0187497C4.85916 0.0235251 4.83945 0.0295308 4.82017 0.0367378C4.81267 0.039726 4.80467 0.040224 4.79767 0.0432416L0.29774 2.04322C0.117098 2.12343 0.000703131 2.30255 0.000732427 2.50019V13.5C0.000820317 13.6692 0.0863952 13.8268 0.228219 13.919C0.370072 14.0114 0.548986 14.0257 0.7037 13.957L5.00064 12.047L9.29757 13.957C9.30507 13.96 9.31307 13.957 9.32057 13.9615C9.44162 14.0157 9.58058 14.0126 9.69905 13.953C9.70705 13.9496 9.71604 13.953 9.72404 13.9475L13.724 11.9476C13.8935 11.8629 14.0006 11.6896 14.0005 11.5V0.500237C14.0006 0.224088 13.7769 0.000117221 13.5008 3.56123e-08ZM4.50066 11.1751L1.00071 12.7305V2.8252L4.50066 1.26971V11.1751ZM9.00059 12.7305L5.50064 11.1751V1.26971L9.00059 2.82517V12.7305ZM13.0005 11.1911L10.0006 12.691V2.80918L13.0005 1.3092V11.1911Z"
                    fill="#84829A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_213">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="card-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3434 1.24239L6.02589 7.58322C5.95347 7.54126 5.87731 7.50611 5.79839 7.47822L1.62756 6.06656C1.50142 6.03495 1.38947 5.9621 1.30948 5.85958C1.22948 5.75706 1.18604 5.63076 1.18604 5.50072C1.18604 5.37069 1.22948 5.24439 1.30948 5.14187C1.38947 5.03935 1.50142 4.9665 1.62756 4.93489L11.9759 1.25406C12.0435 1.23109 12.1145 1.21927 12.1859 1.21906C12.2393 1.2182 12.2925 1.22608 12.3434 1.24239Z"
                  fill="#84829A"
                />
                <path
                  d="M12.7459 2.02424L9.06503 12.3842C9.02444 12.505 8.94545 12.6091 8.84012 12.6807C8.73478 12.7524 8.6089 12.7875 8.4817 12.7809C8.35303 12.7868 8.22602 12.7499 8.1205 12.6761C8.01498 12.6022 7.93687 12.4955 7.89836 12.3726L6.51003 8.20174C6.48214 8.12282 6.44699 8.04666 6.40503 7.97424L12.7575 1.65674C12.7934 1.77729 12.7893 1.9062 12.7459 2.02424Z"
                  fill="#84829A"
                />
              </svg>
            </div>
          </div>

          <div className="people-num">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.266665 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266665C0.119399 16 0 15.8806 0 15.7333C0 15.5861 0.119399 15.4667 0.266665 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z"
                fill="#84829A"
              />
              <path
                d="M7.46658 3.7334H9.06659C9.21385 3.7334 9.33325 3.8528 9.33325 4.00007V5.60007C9.33325 5.74733 9.21385 5.86673 9.06659 5.86673H7.46658C7.31932 5.86673 7.19992 5.74733 7.19992 5.60007V4.00007C7.19992 3.8528 7.31932 3.7334 7.46658 3.7334ZM7.73325 5.3334H8.79992V4.26673H7.73325V5.3334Z"
                fill="#84829A"
              />
              <path
                d="M7.46658 1.06665H9.06659C9.21385 1.06665 9.33325 1.18605 9.33325 1.33332V2.93332C9.33325 3.08058 9.21385 3.19998 9.06659 3.19998H7.46658C7.31932 3.19998 7.19992 3.08058 7.19992 2.93332V1.33332C7.19992 1.18605 7.31932 1.06665 7.46658 1.06665ZM7.73325 2.66665H8.79992V1.59998H7.73325V2.66665Z"
                fill="#84829A"
              />
              <path
                d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z"
                fill="#84829A"
              />
              <path
                d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z"
                fill="#84829A"
              />
              <path
                d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z"
                fill="#84829A"
              />
              <path
                d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z"
                fill="#84829A"
              />
              <path
                d="M5.06659 12.2666H3.46659C3.31932 12.2666 3.19992 12.1472 3.19992 12V10.4C3.19992 10.2527 3.31932 10.1333 3.46659 10.1333H5.06659C5.21385 10.1333 5.33325 10.2527 5.33325 10.4V12C5.33325 12.1472 5.21385 12.2666 5.06659 12.2666ZM4.79992 10.6666H3.73325V11.7333H4.79992V10.6666Z"
                fill="#84829A"
              />
              <path
                d="M5.06659 9.59989H3.46659C3.31932 9.59989 3.19992 9.48049 3.19992 9.33322V7.73322C3.19992 7.58595 3.31932 7.46655 3.46659 7.46655H5.06659C5.21385 7.46655 5.33325 7.58595 5.33325 7.73322V9.33322C5.33325 9.48049 5.21385 9.59989 5.06659 9.59989ZM4.79992 7.99989H3.73325V9.06655H4.79992V7.99989Z"
                fill="#84829A"
              />
              <path
                d="M5.06659 14.9334H3.46659C3.31932 14.9334 3.19992 14.814 3.19992 14.6667V13.0667C3.19992 12.9194 3.31932 12.8 3.46659 12.8H5.06659C5.21385 12.8 5.33325 12.9194 5.33325 13.0667V14.6667C5.33325 14.814 5.21385 14.9334 5.06659 14.9334ZM4.79992 13.3334H3.73325V14.4H4.79992V13.3334Z"
                fill="#84829A"
              />
              <path
                d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z"
                fill="#84829A"
              />
              <path
                d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z"
                fill="#84829A"
              />
              <path
                d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z"
                fill="#84829A"
              />
            </svg>
            <p className="description">24 People Going</p>
          </div>
        </div>

        <div className="overlapping-card">
            <div className="overlapping-card_img">
                <img src={overlappingImg} alt="overlapping-img" />
            </div>
            <div className="overlapping-card_content">
            <p>Ongoing</p>
            <h3>Trip to Rome</h3>
            <p><span>40%</span>Completed</p>
            <svg width="156" height="5" viewBox="0 0 156 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="156" height="5" rx="2.5" fill="#F5F5F5"/>
  <rect width="73" height="5" rx="2.5" fill="#8A79DF"/>
</svg>
            </div>
           
        </div>



      </div>
    </section>
  );
};

export default Bookings;