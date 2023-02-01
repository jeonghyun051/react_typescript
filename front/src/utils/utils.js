import Socket from 'react-stomp';
import moment from 'moment';

/**
 * 값이 null 또는 undefined 인지 확인 (조건에 맞을 시 true return)
 * @param param value (확인할 값)
 * @example
 * isNullOrUndefined(value)
 */
export const isNullOrUndefined = (value) => {
  try {
    return value ?? false ? false : true;
  } catch (error) {
    console.error(error);
  }
};

/**
 * 값이 null, undefined, 빈값 인지 확인 (조건에 맞을 시 true return)
 * @param param value (확인할 값)
 * @example
 * isNUllOrUndefinedOrNullstr(value)
 */
export const isNUllOrUndefinedOrNullstr = (value) => {
  try {
    return isNullOrUndefined(value) || !value === '' ? true : false;
  } catch (error) {
    console.error(error);
  }
};

/**
 * 연월과 주차를 이용해서 시작일 마지막일 확인
 * @param param {date, week} 날짜, 몇주차
 * @example
 * findWeekByDate('202212','1') // 2022년 12월 1주차의 시작일 마지막일 찾기
 * @return
 * {first: '20221201', last: '20221204' }
 */
export const findWeekByDate = (_date, _week) => {
  try {
    let arr = [];
    let week = 1;

    const YEAR = _date.substring(0, 4);
    const MONTH = _date.substring(4, 6);
    const FIND_WEEK = _week;

    let strFirst = moment(`${YEAR}-${MONTH}-01`).format('d'); // 1일 요일체크 ('0':일,'1':월, '2':화)
    let strLast = new Date(`${YEAR}`, `${MONTH}`, 0).getDate(); // 달의 마지막일

    let numFirst = strFirst * 1;
    let numLast = strLast * 1;

    for (let i = 1; i <= numLast; i++) {
      arr.push({ week: week, date: `${YEAR + MONTH}` + (i < 10 ? '0' : '') + i });

      if (numFirst === 6) {
        numFirst = 0;
        continue;
      }

      if (numFirst === 0) {
        week++;
        numFirst = 0;
      }

      numFirst++;
    }

    const findWeek = arr.filter((e) => e.week === FIND_WEEK * 1);

    const result = {
      first: findWeek[0].date,
      last: findWeek.at(-1).date,
    };

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const SocketConnect = (_roomNo, _onMessage, _ref) => {
  return (
    <Socket
      url='http://localhost:8080/ws-stomp'
      topics={['/sub/chat/room/' + _roomNo]}
      onMessage={(msg) => {
        console.log('socket msg : ', msg);
        _onMessage(msg);
      }}
      ref={_ref}
    />
  );
};
