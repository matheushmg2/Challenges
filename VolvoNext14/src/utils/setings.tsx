import { CustomArrow } from "@/components/CustomArrow";


export const getSliderSettings = (arrowDotTrue: any) => ({
  settings: arrowDotTrue > 5 ? true : false,
  arrows: arrowDotTrue > 5 ? true : false,
  infinite: arrowDotTrue > 5 ? true : false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  initialSlide: 0,
  prevArrow: <CustomArrow position="left" />,
  nextArrow: <CustomArrow position="right" />,
  swipe: arrowDotTrue > 5 ? true : false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        swipe: arrowDotTrue > 4 ? true : false,
        arrows: arrowDotTrue > 4 ? true : false,
        infinite: arrowDotTrue > 4 ? true : false,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        swipe: arrowDotTrue > 3 ? true : false,
        arrows: arrowDotTrue > 3 ? true : false,
        infinite: arrowDotTrue > 3 ? true : false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: arrowDotTrue > 2 ? true : false,
        swipe: arrowDotTrue > 2 ? true : false,
        infinite: arrowDotTrue > 2 ? true : false,
        focusOnSelect: true,
        initialSlide: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 524,
      settings: {
        arrows: false,
        dots: arrowDotTrue > 1 ? true : false,
        swipe: arrowDotTrue > 1 ? true : false,
        infinite: arrowDotTrue > 1 ? true : false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
