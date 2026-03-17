
export default function MarqueHeading({
  name,
  headingClass
}) {
  return (
    <div className="section-heading" id={headingClass}>
        <h2 className={`${headingClass}-marque flex`}>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
        </h2>
    </div>
  );
}
