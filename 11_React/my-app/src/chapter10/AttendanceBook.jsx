const students = [
  {
    id: '1',
    name: '김재현',
    email: 'geoblo@naver.com'
  },
  {
    id: '2',
    name: '유재석',
    email: 'you@example.com'
  },
  {
    id: '3',
    name: '이이경',
    email: '22kyung@example.com'
  },
  {
    id: '4',
    name: '이미주',
    email: 'joo@example.com'
  },
  {
    id: '5',
    name: '강정모',
    email: 'kangDad@example.com'
  },
  {
    id: '6',
    name: '김민아',
    email: 'siriMom@example.com'
  },
  {
    id: '7',
    name: '최현아',
    email: 'markBooin@example.com'
  },
  {
    id: '8',
    name: '김지연',
    email: 'sungjinBooin@example.com'
  },
  {
    id: '9',
    name: '윤다훈',
    email: 'ReactMaster@maple.land'
  }
];

// 출석부 컴포넌트 
function AttendanceBook() {
  return (
    <ul>
      {/* Quiz: 배열을 반복 렌더링 해보기 */}
      {students.map((student) => (
        <li key={student.id}>
          {/* {student.name} {`(${student.email})`} */}
          {student.name} ({student.email})
        </li>
      ))}


    </ul>
  );
};

export default AttendanceBook;