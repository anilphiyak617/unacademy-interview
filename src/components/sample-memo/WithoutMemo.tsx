interface propTypes {
  value: number;
}

export default function FC<propTypes>({ value }) {
  console.log('component without memo re-rendered');
  return (
    <div>
      <h1> {value} </h1>
    </div>
  );
}
