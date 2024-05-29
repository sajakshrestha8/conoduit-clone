function Banner(porps) {
  return (
    <>
      <div className={porps.css}>
        <div className={porps.headingCss}>{porps.heading}</div>
        <div className={porps.descCss}>{porps.desc}</div>
      </div>
    </>
  );
}

export default Banner;
