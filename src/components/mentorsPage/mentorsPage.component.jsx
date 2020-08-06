import React from 'react';
import './mentorsPage.styles.scss';
import MentorsPageHeader from '../mentorsPageHeader/mentorsPageHeader.component';
import MentorCard from '../mentorCard/mentorCard.component';
import { Jumbotron } from 'react-bootstrap';
import Banner from '../landing/Banner';

class MentorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mentors: [
        {
          name: 'Oladele Motunrayo',
          track: 'Frontend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679589/mentor-photos/mentor1_ropffb.png',
        },
        {
          name: 'Oladele Motunrayo',
          track: 'Backend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679589/mentor-photos/mentor2_epugyz.png',
        },
        {
          name: 'Oladele Motunrayo',
          track: 'Mobile Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor3_dn6xjg.png',
        },
        {
          name: 'Oladele Motunrayo',
          track: 'UI/UX Design',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor4_koqwuf.png',
        },
        {
          name: 'Jeff Ogah',
          track: 'Frontend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679590/mentor-photos/mentor5-jeff_uzijat.png',
        },
        {
          name: 'Motunrayo Da-costa',
          track: 'Frontend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor6-motun_gcbjjg.png',
        },
        {
          name: 'Tomisin Lalude',
          track: 'Frontend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679590/mentor-photos/mentor7-tomisin_qyxwvz.png',
        },
        {
          name: 'Obinna Okoh',
          track: 'UI/UX Design',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor8-obinna_hb41bm.png',
        },
        {
          name: 'Patrick Aziken',
          track: 'UI/UX Design',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor9-patrick_a8w4jl.png',
        },
        {
          name: 'Asoluka Austin',
          track: 'Backend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679589/mentor-photos/mentor10-austin_nnxzkb.png',
        },
        {
          name: 'Chiamaka Osumgba',
          track: 'Backend Developer',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679588/mentor-photos/mentor11-chiamaka_lb3joc.png',
        },
        {
          name: 'Ihenoye Chukwuemeka',
          track: 'UI/UX Design',
          twitterUrl: '#',
          linkedinUrl: '#',
          imageUrl:
            'https://res.cloudinary.com/ts-i/image/upload/v1596679589/mentor-photos/mentor12-emeka_ugjmg8.png',
        },
      ],
      filter: '',
    };
  }

  setFilter = (newFilter) => {
    this.setState({ ...this.state, filter: newFilter });
  };

  render() {
    const { mentors, filter } = this.state;
    const filteredMentors = mentors.filter((mentor) =>
      mentor.track.toLowerCase().includes(filter.toLowerCase())
    );
    let key = 1;
    return (
      <>
        <div className="mentors-list">
          <Jumbotron fluid>
            <h1>MENTORS</h1>
            <p>
              Our Mentors have vast experience in the technology field of their
              choice.
            </p>
          </Jumbotron>
          <div className="container">
            <MentorsPageHeader setFilter={this.setFilter} />
            <div className="row">
              {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor) => (
                  <div className="col-xs-6 col-sm-6 col-lg-3 col-md-4">
                    <MentorCard
                      className="mx-auto"
                      name={mentor.name}
                      track={mentor.track}
                      twitterUrl={mentor.twitterUrl}
                      linkedinUrl={mentor.linkedinUrl}
                      imageUrl={mentor.imageUrl}
                      key={`mentor${key++}`}
                    />
                  </div>
                ))
              ) : (
                <div className="mx-auto my-4">
                  <h2 className="text-center">No Mentors Available.</h2>
                </div>
              )}
            </div>
            <Banner />
          </div>
        </div>
      </>
    );
  }
}

export default MentorsList;
