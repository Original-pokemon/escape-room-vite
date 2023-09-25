import { Link } from 'react-router-dom';

type LogoProps = {
  currentUrl?: string;
}

export default function Logo({ currentUrl }: LogoProps): React.JSX.Element {
  return currentUrl ? (
    <Link className="logo header__logo" to={currentUrl}>
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  ) : (
    <div className="logo header__logo">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </div>
  );
}
