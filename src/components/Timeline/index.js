import React from 'react';
import { Heading, Section, TimelinePanel, Userpanel } from './Timeline.styled';
const Timeline = () => {
  return (
    <Section>
      <TimelinePanel>
        <Heading>
          <h1>
            Today
            <span>
              <i className="bi bi-calendar2-date"></i>
            </span>
          </h1>
        </Heading>
        <Userpanel>
          <ul className="timeline_nav">
            <li className="timeline_nav-icons">
              <i className="bi bi-brightness-low"></i>
            </li>
            <li className="timeline_nav-icons">
              <i className="bi bi-person-plus"></i>
            </li>
            <li className="timeline_nav-icons">
              <i className="bi bi-three-dots"></i>
            </li>
          </ul>
        </Userpanel>
      </TimelinePanel>
    </Section>
  );
};

export default Timeline;
