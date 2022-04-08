import React from "react";
import Container from "common/components/UI/Container";
import CalendarArea from "./calendar.style";
import { CalendarData } from "common/data";
import Link from "next/link";
import Image from "common/components/Image";

const Calendar = ({ row }) => {
  const { months, link } = CalendarData;
  return (
    <>
      <CalendarArea id="main_section">
        <Container className="Container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=team%40skillwallet.id&ctz=America%2FNew_York"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          {/* <div className="calendar">
            {months.map(({ name, days, events }, index) => {
              return (
                <div key={`month-key-${index}`}>
                  <div className="month-header">
                    <div className="month-name">{name}</div>
                    {index == 0 && <div>
                        <Link href={link.href}>
                          <a>
                            <Image alt="calendar-icon" src={link.icon.src}/>
                            <span>{link.text}</span>
                          </a>
                        </Link>
                      </div>}
                  </div>
                  {index === 0 && (
                    <div className="day-of-week">
                      <div>Su</div>
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                    </div>
                  )}
                  <div className="date-grid">
                    {days.map((dayNumber, dayIndex) => {
                      const event = events.find((d) => d.day === dayNumber);
                      return dayNumber !== null ? (
                        <div
                          className={`${!!event ? "has-event" : ""} grid-day`}
                          key={`day-key-${dayIndex}`}
                        >
                          <span>{dayNumber}</span>
                          {event && <span>{event.name}</span>}
                        </div>
                      ) : (
                        <div key={`day-key-${dayIndex}`} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div> */}
        </Container>
      </CalendarArea>
    </>
  );
};

export default Calendar;
