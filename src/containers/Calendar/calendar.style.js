import styled from "styled-components";
const CalendarArea = styled.section`
  background-color: #fff;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;

  .day-of-week,
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 11rem);
  }

  .month-header {
    display: flex;
    justify-content: space-between;

    & > DIV{
      margin-top: 2.75rem;
      margin-bottom: 2.188rem;
    }

    .month-name {
      font-size: 2.813rem;
      font-weight: 600;
    }

    a {
      display: flex;
      align-items: center;
      font-size: 1.938rem;

      img {
        height: 2.188rem;
        margin-right: 1.563rem;
      }
    }
  }

  .calendar {
    width: calc(7 * 11rem);
    margin: 0 auto;
  }

  .date-grid {
    border: 1px solid #EDEDED;
    font-size: 1.438rem;
  }

  .day-of-week {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4.063rem;
    color: #777777;
  }

  .date-grid > DIV {
    height: 10rem;
    padding: 1.563rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid #EDEDED;
    border-left: 1px solid #EDEDED;

    &.has-event {
      color: white;
      background-color: #000000;
    }


    &:nth-child(-n + 6) {
      border-top: 1px solid #EDEDED;
    }
    &:nth-child(odd) {
      border-left: 1px solid #EDEDED;
    }
    &:nth-child(-n + 7) {
      border-top: none;
    }
    &:first-child,
    &:nth-child(7n + 1) {
      border-left: none;
    }
  }
`;

export default CalendarArea;
