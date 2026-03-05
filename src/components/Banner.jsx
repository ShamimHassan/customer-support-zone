import vector1 from '../../vector1.png';

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="csz-banner">
      <div className="stat-cards">
        <div className="stat-card stat-progress with-waves">
          <span aria-hidden className="wave wave-left" />
          <span aria-hidden className="wave wave-right" />
          <div className="stat-card-inner">
            <span className="stat-title">In-Progress</span>
            <span className="stat-number">{inProgressCount}</span>
          </div>
        </div>
        <div className="stat-card stat-resolved with-waves">
          <span aria-hidden className="wave wave-left" />
          <span aria-hidden className="wave wave-right" />
          <div className="stat-card-inner">
            <span className="stat-title">Resolved</span>
            <span className="stat-number">{resolvedCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
