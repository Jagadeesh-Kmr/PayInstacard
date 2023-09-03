import {Component} from 'react'

import Header from '../Header'
// import Footer from '../Footer'

import './index.css'

class Home extends Component {
  tropicalDestinations = () => (
    <div className="first-desc">
      <div>
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693573612/Ellipse_46_o6hydy.png"
          alt="off-circle"
          className="off-circle-img"
        />
        <p className="tropics-para">Discover the beauty of the tropics</p>
        <p className="tropics-hd">
          Tropical Destinations <span className="for-student">For Student</span>
        </p>
        <p className="loren-para">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>

        <button type="button" className="sign-up-button">
          SIGN UP
        </button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693572129/Group_163_yhjijr.png"
          alt="img"
          className="img"
        />
      </div>
    </div>
  )

  tropicalAdventure = () => (
    <div className="tropical-adventure-container">
      <div>
        <div className="profile-details">
          <div className="profile-desc">
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693631267/avatar_c5lpck.png"
                alt="profile img"
                className="profile-img"
              />
            </div>
            <div>
              <p className="profile-name">Jenny Wilson</p>
              <p className="profile-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-desc">
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693632369/avatar_1_xztsst.png"
                alt="profile img"
                className="profile-img"
              />
            </div>
            <div>
              <p className="profile-name">Jenny Wilson</p>
              <p className="profile-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-desc">
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693632481/avatar_2_tebeht.png"
                alt="profile img"
                className="profile-img"
              />
            </div>
            <div>
              <p className="profile-name">Jenny Wilson</p>
              <p className="profile-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="circle-adjustment">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693573612/Ellipse_46_o6hydy.png"
            alt="off-circle"
            className="off-circle-img"
          />
        </div>
        <div className="tropical-adventure-desc">
          <p className="tropical-adventure-para">
            Tropical Adventure <br />
            <span className="for-students">for Students.</span>
            <p className="student-tropical-vacation">
              Student Tropical Vacation: Relax and Recharge
            </p>
            <div className="list-desc">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li> tortor id euismod habitant </li>
              <li>Sed suspendisse id in ultrices</li>
            </div>
            <button type="button" className="explore-more-btn">
              Explore More
            </button>
          </p>
        </div>
      </div>
    </div>
  )

  ourDestination = () => (
    <div className="our-destination-container">
      <p className="our-destinations-para">Our Destinations</p>
      <div className="our-destination-main-container">
        <div className="our-destination-details-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693733800/card-image_qv2xla.png"
            alt="university"
            className="university-img"
          />
          <div className="our-destination-details">
            <h1 className="our-destination-names">Harvard University</h1>
          </div>
          <div className="our-destinations-para">
            <div className="university-names">
              <p>Cambridge, Massachusetts, UK</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693733382/Icons_bpkeip.png"
                alt="icons"
              />
            </div>
          </div>
        </div>

        <div className="our-destination-details-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693735037/card-image_1_qmhrt0.png"
            alt="university"
            className="university-img"
          />
          <div className="our-destination-details">
            <h1 className="our-destination-names">Oxford University</h1>
          </div>
          <div className="our-destinations-para">
            <div className="university-names">
              <p>Oxford, England</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693733382/Icons_bpkeip.png"
                alt="icons"
              />
            </div>
          </div>
        </div>

        <div className="our-destination-details-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693735068/card-image_2_xtwvim.png"
            alt="university"
            className="university-img"
          />
          <div className="our-destination-details">
            <h1 className="our-destination-names">Stanford University</h1>
          </div>
          <div className="our-destinations-para">
            <div className="university-names">
              <p>Stanford, California</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693733382/Icons_bpkeip.png"
                alt="icons"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-container">
        <p>
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693735706/Vector_ftscxy.png"
            alt="arrow"
            className="left-arrow-img"
          />
          <span className="arrow-num">2 / 10</span>
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693735840/Vector_2_ssj1aw.png"
            alt="right-arrow-img"
            className="right-arrow-img"
          />
        </p>
      </div>
    </div>
  )

  studentsDiscount = () => (
    <div className="students-discounts-container">
      <div>
        <div className="circle-adjustment">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693573612/Ellipse_46_o6hydy.png"
            alt="off-circle"
            className="off-circle-img"
          />
        </div>
        <div className="tropical-adventure-desc">
          <p className="tropical-adventure-para">
            <span className="get-off-para">Get 20% off for student</span> <br />
            Student discounts available.
            <br />
            <span className="for-students">
              Get ready for some fun in the sun!
            </span>
            <div className="list-desc">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li> tortor id euismod habitant </li>
              <li>Sed suspendisse id in ultrices</li>
            </div>
            <button type="button" className="explore-more-btn">
              Explore More
            </button>
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693723103/Mask_group_kq3ban.png"
          alt="img"
          className="img"
        />
      </div>
    </div>
  )

  bookNow = () => (
    <div className="book-now-container">
      <div>
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693723164/Group_167_zizvwq.png"
          alt="profile img"
          className="img"
        />
      </div>
      <div className="book-now-form">
        <h1 className="book-now-h1">Book now</h1>
        <p className="book-now-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="book-now-details">
          <div>
            <label htmlFor="city" className="label">
              City
            </label>
          </div>
          <div>
            <input
              type="text"
              id="city"
              className="city-input"
              placeholder="Placeholder"
            />
          </div>
          <div className="double-input-container">
            <div>
              <div>
                <label htmlFor="arrival" className="label">
                  Arrival
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="arrival"
                  className="input"
                  placeholder="10 October"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="departure" className="label">
                  Departure
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="departure"
                  className="input"
                  placeholder="11 October"
                />
              </div>
            </div>
          </div>

          <div className="double-input-container">
            <div>
              <div>
                <label htmlFor="star" className="label">
                  STAR
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="star"
                  className="input"
                  placeholder="+                  4                  -"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="room" className="label">
                  ROOM
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="room"
                  className="input"
                  placeholder="+                  1                  -"
                />
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="book-now-btn">
          BOOK NOW
        </button>
      </div>
    </div>
  )

  testimonials = () => (
    <div className="testimonials-container">
      <h1 className="testimonials-hd">Testimonials</h1>
      <div className="testimonials-details-container">
        <div className="testimonials-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693727502/Frame_6_ppjpu2.png"
            alt=""
            className="profile-img"
          />
          <p className="testimonials-name">Corey Korsgaard</p>
          <p className="testimonials-desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonials-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693728315/Avatar_3_gjsseg.png"
            alt="profile img"
            className="profile-img"
          />
          <p className="testimonials-name">Jakob Aminoff</p>
          <p className="testimonials-desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonials-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1693728375/Frame_6_1_f7vmya.png"
            alt=""
            className="profile-img"
          />
          <p className="testimonials-name">Carla Press</p>
          <p className="testimonials-desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  )

  studentSpecial = () => (
    <div className="student-special-container">
      <h1>
        Student Special: Discounted rates <br />
        on tropical getaways!
      </h1>
      <p>
        Let’s embody your beautiful ideas together, simplify the <br /> way you
        visualize your next big things.
      </p>
      <div className="footer-desc-container">
        <p className="footer-para">Privacy Policy</p>
        <p className="footer-para">Terms of Use</p>
        <p className="footer-para">Sales and Refunds</p>
        <p className="footer-para">Legal</p>
        <p className="footer-para">About</p>
        <p className="footer-para">Schedules</p>
        <p className="footer-para">Pricing</p>
        <p className="footer-para">Membership</p>
        <p className="footer-para">Joins</p>
      </div>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        <div className="tropical-destinations-bg">
          {this.tropicalDestinations()}
        </div>
        <div className="tropical-adventure-bg">{this.tropicalAdventure()}</div>
        <div className="our-destination-bg">{this.ourDestination()}</div>
        <div className="students-discounts-bg">{this.studentsDiscount()}</div>
        <div className="book-now-bg">{this.bookNow()}</div>
        <div className="testimonials-bg">{this.testimonials()}</div>
        <div className="student-special-bg">{this.studentSpecial()}</div>
      </>
    )
  }
}

export default Home
