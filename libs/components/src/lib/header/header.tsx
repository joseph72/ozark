import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="bg-black h-16 items-center flex px-9">
      <div className="logo cursor-pointer">
        <img className="h-16 w-auto" src="assets/images/logo.svg" alt="" />
      </div>
      <div className="navMenu flex flex-1 ml-6 items-center">
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/search-icon.svg" alt="" />
          <span>search</span>
        </a>
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/watchlist-icon.svg" alt="" />
          <span>watchlist</span>
        </a>
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/original-icon.svg" alt="" />
          <span>originals</span>
        </a>
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/movie-icon.svg" alt="" />
          <span>movies</span>
        </a>
        <a href="!" className="flex items-center px-3">
          <img src="assets/images/series-icon.svg" alt="" />
          <span>series</span>
        </a>
      </div>
      <div className=" ">
        <img className="pointer w-12 h-12 rounded-full" src="https://image.shutterstock.com/image-photo/closeup-portrait-handsome-cheerful-african-260nw-1898398108.jpg" alt="" />
      </div>
    </div>
  );
}

export default Header;
