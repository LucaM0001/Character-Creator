import classes from "./TitreH1.module.css";

const titreh1 = (props) => {
  const classCss = `${classes.font_family} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
  return <h1 className={classCss}>{props.children}</h1>;
};

export default titreh1;
