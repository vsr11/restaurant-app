export default function MenuFields({ dataSet }) {
  return (
    <>
      <div>Name: {dataSet?.name}</div>
      <div>Category: {dataSet?.category}</div>
      <div>Description: {dataSet?.description}</div>
      <div>Weight: {dataSet?.weight}</div>
      <div>Price: {dataSet?.price}</div>
    </>
  );
}
