import { useContext } from "react";
import classNames from "classnames";
import NavigationContext from "../context/navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);
  const classes = classNames("text-blue-500", className,
  currentPath === to && activeClassName);

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) return;

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
