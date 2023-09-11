import ReactWordcloud from 'react-wordcloud';

export default function Home() {

  const options = {
    rotations: 0
  }

  const size = [400, 400]

  const skills = [
    { text: 'Java', value: 120 },
    { text: 'Python', value: 60 },
    { text: "C++", value: 40 },
    { text: "JavaScript", value: 80 },
    { text: "TypeScript", value: 80 },
    { text: "HTML/CSS", value: 100 },
    { text: "PHP", value: 40 },
    { text: "SQL", value: 40 },
    { text: "Git", value: 100 },
    { text: "ReactJS", value: 110 },
    { text: "Vue.js", value: 80 },
    { text: "Amazon Web Services", value: 90 }
  ]

  return (
    <div id="skills" className="section">
      <div className="header">
        <h1>Skills</h1>
      </div>
      <div className="content">
        <ReactWordcloud
          style={{ background: "green" }}
          words={skills} options={options}
          size={size}
        ></ReactWordcloud>
      </div>
    </div>
  );
}