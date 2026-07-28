export default function RequestMessage({ request }) {
  return (
    <>
      {request.before}
      <strong className="request-highlight">{request.highlight}</strong>
      {request.after}
    </>
  );
}
