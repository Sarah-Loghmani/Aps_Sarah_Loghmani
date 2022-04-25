function Greeting() {
  return <span>Hello</span>;
}

function Mentor() {
  return <span>APS</span>;
}

function HelloAPS() {
  return (
    <div>
      <Greeting />
      <Mentor />
    </div>
  );
}

export default HelloAPS;
