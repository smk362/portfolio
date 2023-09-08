import ReactWordcloud from 'react-wordcloud';

export default function Home() {

  const options = {
    rotations: 0
  }

  const skills = [
    {
      text: 'Java',
      value: 120
    },
    {
      text: 'Python',
      value: 60
    },
    {
      text: "C++",
      value: 40
    },
    {
      text: "JavaScript",
      value: 80
    },
    {
      text: "TypeScript",
      value: 80
    }
  ]

  return (
    <div id="skills" className="section">
      <div className="header">
        <h1>Skills</h1>
      </div>
      <div>
        <ReactWordcloud words={skills} options={options}></ReactWordcloud>
      </div>
    </div>
  );
}