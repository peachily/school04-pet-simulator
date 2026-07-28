export default function HomePage({ onStart }) {
  return (
    <main className="screen screen--intro">
      <section className="intro-card panel">
        <p className="eyebrow">나만의 작은 친구</p>
        <h1>몽글몽글<br />동물 친구</h1>
        <p>함께 놀고, 먹이고, 산책하며<br />행복한 추억을 만들어 봐요.</p>
        <button className="button button--primary start-button" onClick={onStart}>
          시작하기
        </button>
      </section>
    </main>
  );
}
