import Svg, { ClipPath, G, Path, Rect } from "react-native-svg";

const activeColor = "#2F2F2F";
const inActiveColor = "#848282";

const Icons = {
  getClockIcon: (active: boolean = false) => {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M23 12C23 18.072 18.072 23 12 23C5.928 23 1 18.072 1 12C1 5.928 5.928 1 12 1C18.072 1 23 5.928 23 12Z"
          stroke={active ? activeColor : inActiveColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.081 15.4981L12.671 13.4631C12.077 13.1111 11.593 12.2641 11.593 11.5711V7.06116"
          stroke={active ? activeColor : inActiveColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  },

  getLocationIcon: (active: boolean = false) => {
    return (
      <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <Path
          d="M20.7368 5.53487L14.1194 0.904998C12.3157 -0.35874 9.54693 -0.289809 7.8122 1.05435L2.05645 5.54636C0.907594 6.44247 0 8.28063 0 9.72813V17.6552C0 20.5848 2.37813 22.9744 5.3077 22.9744H17.6923C20.6219 22.9744 23 20.5963 23 17.6667V9.87748C23 8.32659 22.0005 6.41949 20.7368 5.53487ZM12.3616 18.379C12.3616 18.85 11.971 19.2406 11.5 19.2406C11.029 19.2406 10.6383 18.85 10.6383 18.379V14.9324C10.6383 14.4614 11.029 14.0708 11.5 14.0708C11.971 14.0708 12.3616 14.4614 12.3616 14.9324V18.379Z"
          fill={active ? activeColor : inActiveColor}
        />
      </Svg>
    );
  },

  getUserIcon: (active: boolean = false) => {
    return (
      <Svg width="19" height="24" viewBox="0 0 19 24" fill="none">
        <Path
          d="M9.08495 11.1862C6.00145 11.1862 3.49185 8.6766 3.49185 5.5931C3.49185 2.5096 6.00145 0 9.08495 0C12.1685 0 14.6781 2.5096 14.6781 5.5931C14.6781 8.6766 12.1685 11.1862 9.08495 11.1862ZM9.08495 1.45907C6.8088 1.45907 4.95092 3.31695 4.95092 5.5931C4.95092 7.86925 6.8088 9.72713 9.08495 9.72713C11.3611 9.72713 13.219 7.86925 13.219 5.5931C13.219 3.31695 11.3611 1.45907 9.08495 1.45907Z"
          fill={active ? activeColor : inActiveColor}
        />
        <Path
          d="M17.4407 20.9133C17.0419 20.9133 16.7112 20.5826 16.7112 20.1838C16.7112 16.8279 13.2873 14.1043 9.08518 14.1043C4.88301 14.1043 1.45907 16.8279 1.45907 20.1838C1.45907 20.5826 1.12835 20.9133 0.729535 20.9133C0.330723 20.9133 0 20.5826 0 20.1838C0 16.0303 4.07566 12.6453 9.08518 12.6453C14.0947 12.6453 18.1702 16.0303 18.1702 20.1838C18.1702 20.5826 17.8395 20.9133 17.4407 20.9133Z"
          fill={active ? activeColor : inActiveColor}
        />
        <Path
          d="M17.4407 19.2526C17.0419 19.2526 16.7112 19.5834 16.7112 19.9822C16.7112 23.338 11.3879 22.7837 9.08518 22.7837C6.78246 22.7837 1.45907 23.338 1.45907 19.9822C1.45907 19.5834 1.12835 19.2526 0.729535 19.2526C0.330723 19.2526 0 19.5834 0 19.9822C0 24.1357 4.07566 23.9995 9.08518 23.9995C14.0947 23.9995 18.1702 24.1357 18.1702 19.9822C18.1702 19.5834 17.8395 19.2526 17.4407 19.2526Z"
          fill={active ? activeColor : inActiveColor}
        />
      </Svg>
    );
  },
  getHeartIcon: (active: boolean = false) => {
    return (
      <Svg width="24" height="22" viewBox="0 0 24 22" fill="none">
        <Path
          d="M12 21.5442C11.654 21.5442 11.3191 21.4995 11.04 21.3991C6.77581 19.9367 0 14.746 0 7.07721C0 3.17023 3.15907 0 7.04372 0C8.93023 0 10.694 0.736744 12 2.05395C13.306 0.736744 15.0698 0 16.9563 0C20.8409 0 24 3.18139 24 7.07721C24 14.7572 17.2242 19.9367 12.96 21.3991C12.6809 21.4995 12.346 21.5442 12 21.5442ZM7.04372 1.67442C4.08558 1.67442 1.67442 4.09674 1.67442 7.07721C1.67442 14.7014 9.00837 18.9433 11.587 19.8251C11.7879 19.8921 12.2233 19.8921 12.4242 19.8251C14.9916 18.9433 22.3367 14.7126 22.3367 7.07721C22.3367 4.09674 19.9256 1.67442 16.9674 1.67442C15.2707 1.67442 13.6967 2.46698 12.6809 3.84C12.3684 4.26419 11.654 4.26419 11.3414 3.84C10.3033 2.45581 8.74047 1.67442 7.04372 1.67442Z"
          fill={active ? activeColor : inActiveColor}
        />
        <Path
          d="M19 8.5C19 7 18 5.5 17 5"
          stroke={active ? activeColor : inActiveColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  },
  getSettingsIcon: (width = 24, height = 22, fill = "#888888") => {
    return (
      <Svg width={width} height={height} viewBox="0 0 24 22" fill="none">
        <Path
          d="M23.1628 5.58143H16.4651C16.0075 5.58143 15.6279 5.2019 15.6279 4.74422C15.6279 4.28655 16.0075 3.90701 16.4651 3.90701H23.1628C23.6205 3.90701 24 4.28655 24 4.74422C24 5.2019 23.6205 5.58143 23.1628 5.58143Z"
          fill={fill}
        />
        <Path
          d="M5.30233 5.58143H0.837209C0.379535 5.58143 0 5.2019 0 4.74422C0 4.28655 0.379535 3.90701 0.837209 3.90701H5.30233C5.76 3.90701 6.13953 4.28655 6.13953 4.74422C6.13953 5.2019 5.76 5.58143 5.30233 5.58143Z"
          fill={fill}
        />
        <Path
          d="M9.7675 9.48837C7.15541 9.48837 5.02332 7.35628 5.02332 4.74419C5.02332 2.13209 7.15541 0 9.7675 0C12.3796 0 14.5117 2.13209 14.5117 4.74419C14.5117 7.35628 12.3796 9.48837 9.7675 9.48837ZM9.7675 1.67442C8.07076 1.67442 6.69773 3.04744 6.69773 4.74419C6.69773 6.44093 8.07076 7.81395 9.7675 7.81395C11.4642 7.81395 12.8373 6.44093 12.8373 4.74419C12.8373 3.04744 11.4642 1.67442 9.7675 1.67442Z"
          fill={fill}
        />
        <Path
          d="M23.1628 17.8605H18.6977C18.2401 17.8605 17.8605 17.4809 17.8605 17.0233C17.8605 16.5656 18.2401 16.1861 18.6977 16.1861H23.1628C23.6205 16.1861 24.0001 16.5656 24.0001 17.0233C24.0001 17.4809 23.6205 17.8605 23.1628 17.8605Z"
          fill={fill}
        />
        <Path
          d="M7.53488 17.8605H0.837209C0.379535 17.8605 0 17.4809 0 17.0233C0 16.5656 0.379535 16.1861 0.837209 16.1861H7.53488C7.99256 16.1861 8.37209 16.5656 8.37209 17.0233C8.37209 17.4809 7.99256 17.8605 7.53488 17.8605Z"
          fill={fill}
        />
        <Path
          d="M14.2325 21.7674C11.6204 21.7674 9.48831 19.6353 9.48831 17.0232C9.48831 14.4111 11.6204 12.2791 14.2325 12.2791C16.8446 12.2791 18.9767 14.4111 18.9767 17.0232C18.9767 19.6353 16.8446 21.7674 14.2325 21.7674ZM14.2325 13.9535C12.5358 13.9535 11.1627 15.3265 11.1627 17.0232C11.1627 18.72 12.5358 20.093 14.2325 20.093C15.9292 20.093 17.3023 18.72 17.3023 17.0232C17.3023 15.3265 15.9292 13.9535 14.2325 13.9535Z"
          fill={fill}
        />
      </Svg>
    );
  },
  getLikeIcon: (fill = "white") => {
    return (
      <Svg width="20" height="22" viewBox="0 0 22 20" fill="none">
        <Path
          d="M11 19.7488C10.6828 19.7488 10.3758 19.7079 10.12 19.6158C6.21116 18.2753 0 13.5172 0 6.48744C0 2.90605 2.89581 0 6.45674 0C8.18605 0 9.80279 0.675349 11 1.88279C12.1972 0.675349 13.814 0 15.5433 0C19.1042 0 22 2.91628 22 6.48744C22 13.5274 15.7888 18.2753 11.88 19.6158C11.6242 19.7079 11.3172 19.7488 11 19.7488ZM6.45674 1.53488C3.74512 1.53488 1.53488 3.75535 1.53488 6.48744C1.53488 13.4763 8.25767 17.3646 10.6214 18.173C10.8056 18.2344 11.2047 18.2344 11.3888 18.173C13.7423 17.3646 20.4753 13.4865 20.4753 6.48744C20.4753 3.75535 18.2651 1.53488 15.5535 1.53488C13.9981 1.53488 12.5553 2.2614 11.6242 3.52C11.3377 3.90884 10.6828 3.90884 10.3963 3.52C9.44465 2.25116 8.01209 1.53488 6.45674 1.53488Z"
          fill={fill}
        />
      </Svg>
    );
  },

  getPlaceLocationIcon: (fill = "#CAC8C8") => {
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0)">
          <Path
            d="M8.00007 4C7.47266 4 6.95708 4.1564 6.51855 4.44941C6.08002 4.74243 5.73823 5.15891 5.53639 5.64618C5.33456 6.13345 5.28175 6.66962 5.38464 7.18691C5.48754 7.70419 5.74151 8.17935 6.11445 8.55229C6.48739 8.92523 6.96255 9.1792 7.47983 9.28209C7.99711 9.38499 8.53329 9.33218 9.02056 9.13035C9.50783 8.92851 9.92431 8.58672 10.2173 8.14819C10.5103 7.70966 10.6667 7.19408 10.6667 6.66667C10.6667 5.95942 10.3858 5.28115 9.88569 4.78105C9.38559 4.28095 8.70732 4 8.00007 4ZM8.00007 8C7.73636 8 7.47858 7.9218 7.25931 7.77529C7.04005 7.62878 6.86915 7.42055 6.76823 7.17691C6.66732 6.93328 6.64091 6.66519 6.69236 6.40655C6.74381 6.14791 6.87079 5.91033 7.05726 5.72386C7.24373 5.53739 7.48131 5.4104 7.73995 5.35895C7.99859 5.30751 8.26668 5.33391 8.51032 5.43483C8.75395 5.53574 8.96219 5.70664 9.1087 5.92591C9.25521 6.14517 9.33341 6.40296 9.33341 6.66667C9.33341 7.02029 9.19293 7.35943 8.94288 7.60948C8.69283 7.85952 8.35369 8 8.00007 8Z"
            fill={fill}
          />
          <Path
            d="M7.99995 16.0002C7.43858 16.003 6.88469 15.8714 6.38466 15.6162C5.88463 15.361 5.45301 14.9898 5.12595 14.5335C2.58528 11.0288 1.29662 8.39417 1.29662 6.70217C1.29662 4.92434 2.00286 3.21932 3.25998 1.9622C4.5171 0.705082 6.22211 -0.00115967 7.99995 -0.00115967C9.77778 -0.00115967 11.4828 0.705082 12.7399 1.9622C13.997 3.21932 14.7033 4.92434 14.7033 6.70217C14.7033 8.39417 13.4146 11.0288 10.8739 14.5335C10.5469 14.9898 10.1153 15.361 9.61524 15.6162C9.11521 15.8714 8.56132 16.003 7.99995 16.0002ZM7.99995 1.45417C6.60823 1.45576 5.27396 2.00932 4.28986 2.99342C3.30577 3.97752 2.7522 5.31179 2.75062 6.70351C2.75062 8.04351 4.01262 10.5215 6.30328 13.6808C6.49775 13.9487 6.75286 14.1667 7.04776 14.317C7.34265 14.4673 7.66895 14.5457 7.99995 14.5457C8.33095 14.5457 8.65724 14.4673 8.95214 14.317C9.24704 14.1667 9.50215 13.9487 9.69662 13.6808C11.9873 10.5215 13.2493 8.04351 13.2493 6.70351C13.2477 5.31179 12.6941 3.97752 11.71 2.99342C10.7259 2.00932 9.39167 1.45576 7.99995 1.45417Z"
            fill={fill}
          />
        </G>
        <ClipPath id="clip0">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Svg>
    );
  },
  getStarIcon: (stroke = "#CAC8C8") => {
    return (
      <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
        <Path
          d="M2.79619 8.51841C2.85505 8.25548 2.82633 7.98109 2.76079 7.75102C2.69542 7.52156 2.57518 7.27222 2.38664 7.08313L0.933783 5.62602C0.551893 5.24301 0.523233 4.96289 0.565884 4.82101C0.614235 4.67888 0.796912 4.47088 1.32934 4.38001L3.19393 4.06834C3.43984 4.02452 3.66643 3.90731 3.84454 3.77638C4.02252 3.64554 4.20383 3.46298 4.31651 3.24234L5.34628 1.17081C5.60603 0.655655 5.86583 0.55 6.00299 0.55C6.14015 0.55 6.39995 0.655656 6.65909 1.16961L7.68678 3.23701C7.82762 3.5195 8.08279 3.73868 8.31308 3.87407C8.78075 4.00644 9.11532 4.15597 9.45612 4.27869L10.6698 4.38107C11.203 4.47197 11.3857 4.68003 11.4341 4.8222C11.4768 4.96408 11.4481 5.2442 11.0662 5.62721L9.61934 7.08433C9.4305 7.27382 9.30757 7.52081 9.24088 7.75385C9.17472 7.98507 9.14749 8.26017 9.21034 8.522L9.62211 10.3236C9.78121 11.0114 9.62281 11.268 9.53313 11.3368C9.40227 11.3981 9.33022 11.3962 9.11532 11.396C8.94206 11.396 8.78106 11.3286 8.53775 11.1252L6.78665 10.0823C6.5414 9.93788 6.25619 9.88338 6.00299 9.88338C5.74979 9.88338 5.46458 9.93788 5.22175 10.0808L3.47043 11.1239C3.09861 11.3423 2.96081 11.4206 2.84105 11.4445C2.69716 11.4675 2.69716 11.4675 2.43605 11.3127C2.33915 10.8594 2.36663 10.4557 2.46555 9.94556L2.79619 8.51841Z"
          stroke={stroke}
          strokeWidth={1.1}
        />
      </Svg>
    );
  },
};

export default Icons;
