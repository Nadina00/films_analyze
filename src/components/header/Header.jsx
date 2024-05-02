import { Search } from "../search/Search";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
        <div className={css.boxLogo}>
      <div className={css.logo}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={css.logoImg}
        >
          <path
            d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 2V22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 2V22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 17H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="130"
          height="24"
          viewBox="0 0 130 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.17871 1.67188V23H0.501953V1.67188H4.17871ZM12.8799 11.0029V13.918H3.24121V11.0029H12.8799ZM14.0957 1.67188V4.60156H3.24121V1.67188H14.0957ZM20.4531 7.15039V23H16.9082V7.15039H20.4531ZM16.6738 2.99023C16.6738 2.45312 16.8496 2.00879 17.2012 1.65723C17.5625 1.2959 18.0605 1.11523 18.6953 1.11523C19.3203 1.11523 19.8135 1.2959 20.1748 1.65723C20.5361 2.00879 20.7168 2.45312 20.7168 2.99023C20.7168 3.51758 20.5361 3.95703 20.1748 4.30859C19.8135 4.66016 19.3203 4.83594 18.6953 4.83594C18.0605 4.83594 17.5625 4.66016 17.2012 4.30859C16.8496 3.95703 16.6738 3.51758 16.6738 2.99023ZM28.0996 0.5V23H24.5547V0.5H28.0996ZM35.4971 10.373V23H31.9668V7.15039H35.292L35.4971 10.373ZM34.9258 14.4893L33.7246 14.4746C33.7246 13.3809 33.8613 12.3701 34.1348 11.4424C34.4082 10.5146 34.8086 9.70898 35.3359 9.02539C35.8633 8.33203 36.5176 7.7998 37.2988 7.42871C38.0898 7.04785 39.0029 6.85742 40.0381 6.85742C40.7607 6.85742 41.4199 6.96484 42.0156 7.17969C42.6211 7.38477 43.1436 7.71191 43.583 8.16113C44.0322 8.61035 44.374 9.18652 44.6084 9.88965C44.8525 10.5928 44.9746 11.4424 44.9746 12.4385V23H41.4443V12.7461C41.4443 11.9746 41.3271 11.3691 41.0928 10.9297C40.8682 10.4902 40.541 10.1777 40.1113 9.99219C39.6914 9.79688 39.1885 9.69922 38.6025 9.69922C37.9385 9.69922 37.3721 9.82617 36.9033 10.0801C36.4443 10.334 36.0684 10.6807 35.7754 11.1201C35.4824 11.5596 35.2676 12.0674 35.1309 12.6436C34.9941 13.2197 34.9258 13.835 34.9258 14.4893ZM44.7549 13.5518L43.0996 13.918C43.0996 12.9609 43.2314 12.0576 43.4951 11.208C43.7686 10.3486 44.1641 9.59668 44.6816 8.95215C45.209 8.29785 45.8584 7.78516 46.6299 7.41406C47.4014 7.04297 48.2852 6.85742 49.2812 6.85742C50.0918 6.85742 50.8145 6.96973 51.4492 7.19434C52.0938 7.40918 52.6406 7.75098 53.0898 8.21973C53.5391 8.68848 53.8809 9.29883 54.1152 10.0508C54.3496 10.793 54.4668 11.6914 54.4668 12.7461V23H50.9219V12.7314C50.9219 11.9307 50.8047 11.3105 50.5703 10.8711C50.3457 10.4316 50.0234 10.1289 49.6035 9.96289C49.1836 9.78711 48.6807 9.69922 48.0947 9.69922C47.5479 9.69922 47.0645 9.80176 46.6445 10.0068C46.2344 10.2021 45.8877 10.4805 45.6045 10.8418C45.3213 11.1934 45.1064 11.5986 44.96 12.0576C44.8232 12.5166 44.7549 13.0146 44.7549 13.5518ZM57.4258 15.251V14.9141C57.4258 13.7715 57.5918 12.7119 57.9238 11.7354C58.2559 10.749 58.7344 9.89453 59.3594 9.17188C59.9941 8.43945 60.7656 7.87305 61.6738 7.47266C62.5918 7.0625 63.627 6.85742 64.7793 6.85742C65.9414 6.85742 66.9766 7.0625 67.8848 7.47266C68.8027 7.87305 69.5791 8.43945 70.2139 9.17188C70.8486 9.89453 71.332 10.749 71.6641 11.7354C71.9961 12.7119 72.1621 13.7715 72.1621 14.9141V15.251C72.1621 16.3936 71.9961 17.4531 71.6641 18.4297C71.332 19.4062 70.8486 20.2607 70.2139 20.9932C69.5791 21.7158 68.8076 22.2822 67.8994 22.6924C66.9912 23.0928 65.9609 23.293 64.8086 23.293C63.6465 23.293 62.6064 23.0928 61.6885 22.6924C60.7803 22.2822 60.0088 21.7158 59.374 20.9932C58.7393 20.2607 58.2559 19.4062 57.9238 18.4297C57.5918 17.4531 57.4258 16.3936 57.4258 15.251ZM60.9561 14.9141V15.251C60.9561 15.9639 61.0293 16.6377 61.1758 17.2725C61.3223 17.9072 61.5518 18.4639 61.8643 18.9424C62.1768 19.4209 62.5771 19.7969 63.0654 20.0703C63.5537 20.3438 64.1348 20.4805 64.8086 20.4805C65.4629 20.4805 66.0293 20.3438 66.5078 20.0703C66.9961 19.7969 67.3965 19.4209 67.709 18.9424C68.0215 18.4639 68.251 17.9072 68.3975 17.2725C68.5537 16.6377 68.6318 15.9639 68.6318 15.251V14.9141C68.6318 14.2109 68.5537 13.5469 68.3975 12.9219C68.251 12.2871 68.0166 11.7256 67.6943 11.2373C67.3818 10.749 66.9814 10.3682 66.4932 10.0947C66.0146 9.81152 65.4434 9.66992 64.7793 9.66992C64.1152 9.66992 63.5391 9.81152 63.0508 10.0947C62.5723 10.3682 62.1768 10.749 61.8643 11.2373C61.5518 11.7256 61.3223 12.2871 61.1758 12.9219C61.0293 13.5469 60.9561 14.2109 60.9561 14.9141ZM82.3867 7.15039V9.72852H73.4512V7.15039H82.3867ZM76.0293 3.26855H79.5596V18.6201C79.5596 19.1084 79.6279 19.4844 79.7646 19.748C79.9111 20.002 80.1113 20.1729 80.3652 20.2607C80.6191 20.3486 80.917 20.3926 81.2588 20.3926C81.5029 20.3926 81.7373 20.3779 81.9619 20.3486C82.1865 20.3193 82.3672 20.29 82.5039 20.2607L82.5186 22.9561C82.2256 23.0439 81.8838 23.1221 81.4932 23.1904C81.1123 23.2588 80.6729 23.293 80.1748 23.293C79.3643 23.293 78.6465 23.1514 78.0215 22.8682C77.3965 22.5752 76.9082 22.1016 76.5566 21.4473C76.2051 20.793 76.0293 19.9238 76.0293 18.8398V3.26855ZM92.0986 23.293C90.9268 23.293 89.8672 23.1025 88.9199 22.7217C87.9824 22.3311 87.1816 21.7891 86.5176 21.0957C85.8633 20.4023 85.3604 19.5869 85.0088 18.6494C84.6572 17.7119 84.4814 16.7012 84.4814 15.6172V15.0312C84.4814 13.791 84.6621 12.668 85.0234 11.6621C85.3848 10.6562 85.8877 9.79688 86.5322 9.08398C87.1768 8.36133 87.9385 7.80957 88.8174 7.42871C89.6963 7.04785 90.6484 6.85742 91.6738 6.85742C92.8066 6.85742 93.7979 7.04785 94.6475 7.42871C95.4971 7.80957 96.2002 8.34668 96.7568 9.04004C97.3232 9.72363 97.7432 10.5391 98.0166 11.4863C98.2998 12.4336 98.4414 13.4785 98.4414 14.6211V16.1299H86.1953V13.5957H94.9551V13.3174C94.9355 12.6826 94.8086 12.0869 94.5742 11.5303C94.3496 10.9736 94.0029 10.5244 93.5342 10.1826C93.0654 9.84082 92.4404 9.66992 91.6592 9.66992C91.0732 9.66992 90.5508 9.79688 90.0918 10.0508C89.6426 10.2949 89.2666 10.6514 88.9639 11.1201C88.6611 11.5889 88.4268 12.1553 88.2607 12.8193C88.1045 13.4736 88.0264 14.2109 88.0264 15.0312V15.6172C88.0264 16.3105 88.1191 16.9551 88.3047 17.5508C88.5 18.1367 88.7832 18.6494 89.1543 19.0889C89.5254 19.5283 89.9746 19.875 90.502 20.1289C91.0293 20.373 91.6299 20.4951 92.3037 20.4951C93.1533 20.4951 93.9102 20.3242 94.5742 19.9824C95.2383 19.6406 95.8145 19.1572 96.3027 18.5322L98.1631 20.334C97.8213 20.832 97.377 21.3105 96.8301 21.7695C96.2832 22.2188 95.6143 22.585 94.8232 22.8682C94.042 23.1514 93.1338 23.293 92.0986 23.293ZM104.755 0.5V23H101.21V0.5H104.755ZM114.599 7.15039L107.699 14.7969L103.92 18.6641L102.997 15.6758L105.854 12.1455L110.336 7.15039H114.599ZM111.098 23L105.956 15.5586L108.183 13.083L115.185 23H111.098ZM125.775 19.8213V12.2627C125.775 11.6963 125.673 11.208 125.468 10.7979C125.263 10.3877 124.95 10.0703 124.53 9.8457C124.12 9.62109 123.603 9.50879 122.978 9.50879C122.401 9.50879 121.903 9.60645 121.483 9.80176C121.063 9.99707 120.736 10.2607 120.502 10.5928C120.268 10.9248 120.15 11.3008 120.15 11.7207H116.635C116.635 11.0957 116.786 10.4902 117.089 9.9043C117.392 9.31836 117.831 8.7959 118.407 8.33691C118.983 7.87793 119.672 7.5166 120.473 7.25293C121.273 6.98926 122.172 6.85742 123.168 6.85742C124.359 6.85742 125.414 7.05762 126.332 7.45801C127.26 7.8584 127.987 8.46387 128.515 9.27441C129.052 10.0752 129.32 11.0811 129.32 12.292V19.3379C129.32 20.0605 129.369 20.71 129.467 21.2861C129.574 21.8525 129.726 22.3457 129.921 22.7656V23H126.303C126.137 22.6191 126.005 22.1357 125.907 21.5498C125.819 20.9541 125.775 20.3779 125.775 19.8213ZM126.288 13.3613L126.317 15.5439H123.783C123.129 15.5439 122.553 15.6074 122.055 15.7344C121.557 15.8516 121.142 16.0273 120.81 16.2617C120.478 16.4961 120.229 16.7793 120.062 17.1113C119.896 17.4434 119.813 17.8193 119.813 18.2393C119.813 18.6592 119.911 19.0449 120.106 19.3965C120.302 19.7383 120.585 20.0068 120.956 20.2021C121.337 20.3975 121.796 20.4951 122.333 20.4951C123.056 20.4951 123.686 20.3486 124.223 20.0557C124.77 19.7529 125.199 19.3867 125.512 18.957C125.824 18.5176 125.99 18.1025 126.01 17.7119L127.152 19.2793C127.035 19.6797 126.835 20.1094 126.552 20.5684C126.269 21.0273 125.897 21.4668 125.438 21.8867C124.989 22.2969 124.447 22.6338 123.812 22.8975C123.188 23.1611 122.465 23.293 121.645 23.293C120.609 23.293 119.687 23.0879 118.876 22.6777C118.065 22.2578 117.431 21.6963 116.972 20.9932C116.513 20.2803 116.283 19.4746 116.283 18.5762C116.283 17.7363 116.439 16.9941 116.752 16.3496C117.074 15.6953 117.543 15.1484 118.158 14.709C118.783 14.2695 119.545 13.9375 120.443 13.7129C121.342 13.4785 122.367 13.3613 123.52 13.3613H126.288Z"
            fill="white"
          />
        </svg>
      </div>

      <nav className={css.nav}>
        <Link to={"/"} className={css.link}>
          Home
        </Link>
        <Link
          className={css.link}
          to={
            "https://public.tableau.com/app/profile/nadiya.kovalenko/viz/films_analyze/Dashboard1#1"
          }
        >
          Analyze
        </Link>
      </nav>
      </div>
      <Search className={css.search}/>
    </div>
  );
};
