import React, { Component } from 'react';
import './mentorsPageHeader.styles.scss';

class MentorsPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'all',
    };
  }

  setActiveTab = (tabName) => {
    this.setState({ active: tabName });
  };

  render() {
    return (
      <>
        <header className="mentorsPageHeader px-2">
          <h2>Our Mentors</h2>
          <div className="links">
            <div
              className={`link ${this.state.active === 'all' ? 'active' : ''}`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('all');
                this.props.setFilter('');
              }}
            >
              All
            </div>
            <div
              className={`link ${
                this.state.active === 'frontend' ? 'active' : ''
              }`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('frontend');
                this.props.setFilter('frontend');
              }}
            >
              Frontend
            </div>
            <div
              className={`link ${
                this.state.active === 'backend' ? 'active' : ''
              }`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('backend');
                this.props.setFilter('backend');
              }}
            >
              Backend
            </div>
            <div
              className={`link ${
                this.state.active === 'ui/ux' ? 'active' : ''
              }`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('ui/ux');
                this.props.setFilter('ui/ux');
              }}
            >
              UI/UX
            </div>
            <div
              className={`link ${
                this.state.active === 'mobile' ? 'active' : ''
              }`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('mobile');
                this.props.setFilter('mobile');
              }}
            >
              Mobile
            </div>
            <div
              className={`link ${
                this.state.active === 'machine' ? 'active' : ''
              }`}
              role="button"
              aria-roledescription="button"
              onClick={() => {
                this.setActiveTab('machine');
                this.props.setFilter('machine');
              }}
            >
              Machine Learning
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default MentorsPageHeader;
